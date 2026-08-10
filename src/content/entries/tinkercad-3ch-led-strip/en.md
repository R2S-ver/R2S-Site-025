---
title: Tinkercad 3-Channel LED Strip Control
date: 2026-07-25
description: Virtual circuit simulation of a 3-channel individually-addressable LED strip controller using push buttons for channel selection and potentiometers for RGB + brightness control.

type: lab
category: Embedded System
cover: 01-tinkercad-circuit.png

tags:
  - Arduino
  - Tinkercad
  - NeoPixel
  - Potentiometer
  - Simulation

tools:
  - Tinkercad Circuits
  - Arduino (simulated)
  - NeoPixel Strip ×3
  - Potentiometer ×4
  - Push Button ×3

featured: false

lang: en

translationKey: tinkercad-3ch-led-strip
---

![Tinkercad Circuit](./01-tinkercad-circuit.png)

# Overview

A virtual circuit designed in Tinkercad that controls three independent NeoPixel LED strips. Three push buttons switch between strips, while four potentiometers set RGB values and brightness for the currently selected strip.

# Controls

- **3 push buttons** — Select active LED strip (1, 2, or 3)
- **3 potentiometers** — R, G, B values (0–255)
- **1 potentiometer** — Master brightness (0–255)
- **Status RGB LED** — Indicates which strip is currently selected (red/green/blue)

# Code Structure

```cpp
struct LightState {
  int r, g, b, brightness;
};

LightState lights[3];  // one per strip

void loop() {
  // Read buttons → select strip
  // Read pots → update current strip RGB + brightness
  // Apply: output = color × brightness / 255
  // Update status LED colour
}
```

The brightness is applied as a scaling factor: `output = base_color × brightness / 255`. This gives independent per-channel brightness without affecting hue.

# Future Consideration

Controlling HSV (Hue, Saturation, Value) instead of RGB may provide more intuitive colour mixing for user-facing controls, especially when combined with physical knobs.

# Result

The Tinkercad simulation successfully demonstrates:
- ✅ 3 independent LED strips with state memory
- ✅ Button-based channel selection
- ✅ Real-time RGB + brightness control via potentiometers
- ✅ Status indicator for active channel
