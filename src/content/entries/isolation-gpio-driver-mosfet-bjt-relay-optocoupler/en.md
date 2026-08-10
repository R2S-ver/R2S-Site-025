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

# Overview

A practical guide to the four key technologies for driving high-power loads from microcontroller GPIO pins: MOSFETs, BJTs, relays, and optocouplers. This note explains when to use each, how to avoid common pitfalls, and what makes the **NMOS + Low-Side Switch + PWM** topology the workhorse of modern embedded hardware.

## The Golden Rule

GPIO pins are digital control interfaces, not power supplies. They output ~3.3V at ~20mA max. To drive a 12V/2A LED panel, you need a driver that separates the control signal from the power path.

## 1. MOSFET — The Voltage-Controlled Switch

MOSFETs are the dominant power-switching device in modern electronics.

### Three Terminals
| Pin | Name   | Role |
|-----|--------|------|
| G   | Gate   | Control input — draws virtually no continuous current |
| D   | Drain  | Carries the load current |
| S   | Source | Return path (NMOS typically to GND) |

**Key insight**: The control signal and the load current flow through completely separate paths. The GPIO only drives the Gate — the Drain-Source channel handles the high current from an external power supply.

### Why MCUs Can't Drive Loads Directly
A 12V/24W LED panel needs 2A. An Arduino GPIO can supply ~20mA. The MOSFET bridges this 100x gap — the MCU provides the control signal, and the external power supply provides the load current through the D-S channel.

## 2. NMOS vs PMOS

### NMOS (Low-Side Switch) — Recommended
```
12V → LED → NMOS → GND
         ↑
       GPIO
```
- MCU can drive directly (Gate voltage referenced to GND)
- Simple circuit, low conduction loss
- Ideal for PWM
- The default choice for learning and most projects

### PMOS (High-Side Switch)
```
12V → PMOS → LED → GND
        ↑
    Level Shifter
```
- Requires additional level translation (MCU can't drive 12V Gate directly)
- More complex — not recommended for beginners

## 3. PWM Dimming

PWM does not reduce voltage — it rapidly switches the MOSFET on and off, varying the duty cycle to control average power. LED brightness appears continuous due to persistence of vision.

- **LED dimming**: >200Hz (Arduino default 490Hz/980Hz is sufficient)
- **Motor control**: Several kHz to 20kHz
- Too low → visible flicker or audible noise
- Too high → increased switching losses

## 4. Freewheeling Diode (Flyback Protection)

**Required for**: Motors, fans, solenoids, relays (inductive loads)

When the MOSFET turns off, the collapsing magnetic field in an inductive load generates a reverse high-voltage spike that can destroy the MOSFET. A freewheeling diode (e.g., 1N4148, SS14) placed anti-parallel across the inductive load provides a safe current path to dissipate the stored energy.

Pure resistive loads (LEDs) typically do not need a freewheeling diode.

## 5. MOSFET vs BJT (NPN/PNP)

| Property | BJT (NPN/PNP) | MOSFET |
|----------|--------------|--------|
| Control | Current-controlled | Voltage-controlled |
| Input Impedance | Low | Very high |
| GPIO Current | Required continuously | Virtually none |
| Heat | Higher | Lower |
| High-Frequency PWM | Average | Excellent |
| High Current | Average | Excellent |

Modern products overwhelmingly use MOSFETs for power switching.

## 6. Relay vs MOSFET

| MOSFET | Relay |
|--------|-------|
| No mechanical contacts | Mechanical contacts |
| PWM capable | No PWM |
| Fast switching | Slower |
| Long lifespan | Limited mechanical life |
| Silent | Audible click |
| DC only | AC/DC compatible |

**Use relays for**: 220V AC, complete galvanic isolation, high-power isolation
**Use MOSFETs for**: LED, motor, fan, battery-powered products

## 7. Optocoupler (Opto-Isolator)

An optocoupler provides true electrical isolation using light: an internal LED illuminates a photosensitive receiver, transferring signals across a complete electrical barrier. This allows a 3.3V MCU to safely control 220V equipment while also improving noise immunity.

## Industrial Product Analysis Framework

When analyzing any product's power stage, ask:
1. Where does power enter?
2. Which are the high-power loads?
3. Who drives them (MOSFET / Relay)?
4. How does the MCU control them (GPIO / PWM)?
5. What protection is in place (freewheeling diode, TVS, fuse, optocoupler)?

## Critical Design Rules

### Always Choose Logic-Level NMOS
Standard MOSFETs often need ~10V Gate voltage to fully turn on. **Logic-level MOSFETs** (e.g., IRLZ44N) achieve low Rds(on) at just 3.3V or 5V. For 3.3V systems, this is absolutely critical — verify Rds(on) at your target Gate voltage in the datasheet.

### Gate Resistor Grounding
- **Gate series resistor (10-100Ω)**: Suppresses ringing and limits the instantaneous current from the MCU pin charging the Gate capacitance, protecting the GPIO.
- **Gate-Source pull-down resistor (10kΩ)**: Prevents the Gate from floating during power-up or when GPIO is high-impedance. A floating Gate can cause the MOSFET to partially conduct and self-destruct. This is never optional in production designs.

### Common Ground Is Mandatory
MCU GND and power supply GND must be directly connected. Without a common reference, the Gate signal has no return path. This is the #1 mistake beginners make.

### MOSFET Selection Checklist
- V<sub>GS(th)</sub>: Gate threshold (not the fully-on voltage)
- **R<sub>DS(on)</sub>**: On-resistance — lower is better (less heat)
- I<sub>D</sub>: Maximum drain current
- V<sub>DS</sub>: Maximum drain-source voltage

### PWM Frequency Selection
- LED dimming: >200Hz (Arduino defaults 490Hz/980Hz are sufficient)
- Motor control: Several kHz to 20kHz
- Too low = visible flicker / audible whine
- Too high = excessive switching losses
