---
title: Signal Amplifier — Op-Amp & Voltage Comparator
date: 2026-08-10
description: Core principles, classic circuit analysis, and industrial applications of operational amplifiers and voltage comparators — covering inverting/non-inverting amplifiers, adders, subtractors, integrators, differentiators, and sensor interfaces.

type: note
category: Electronics

tags:
  - Electronics
  - Signal Processing
  - Op-Amp
  - Comparator
  - Analog Circuits

tools:
  - Circuit Analysis
  - Analog Electronics

featured: false

lang: en

translationKey: signal-amplifier-opamp-comparator
---

# Overview

A deep dive into operational amplifiers (Op-Amps) and voltage comparators — the two fundamental building blocks of analog signal conditioning. This note covers the core principles of virtual short and virtual open, derives the gain equations for all classic op-amp topologies, and provides practical guidance for industrial product design.

## Core Concepts

### Virtual Short (虚短)
When negative feedback is present, the op-amp drives its output to force the inverting input (-) voltage to closely match the non-inverting input (+) voltage. This is the foundation of all gain calculations.

### Virtual Open (虚断)
Op-amp inputs have extremely high impedance (MΩ+), drawing negligible current. In linear analysis, the inputs can be treated as an open circuit — they sense voltage without loading the signal source.

### Output Saturation
Op-amp output is always bounded by the supply rails. If the theoretical amplified value exceeds the supply voltage, the output clips and the amplifier leaves its linear region.

### Voltage Follower
A special case where Rf=0 and Rg=∞, giving unity gain (gain=1). It does not amplify voltage but provides impedance transformation — converting a high-impedance weak sensor signal into a low-impedance strong drive signal.

## Amplifier Topologies

### Non-Inverting Amplifier
Signal enters at (+), feedback network Rf/Rg sets the gain.
**Vout = Vin × (1 + Rf/Rg)** — gain is always ≥1.
Best for: high-impedance buffering, sensor amplification.

### Inverting Amplifier
Signal enters at (-), non-inverting input (+) is grounded. Output is 180° out of phase with input.
**Vout = -(Rf/Rin) × Vin** — gain can be <1.
Best for: audio mixing, current-to-voltage conversion, phase inversion.

### Key Comparison

| Property | Non-Inverting | Inverting |
|----------|--------------|-----------|
| Input Impedance | Very high (MΩ) | Equal to Rin (kΩ) |
| Gain | 1+Rf/Rg, ≥1 | -Rf/Rin, can be <1 |
| Output Phase | Same as input | Inverted |
| Virtual Ground | No | Yes |

## Classic Op-Amp Circuits

This note includes detailed derivations (using virtual short and Kirchhoff's laws) for:

1. **Summing Amplifier (Adder) 1** — Inverting configuration, multiple inputs
2. **Summing Amplifier (Adder) 2** — Non-inverting configuration
3. **Subtractor (Differential Amplifier)** — Vout = V2 - V1
4. **Integrator** — Vout = -1/(RC) ∫ Vin dt, output ramps linearly with constant input
5. **Differentiator** — Vout = -RC × dVin/dt, produces pulses from step inputs
6. **Differential Amplifier** — Extracts weak differential signals from common-mode noise
7. **Current Detection (4-20mA)** — Converts industrial 4-20mA sensor current to voltage for ADC
8. **Voltage-to-Current Converter** — Drives current through load proportional to input voltage
9. **PT100 RTD Sensor Front-End** — 3-wire RTD bridge amplifier with lead resistance compensation

## Industrial Applications

### Non-Inverting Amplifier Applications
- Electronic scales / pressure sensors — bridge sensor amplification
- Temperature controllers — thermocouple signal amplification
- PIR infrared motion sensors — bandpass filter + amplification
- Motor current sensing — shunt resistor voltage amplification
- Audio products — electret microphone preamplifier

### Inverting Amplifier Applications
- Audio mixers — multiple channels summed at virtual ground
- Sensor signal inversion — correcting inverse sensor characteristics
- Current-to-voltage conversion — photodiode detection circuits
- Differential amplifier building blocks

## Design Considerations
- **Supply rail headroom**: Standard op-amps (LM358) output ~VCC-1.5V max. Use rail-to-rail op-amps for full swing.
- **Input common-mode range**: LM358 inputs work down to ground, but only up to VCC-1.5V.
- **Gain-bandwidth product**: LM358 ~1MHz — fine for thermal/optical signals, insufficient for high-frequency.
- **Bias current path**: Inverting input must have a DC path to ground via resistor.
- **Decoupling**: Always place 0.1μF capacitor near power pins.
- **Comparator hysteresis**: Essential for clean switching — add positive feedback resistor to create a hysteresis window.

## Op-Amp vs Comparator

| | Op-Amp (e.g., LM358) | Comparator (e.g., LM393) |
|---|---|---|
| Operating Region | Linear (with feedback) | Saturation / Open-loop |
| Output | Continuous analog voltage | Digital HIGH/LOW only |
| Purpose | Precision amplification | Threshold decision |
| Speed | Moderate | Fast |
| Feedback | Negative (stabilizing) | Positive (hysteresis) |

- Need to **read a continuous analog value** (temperature, light, pressure curve) → use an **Op-Amp** for buffering, amplification, and filtering, then feed to MCU's ADC.
- Need to **make a binary decision** (temperature threshold, motion detection, low-battery alarm) → use a **Comparator** for clean HIGH/LOW output or interrupt triggering.
