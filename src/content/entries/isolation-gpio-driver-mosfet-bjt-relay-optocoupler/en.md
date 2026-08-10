---
title: Electrical Isolation & GPIO Driver — MOSFET, BJT, Relay, Optocoupler
date: 2026-08-10
description: A complete guide to driving high-power loads from an MCU — MOSFET voltage-controlled switching, BJT vs MOSFET comparison, relay isolation, optocoupler safety isolation, and PWM dimming practice.

type: note
category: Electronics

tags:
  - Electronics
  - MOSFET
  - Circuit Protection
  - Optocoupler
  - Power Driver

tools:
  - Circuit Design
  - Power Electronics

featured: false

lang: en

translationKey: isolation-gpio-driver-mosfet-bjt-relay-optocoupler
---

# Driving Loads from an MCU — MOSFET, BJT, Relay, and Optocoupler

Here's the fundamental problem: a GPIO pin on your typical MCU can output maybe 3.3V at 20mA. But you need to drive a 12V LED panel drawing 2A. That's a 100x gap in voltage and current. You need something between the MCU and the load — a driver that separates the control signal from the power path.

The **NMOS + Low-Side Switch + PWM** topology is the workhorse that solves this in most modern embedded hardware. But there are other tools for different situations, and knowing when to use each one is what these notes are about.

## The Golden Rule

GPIO pins are digital control interfaces, not power supplies. They tell something else what to do. That "something else" handles the actual current. Never try to power a load directly from a GPIO pin.

## 1. MOSFET — The Voltage-Controlled Switch

MOSFETs are everywhere in power electronics, and for good reason. They're voltage-controlled, which means the Gate draws essentially zero continuous current — it just needs enough voltage to turn on.

### Three Terminals
| Pin | Name   | Role |
|-----|--------|------|
| G   | Gate   | Control input — virtually no continuous current |
| D   | Drain  | Carries the load current |
| S   | Source | Return path (NMOS typically to GND) |

The key insight that took me a bit to fully appreciate: **the control signal and the load current flow through completely separate paths**. The GPIO only touches the Gate. The Drain-Source channel carries the high current from an external power supply. They're electrically separate — the MOSFET is just the bridge between them.

### Why MCUs Can't Drive Loads Directly
A 12V/24W LED panel needs 2A. An Arduino GPIO can supply about 20mA. That's a 100x gap. The MOSFET bridges it: the MCU provides the control voltage to the Gate, and the external 12V supply provides the current through the Drain-Source channel.

## 2. NMOS vs PMOS

### NMOS (Low-Side Switch) — This Is What I Use
```
12V → LED → NMOS → GND
         ↑
       GPIO
```
- The NMOS sits between the load and ground.
- The Gate is referenced to ground, so a 3.3V or 5V GPIO can drive it directly (assuming a logic-level MOSFET — more on that below).
- Simple circuit, low conduction losses, great for PWM.
- This is the default choice for learning and for most projects I build.

### PMOS (High-Side Switch)
```
12V → PMOS → LED → GND
        ↑
    Level Shifter
```
- The PMOS sits between the supply and the load.
- To turn it on, you need to pull the Gate below the Source voltage by at least V_GS(th). With the Source at 12V, that means the Gate needs to be near 12V - V_GS(th), which a 3.3V GPIO can't do directly.
- You need additional level translation — a transistor or driver IC to shift the GPIO's 3.3V swing up to the 12V rail. It's more complex. I generally avoid it unless there's a specific reason I need high-side switching.

## 3. PWM Dimming

PWM doesn't reduce voltage. It switches the MOSFET fully on and fully off really fast, varying the percentage of time it's on (the duty cycle). The load sees the average power. For LEDs, persistence of vision means your eye perceives continuous dimming rather than flickering — as long as the frequency is high enough.

- **LED dimming**: >200Hz (Arduino defaults of 490Hz or 980Hz work fine)
- **Motor control**: Several kHz to 20kHz
- Too low → visible flicker or audible whine from the motor windings
- Too high → switching losses increase (the MOSFET spends more time in the linear region during transitions)

## 4. Freewheeling Diode — Don't Skip This for Inductive Loads

**Required for**: Motors, fans, solenoids, relay coils — anything with a wound coil.

When the MOSFET turns off, the magnetic field in an inductive load collapses. That collapsing field generates a reverse voltage spike that can be several times the supply voltage — easily enough to destroy the MOSFET's Drain-Source junction. A freewheeling diode (1N4148 for small stuff, SS14 or similar Schottky for higher current) placed anti-parallel across the coil gives that stored energy a safe path to circulate and dissipate.

Pure resistive loads like LEDs generally don't need one, though it doesn't hurt to add it.

## 5. MOSFET vs BJT (NPN/PNP)

| Property | BJT (NPN/PNP) | MOSFET |
|----------|--------------|--------|
| Control | Current-controlled | Voltage-controlled |
| Input Impedance | Low | Very high |
| GPIO Current | Required continuously | Virtually none |
| Heat | Higher | Lower |
| High-Frequency PWM | Average | Excellent |
| High Current | Average | Excellent |

BJTs are current-controlled: you need to keep feeding base current to keep them on. MOSFETs are voltage-controlled: once the Gate capacitance is charged, basically no more current flows. For modern DC power switching, MOSFETs win on pretty much every metric. BJTs still show up in analog circuits (amplifiers, linear regulators) and some niche high-voltage applications, but for driving loads from an MCU? MOSFET, every time.

## 6. Relay vs MOSFET

| MOSFET | Relay |
|--------|-------|
| No mechanical contacts | Mechanical contacts |
| PWM capable | No PWM |
| Fast switching | Slower |
| Long lifespan | Limited mechanical life |
| Silent | Audible click |
| DC only | AC/DC compatible |

**I reach for a relay when**: I'm switching 220V AC mains, I need true galvanic isolation (the control and load circuits are physically separate), or I need the load completely disconnected (no leakage current).

**I reach for a MOSFET when**: LED, motor, fan, battery-powered product — basically anything DC under a few amps where I want speed, silence, and PWM control.

## 7. Optocoupler — When You Need Actual Isolation

An optocoupler transmits signals using light: an internal LED shines on a photosensitive receiver, transferring the signal across a complete electrical barrier. There's no conductive path between input and output — only photons. This lets a 3.3V MCU safely control a 220V circuit, and it also breaks ground loops that cause noise problems.

The classic use case: MCU GPIO → current-limiting resistor → optocoupler LED → optocoupler transistor → gate driver → TRIAC or relay → mains load. The low-voltage and high-voltage sides never touch.

## The Analysis Framework I Use

When I look at any product's power stage, I ask these five questions:

1. Where does power enter the board?
2. Which parts are the high-power loads?
3. Who drives them — MOSFET or relay?
4. How does the MCU control them — GPIO on/off or PWM?
5. What protection is in place — freewheeling diode, TVS, fuse, optocoupler?

Answering these for a teardown or a design review gives you a clear picture of the power architecture.

## Critical Design Rules I've Learned

### Always Choose Logic-Level MOSFETs
Standard MOSFETs often need ~10V on the Gate to fully turn on and achieve their rated R_DS(on). A 3.3V GPIO can't deliver that. **Logic-level MOSFETs** (like the IRLZ44N — note the "L" for "logic") are designed to hit low R_DS(on) at 3.3V or 5V Gate drive. For 3.3V systems, this is absolutely non-negotiable. Read the datasheet and check R_DS(on) at your actual Gate voltage, not just the headline number at V_GS = 10V.

### Gate Resistor and Gate-Source Pull-Down
- **Gate series resistor (10-100Ω)**: The Gate looks like a capacitor. When your GPIO switches, it has to charge/discharge that capacitance, and the instantaneous current can be surprisingly high. The series resistor limits that current to protect the GPIO pin. It also damps parasitic ringing.
- **Gate-Source pull-down resistor (10kΩ)**: During power-up, or if the GPIO is in high-impedance (input) mode, the Gate can float. A floating Gate on a MOSFET can cause it to partially turn on — high resistance, huge power dissipation, silicon death. The pull-down keeps the Gate firmly at 0V when it's not being actively driven. This is never optional in a production design.

### Common Ground Is Mandatory
The MCU's GND and the power supply's GND must be directly connected. Without a shared reference, the Gate drive voltage has no return path and the MOSFET won't switch. This is the #1 newbie mistake I see. If you need isolation between the MCU and the load, use an optocoupler — don't try to leave the grounds separate without one.

### MOSFET Selection Checklist
- **V_GS(th)** — Gate threshold voltage. Note: this is where it *starts* to turn on, not where it's fully on. Don't confuse them.
- **R_DS(on)** — On-resistance. Lower is always better (less heat = I² × R_DS(on)).
- **I_D** — Maximum continuous drain current. Leave margin.
- **V_DS** — Maximum drain-source voltage. Leave margin here too.

### PWM Frequency Selection
- LED dimming: >200Hz avoids visible flicker. Arduino 490Hz/980Hz is fine.
- Motor control: several kHz to 20kHz to stay above the audible range.
- Too low = flicker/whine. Too high = heat from switching losses. Find the sweet spot.
