---
title: Signal Filtering — RC High-Pass & Low-Pass
date: 2026-08-10
description: A designer's guide to passive RC filter circuits — cutoff frequency calculation, frequency response characteristics, and practical applications in signal conditioning.

type: note
category: Electronics

tags:
  - Electronics
  - Signal Processing
  - RC Filter
  - High-Pass Filter
  - Low-Pass Filter

tools:
  - Circuit Analysis
  - Analog Electronics

featured: false

lang: en

translationKey: signal-filter-rc-high-low-pass
---

# Overview

RC filters are among the most fundamental and widely used signal conditioning circuits. With just a resistor (R) and a capacitor (C), you can selectively pass or block signals based on frequency. Despite their simplicity, RC filters appear everywhere — analog front-end design, anti-aliasing, debounce circuits, audio processing, and more.

## Core Principle: Capacitive Reactance vs. Frequency

Capacitive reactance Xc = 1/(2πfC). As frequency increases, impedance decreases; as frequency decreases, impedance increases. Using this property with a resistive divider creates frequency-selective attenuation.

- **At low frequencies**: The capacitor acts like an open circuit (high impedance)
- **At high frequencies**: The capacitor acts like a short circuit (low impedance)
- **Cutoff frequency fc**: When |Xc| = R, the output power is half the input (-3dB): **fc = 1/(2πRC)**

## RC Low-Pass Filter

### Circuit
```
Vin ── R ──┬── Vout
            │
            C
            │
           GND
```

### Characteristics
- Cutoff frequency: **fc = 1/(2πRC)**
- Signals above fc are attenuated at -20dB/decade
- DC gain is unity (0dB) — DC passes through unchanged

### Applications
- **Anti-aliasing filter**: Removes frequencies above the Nyquist limit (fs/2) before ADC sampling
- **Power supply ripple suppression**: Filters high-frequency switching noise from DC/DC converters
- **Hardware debounce**: 10kΩ + 100nF (fc ≈ 159Hz) smooths mechanical contact bounce (kHz range)
- **PWM smoothing**: Converts PWM square wave to analog voltage (simple DAC)
- **Audio bass extraction**: Low-frequency signal extraction in crossovers and tone controls

### Design Notes
- The load impedance must be much larger than R to avoid shifting fc
- A single RC stage rolls off slowly (-20dB/dec); cascade multiple stages or use active filters for steeper slopes
- Use C0G/NP0 or film capacitors in signal paths — avoid X7R ceramics (piezoelectric, nonlinear)

## RC High-Pass Filter

### Circuit
```
Vin ── C ──┬── Vout
            │
            R
            │
           GND
```

### Characteristics
- Cutoff frequency: **fc = 1/(2πRC)**
- Signals below fc are attenuated at -20dB/decade
- At infinite frequency, gain approaches unity (0dB)

### Applications
- **AC coupling / DC blocking**: Remove DC offset from sensor signals, keep only the AC component
- **Audio inter-stage coupling**: Block DC bias between amplifier stages
- **PIR sensor signal extraction**: Human movement causes AC infrared changes; high-pass filter removes slow ambient drift
- **ECG / Bio-potential signals**: Remove DC offset from electrode half-cell potentials
- **Audio treble extraction**: Feed high-frequency content to tweeters in crossover networks

### Design Notes
- Set fc far below the minimum signal frequency so in-band attenuation is negligible
- Source impedance and R form a voltage divider — R must be large enough
- Avoid excessively large coupling capacitors (long inrush settling time)

## RC Band-Pass Filter

Cascade a high-pass followed by a low-pass (buffer between stages recommended):

- Lower cutoff f_L = 1/(2π·R2·C1) — set by the high-pass stage
- Upper cutoff f_H = 1/(2π·R1·C2) — set by the low-pass stage
- Bandwidth BW = f_H - f_L, center frequency f_0 = √(f_L · f_H)

Applications: audio equalizers, communication receiver IF filtering, signal extraction at specific frequencies.

## Time Domain Response

RC circuits are equally important in the time domain:

- **Time constant τ = RC**
- Step response: Vout(t) = V_final × (1 - e^(-t/τ)) (charging), Vout(t) = V_initial × e^(-t/τ) (discharging)
- After 1τ: ~63.2% change; after 5τ: >99.3% change (effectively settled)
- Used in timing circuits, reset circuits, power-on delay, and debounce

## Active Filters (Preview)

Limitations of passive RC filters:
- Low load-driving capability (high output impedance)
- No gain (cannot amplify)
- Limited roll-off per stage

Active filters add op-amps after the RC network for buffering and gain, with feedback enabling complex filter responses:
- **Sallen-Key topology**: Most common second-order active filter
- **Multiple Feedback (MFB)**: Suitable for high-Q applications
- **Switched-capacitor filters**: Clock-tunable cutoff, ideal for integration

Mastering passive RC filters provides the foundation for all filter design.
