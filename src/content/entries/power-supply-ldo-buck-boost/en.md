---
title: Power Supply — LDO, Buck, Boost Converters
date: 2026-08-10
description: A designer's guide to power supply topologies — LDO linear regulators, Buck/Boost switching converters, and practical selection criteria.

type: note
category: Electronics

tags:
  - Electronics
  - Power Supply
  - LDO
  - Buck Converter
  - Circuit Protection

tools:
  - Circuit Design

featured: false

lang: en

translationKey: power-supply-ldo-buck-boost
---

# Power Supply Design — What I've Learned So Far

I started diving into power supply design because, honestly, it's the one thing every single board I build needs to get right. You can have the fanciest MCU and the most clever firmware, but if the power rails are noisy or the regulator is cooking itself, nothing works reliably. These notes cover what I've figured out about the common topologies — LDOs, Buck, Boost, Buck-Boost — plus the stuff that sits around them like battery charging and protection.

## The Three Questions I Ask Before Picking a Regulator

1. What's the input-output voltage difference? If it's more than about 3V and I'm pulling over 0.3A, I don't even consider an LDO — I go straight to a Buck.
2. Is this a noise-sensitive part of the circuit? Wireless modules and precision analog stuff really want an LDO, or at least extra filtering after a switcher.
3. What's the physical situation? If the board's going into a tiny sealed enclosure with no airflow, I'm using switching regulators. Heat buildup in a closed box is no joke.

## Power Architecture — It's a Distribution Problem

The way I think about it now: a power system isn't about "making electricity" — it's about getting the right voltage, at the right current, with the right noise level, to each part of the board. Here's the typical chain I see in consumer products:

```
Input (USB/Battery) → Protection (Fuse, Reverse Polarity) → Charge Management → Battery → DC/DC Conversion → Multiple Voltage Rails → MCU/Sensors/LEDs/Motors
```

Different blocks on the same board often need different voltages — your MCU might want 3.3V, a motor driver needs 12V, a sensor runs at 1.8V. You end up with multiple rails, and each conversion stage loses a little energy, so you've got to think about the whole chain.

## LDO Linear Regulators — Simple, Quiet, But Can Get Hot

An LDO works by burning off the extra voltage as heat. The math is dead simple:

```
P_loss = (Vin - Vout) × I
```

So here's the thing — LDOs aren't always bad. Dropping 5.5V to 5V at 1A gives you 0.5W of heat (about 91% efficient), which is totally fine. But dropping 12V to 5V at the same 1A? That's 7W of heat (42% efficient) — you'll need a heatsink the size of your fist.

The upside: LDO circuits are dead simple (input cap + LDO + output cap, that's basically it), the output is super clean, and they're cheap. I use them all the time for things like taking a 3.6V Li-ion down to 3.3V for an MCU or sensor. I'd also reach for one when I'm feeding analog circuits — audio amps, ADC references, that kind of thing.

One useful trick I've learned: you can use the PCB copper itself as a heatsink for an LDO. Just pour a big copper area under the tab and stitch it with vias. It's not as good as a real heatsink, but it's free and often enough.

## Buck Switching Converters — Efficient, But More Parts

A Buck converter doesn't burn off voltage like an LDO. Instead, it switches a MOSFET on and off really fast, then smooths the result through an inductor and capacitor. Efficiencies of 85-97% are normal.

The trade-off: you get high-frequency ripple on the output, and you need more external components — at minimum an inductor, a diode (or sync rectifier MOSFET), and input/output caps. The duty cycle roughly follows D = Vout/Vin, so for 12V to 5V, the switch is on about 42% of the time.

I default to a Buck whenever the voltage drop exceeds ~3V and current is above ~0.3A. The LM2596 module is my go-to for prototyping — it's cheap, adjustable, and just works. But layout matters. Keep the switching node short and fat to minimize EMI. And pick an inductor whose saturation current exceeds your max load current — if the inductor saturates, it's basically a wire, and your MOSFET won't survive that.

For noise-sensitive circuits, I've had good results with a Buck + LDO cascade: the Buck handles the big voltage drop efficiently, then a small-dropout LDO cleans up the ripple. Best of both worlds.

## Boost and Buck-Boost

- **Boost**: Steps voltage up. Classic case: single Li-ion cell (3.7V nominal) needs to drive something at 5V or 12V. The switch stores energy in the inductor during on-time, then releases it in series with the input during off-time, so Vout > Vin.
- **Buck-Boost**: Handles the case where Vin might be above or below Vout. Think of a Li-ion battery that ranges from 4.2V fully charged down to 2.7V near empty, but your circuit needs a steady 3.3V. The converter automatically switches between Buck and Boost modes depending on conditions.

One thing to watch with Boost circuits: inrush current at startup can be significant — a soft-start is usually a good idea. And Buck-Boost efficiency is typically a few points lower than a pure Buck or Boost because there are more switching events happening.

## Battery Charging and Protection — Don't Skip Either One

You cannot just connect 5V directly to a Li-ion cell. Seriously, don't. You need a charge management IC.

- **TP4056**: The chip I see everywhere for single-cell Li-ion charging. It does CC/CV (constant current then constant voltage to 4.2V). It's linear, so excess voltage becomes heat — that big exposed pad on the bottom is there for a reason. You need to pour copper under it and stitch vias to keep it cool.
- **Protection board** (DW01 + 8205A): This is the safety net. It monitors for overcharge (>4.25V), over-discharge (<2.5V), overcurrent, and short circuit. If anything goes wrong, it cuts the circuit.

The TP4056 is the "charging rules" chip. The protection board is the "safety net." You need both. In practice, a lot of TP4056 modules already have the DW01+8205A integrated, so you get both in one small board.

The protection board has to be physically close to the battery — ideally spot-welded with nickel strips right onto the cell terminals. If you put it on the main board with connectors and wires in between, the resistance and potential for loose connections undermine the protection's reliability.

## Thermal Design — Efficiency Doesn't Mean No Heat

Even at 95% efficiency, a 50W output still means about 2.6W of heat you've got to get rid of. That's enough to make a MOSFET uncomfortably hot without a thermal path.

The main heat sources in a switcher are the MOSFET (conduction losses from R_DS(on) plus switching losses) and the inductor (DCR losses). You need to think about where that heat goes: MOSFET → thermal pad → copper pour → maybe to the enclosure or a metal frame. In phone chargers and laptop adapters, the case itself is the heatsink.

I've learned to not just look at the efficiency percentage — calculate the absolute power lost in watts. Even a couple of watts needs a plan.

## AC-DC Topologies (Stuff I'm Still Learning)

- **Flyback**: Dominant below ~100W. Phone chargers, LED drivers, router power supplies. Simple, cheap, can be isolated.
- **Forward**: Steps up from flyback, 100W+. Better efficiency, more complex.
- **Push-Pull, Half-Bridge, Full-Bridge**: Increasing power levels. Server PSUs, industrial stuff, UPS.
- **LLC Resonant**: This is what modern ATX PC power supplies use. PFC → LLC → synchronous rectification → 12V, hitting 90-96% efficiency.

One thing I noticed tearing down an old phone charger: trace the power path. AC 220V → fuse resistor → common-mode choke → bridge rectifier → big 400V electrolytic → transformer primary → switching IC → transformer secondary → Schottky rectifier → electrolytic filtering → 5V USB output. The optocoupler sits across the isolation barrier, feeding back the output voltage to the primary-side controller. Super satisfying to follow that path on a real PCB.

## Ripple Mitigation — The Cascaded Approach

For circuits that need both efficiency and low noise, the pattern I keep coming back to is:

**Input DC → Buck (big efficient step-down) → LDO (small dropout, ripple cleanup) → Load**

The Buck takes, say, 12V down to 5.5V at 90%+ efficiency. Then the LDO drops 5.5V to 5V — that's only 0.5V of dropout, so P_loss is tiny, but the LDO's PSRR crushes whatever ripple made it through the Buck. You get clean power without burning watts.

## Reference Module Cards

| Module | Type | Vin | Vout | I_max | Efficiency | Heat |
|--------|------|-----|------|-------|------------|------|
| LM7805 | Linear | 7-25V | 5V | 1.5A | ≈Vo/Vin | High |
| LM2596 | Buck | 4.5-40V | Adj 1.25-37V | 2-3A | 85-93% | Low |

| Module | Function | Method | Protection |
|--------|----------|--------|------------|
| TP4056+Protection | 1S Li-ion Charging | Linear, 1A adj | OV, UV, OC, SC |

## What I Take Away from All This

- Power design is energy distribution, not "making electricity." Think about the whole chain.
- LDO and Buck aren't competitors — they're complementary tools. LDO for low-noise, low-power spots; Buck for efficiency when the voltage gap is big.
- Switching supplies still need thermal design. Don't let a 95% number make you complacent.
- The design flow I follow now: trace the energy path → pick your conversion stages → plan the thermal path → integrate with the mechanical design. That last part — the electronics-to-enclosure interface — is where industrial design and EE actually meet.
