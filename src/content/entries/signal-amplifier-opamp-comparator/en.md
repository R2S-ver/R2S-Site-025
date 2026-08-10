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

# Op-Amps and Comparators — My Study Notes

Op-amps took me a while to really get comfortable with. The math isn't hard — it's the "virtual short" and "virtual open" concepts that you have to internalize before the circuits start making sense. Once they click, though, you can derive pretty much any op-amp circuit from first principles. These notes are what I came back to after working through a bunch of examples.

## The Two Core Ideas

### Virtual Short
When you've got negative feedback, the op-amp fights like crazy to make the voltage at the inverting input (-) match the non-inverting input (+). It does this by swinging its output until the feedback network forces them equal. This is the foundation of every gain calculation. If you don't understand why V- = V+ in a feedback circuit, nothing else will make sense.

### Virtual Open
Op-amp inputs have absurdly high impedance — megohms and up. They draw basically zero current. So in your analysis, you treat the inputs as open circuits: they sense voltage but don't load whatever's driving them. This is what lets you apply Kirchhoff's current law without worrying about current flowing into the op-amp pins themselves.

### Output Saturation
The op-amp's output can only swing between its supply rails (actually a bit less). If the gain equation says the output should be 12V but the op-amp runs on 5V, you're going to hit the rail and the output clips. At that point, you're no longer in the linear region and virtual short breaks down.

### Voltage Follower — The Special Case
Take an op-amp, set Rf = 0 (a wire) and Rg = infinity (open circuit), and you get gain = 1. It doesn't amplify voltage at all. What it does is impedance transformation: a weak, high-impedance sensor signal goes in, and a strong, low-impedance copy comes out that can actually drive the next stage. Super useful as a buffer.

## The Two Basic Amplifier Topologies

### Non-Inverting Amplifier
Signal goes into the (+) input. Feedback resistors Rf and Rg set the gain.

**Vout = Vin × (1 + Rf/Rg)** — gain is always >= 1.

This is my go-to for high-impedance buffering and sensor amplification. The input impedance is megohm-level, so you basically don't load the source at all.

### Inverting Amplifier
Signal goes into the (-) input. The (+) input is grounded. Output is 180 degrees out of phase with the input.

**Vout = -(Rf/Rin) × Vin** — gain can be less than 1.

I use this for audio mixing (multiple signals summed at the virtual ground), current-to-voltage conversion, and when I need phase inversion.

### Quick Comparison

| Property | Non-Inverting | Inverting |
|----------|--------------|-----------|
| Input Impedance | Very high (MΩ) | Equal to Rin (kΩ) |
| Gain | 1+Rf/Rg, ≥1 | -Rf/Rin, can be <1 |
| Output Phase | Same as input | Inverted |
| Virtual Ground | No | Yes |

The "virtual ground" thing in the inverting configuration is important. Because the (+) input is tied to real ground, virtual short forces the (-) input to 0V too — but this 0V isn't a real ground connection, it's maintained by the op-amp's output through the feedback resistor. The input impedance seen by the signal source is just Rin itself, typically a few kΩ. That's very different from the near-infinite impedance the non-inverting config gives you.

## Classic Op-Amp Circuits I Worked Through

These are the circuits I went through step by step, deriving each one from virtual short/virtual open and Kirchhoff's laws:

1. **Summing Amplifier (Adder) 1** — Inverting configuration, multiple inputs summed at the virtual ground
2. **Summing Amplifier (Adder) 2** — Non-inverting configuration
3. **Subtractor (Differential Amplifier)** — Vout = V2 - V1, the classic
4. **Integrator** — Vout = -1/(RC) ∫ Vin dt; with a constant input, the output ramps linearly
5. **Differentiator** — Vout = -RC × dVin/dt; a step input produces a sharp pulse
6. **Differential Amplifier** — Pulls a weak differential signal out of common-mode noise
7. **Current Detection (4-20mA)** — Takes industrial sensor current and converts it to a voltage an ADC can read
8. **Voltage-to-Current Converter** — Drives a proportional current through a load based on input voltage
9. **PT100 RTD Sensor Front-End** — 3-wire bridge amplifier with lead resistance compensation

## Where These Circuits Show Up in Real Products

### Non-Inverting Amplifier Applications
- Electronic scales and pressure sensors — bridge sensor signal amplification
- Temperature controllers — thermocouple microvolt-level signals need a lot of clean gain
- PIR infrared motion sensors — bandpass filter + amplification
- Motor current sensing — shunt resistor voltage amplified for the MCU's ADC
- Audio products — electret microphone preamplifier

### Inverting Amplifier Applications
- Audio mixers — multiple channels summed at the virtual ground; channels don't interfere with each other
- Sensor signal inversion — when the sensor's output polarity is backwards from what you need
- Current-to-voltage conversion — photodiode circuits basically always do this
- Building block for differential amplifiers

## Design Gotchas I've Run Into

- **Supply rail headroom**: Standard op-amps like the LM358 can't swing all the way to the rails. On a 5V supply, the max output is about VCC - 1.5V = 3.5V. If your MCU's ADC reference is 3.3V, that actually lines up nicely. If you need rail-to-rail swing, get a rail-to-rail op-amp.
- **Input common-mode range**: The LM358's inputs work down to ground (handy for single-supply), but only up to VCC - 1.5V. If your input signal is 6V on a 5V supply, you're outside the common-mode range and the op-amp won't behave.
- **Gain-bandwidth product**: LM358 is about 1MHz. Fine for thermal, optical, and audio signals — not enough for high-frequency stuff.
- **Bias current path**: The inverting input needs a DC path to ground through a resistor. The input bias current has to go somewhere; if you don't give it a path, the output drifts.
- **Decoupling**: 0.1μF cap near the power pins. Always. No exceptions.
- **Comparator hysteresis**: If a comparator's input hovers near the threshold, it'll chatter like crazy. Add a positive feedback resistor from output to (+) input to create a hysteresis window. This is a must for any production circuit.

## Op-Amp vs Comparator — They're Different Tools

| | Op-Amp (e.g., LM358) | Comparator (e.g., LM393) |
|---|---|---|
| Operating Region | Linear (with feedback) | Saturation / Open-loop |
| Output | Continuous analog voltage | Digital HIGH/LOW only |
| Purpose | Precision amplification | Threshold decision |
| Speed | Moderate | Fast |
| Feedback | Negative (stabilizing) | Positive (hysteresis) |

The op-amp lives in the linear region because negative feedback keeps it there. It's trying to be precise, faithful, low-distortion — its job is amplification.

The comparator runs open-loop on purpose. It wants the two inputs to be different, and the moment one crosses the other, the output slams to a rail. Its job is making a yes/no decision. Speed and clean switching are what matter.

Here's how I think about choosing between them:

- Need to **read a continuous analog value** — temperature curve, light level, pressure sensor — use an **op-amp** for buffering, amplification, and filtering, then feed it to the ADC.
- Need to **make a binary decision** — temperature threshold reached, motion detected, battery low — use a **comparator** for a clean HIGH/LOW output or to trigger an interrupt.
