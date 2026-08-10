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

# RC Filters — Simple Circuits That Show Up Everywhere

RC filters are one of those things that seem almost too simple to be useful — just a resistor and a capacitor — but once you start looking for them, you see them absolutely everywhere. Anti-aliasing on ADC inputs, debounce circuits, AC coupling between amplifier stages, PWM smoothing... it's all RC filters. And the math is genuinely straightforward once you've internalized how capacitive reactance behaves.

## The Core Idea: Capacitor Impedance Depends on Frequency

Capacitive reactance: **Xc = 1/(2πfC)**. As frequency goes up, impedance goes down. As frequency goes down, impedance goes up. Pair that with a resistor forming a voltage divider, and you've got a circuit that attenuates different frequencies by different amounts.

- **At low frequencies**: The capacitor looks like an open circuit (very high impedance). Signal passes or gets blocked depending on the configuration.
- **At high frequencies**: The capacitor looks like a short (very low impedance).
- **The cutoff frequency fc**: When |Xc| = R, output power is half the input (-3dB). The formula: **fc = 1/(2πRC)**

That last formula is probably the most-used equation in my notebook. I've calculated it for debounce circuits, audio filters, ADC front-ends — everywhere.

## RC Low-Pass Filter

### Circuit
```
Vin ── R ──┬── Vout
            │
            C
            │
           GND
```

Resistor in series, capacitor to ground. Low frequencies sail through the resistor to the output. High frequencies see the capacitor as a low-impedance path to ground and get shunted away.

### Characteristics
- Cutoff: **fc = 1/(2πRC)**
- Above fc, attenuation rolls off at -20dB/decade
- DC passes through unchanged (gain = 1, or 0dB)

### Where I Use Low-Pass Filters
- **Anti-aliasing before ADC**: Anything above the Nyquist frequency (fs/2) has to be gone before sampling, or it folds back as aliasing artifacts. RC low-pass right at the ADC input pin.
- **Power supply ripple cleanup**: Switching regulator output has high-frequency noise. An RC (or LC) low-pass knocks it down.
- **Hardware debounce**: 10kΩ + 100nF gives fc ≈ 159Hz. Mechanical contact bounce is in the kHz range, so the filter smooths it right out. I'll often do this plus software debounce for robustness.
- **PWM to analog**: Feed a PWM square wave through a low-pass with fc well below the PWM frequency, and you get a steady DC voltage proportional to duty cycle. Simple DAC.
- **Audio bass extraction**: In crossover networks and tone controls, low-pass picks out the bass.

### Design Notes
- The load impedance needs to be way bigger than R, or it shifts the cutoff frequency. If the next stage has low input impedance, buffer it.
- A single RC stage rolls off at only -20dB/decade. If you need a steeper cutoff, cascade stages (with buffers between them) or go active.
- Capacitor type matters in the signal path. Use C0G/NP0 or film caps. Avoid X7R ceramics — they're piezoelectric and nonlinear, which means distortion.

## RC High-Pass Filter

### Circuit
```
Vin ── C ──┬── Vout
            │
            R
            │
           GND
```

Capacitor in series, resistor to ground. High frequencies pass through the capacitor easily. Low frequencies get blocked by the capacitor's high impedance, and whatever makes it through gets pulled to ground by the resistor.

### Characteristics
- Cutoff: **fc = 1/(2πRC)** — same formula
- Below fc, attenuation at -20dB/decade
- At very high frequencies, gain approaches unity (0dB)

### Where I Use High-Pass Filters
- **AC coupling / DC blocking**: Removing DC offset from a sensor signal so I only see the AC variation. Super common in audio and sensor circuits.
- **Audio inter-stage coupling**: Capacitor between amplifier stages blocks the DC bias of one stage from messing up the next.
- **PIR sensor signal extraction**: Human movement causes AC infrared changes. A high-pass strips out the slow ambient temperature drift so you only see the motion signal.
- **ECG / bio-potential signals**: Electrode half-cell potentials create a DC offset (tens to hundreds of mV). High-pass removes it so you can amplify the actual heartbeat waveform.
- **Audio treble extraction**: High-pass in crossover networks feeds the tweeters.

### Design Notes
- Set fc well below your minimum signal frequency so in-band attenuation is negligible.
- The source impedance and R form a voltage divider — R needs to be large enough.
- Don't go crazy with huge coupling capacitors. Bigger C means longer settling time at power-up.

## RC Band-Pass Filter

If you cascade a high-pass followed by a low-pass (with a buffer between them so the stages don't load each other), you get a band-pass:

- Lower cutoff f_L = 1/(2π × R2 × C1) — set by the high-pass stage
- Upper cutoff f_H = 1/(2π × R1 × C2) — set by the low-pass stage
- Bandwidth BW = f_H - f_L, center frequency f_0 = √(f_L × f_H)

I've used this for audio equalizers, communication receiver IF filtering, and extracting signals at specific frequencies.

## Time Domain — Don't Forget τ

RC circuits matter just as much in the time domain:

- **Time constant τ = RC**
- Charging: Vout(t) = V_final × (1 - e^(-t/τ))
- Discharging: Vout(t) = V_initial × e^(-t/τ)
- After 1τ: about 63% of the way there. After 5τ: over 99% — effectively settled.

This shows up in timing circuits, power-on reset delays, debounce timing, and all sorts of pulse-shaping tricks. The same RC network that filters in the frequency domain also controls rise/fall time in the time domain.

## Active Filters — What's Next

Passive RC filters have three main limitations:
- High output impedance means weak load-driving ability
- No gain — you can only attenuate, never amplify
- -20dB/decade per stage is pretty gentle

Active filters fix all of these by adding an op-amp after the RC network for buffering and gain, plus feedback for shaping the response:
- **Sallen-Key**: The most common second-order active filter topology
- **Multiple Feedback (MFB)**: Better for high-Q applications
- **Switched-capacitor filters**: Clock-tunable cutoff, great for integration

But honestly? Mastering passive RC filters first is the right move. They're the foundation everything else builds on, and half the time a simple RC is all you actually need.
