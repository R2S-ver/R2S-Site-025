---
title: ESP32 + RGBWW FCOB LED Communication
date: 2026-08-02
description: Testing basic NeoPixelBus communication with an RGBWW FCOB LED strip — cycling through red, green, blue, and white channels to verify correct wiring and protocol.

type: lab
category: Embedded System
cover: 01-fcob-setup.png

tags:
  - ESP32
  - NeoPixel

tools:
  - ESP32
  - RGBWW FCOB LED Strip
  - NeoPixelBus Library

featured: false

lang: en

translationKey: esp32-rgbww-fcob-comm
---

![FCOB LED Setup](./01-fcob-setup.png)

# Purpose

Verify that the ESP32 can communicate with an RGBWW FCOB LED strip using the NeoPixelBus library — cycling through red, green, blue, and white channels to confirm correct colour order and data transmission.

# Code

```cpp
#include <NeoPixelBus.h>

#define LED_PIN 5
#define LED_COUNT 150

NeoPixelBus<NeoGrbwFeature, NeoEsp32Rmt0800KbpsMethod> strip(LED_COUNT, LED_PIN);

void setup() {
  strip.Begin();
  strip.Show();
}

void loop() {
  // Red
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(255, 0, 0, 0));
  }
  strip.Show();
  delay(2000);

  // Green
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 255, 0, 0));
  }
  strip.Show();
  delay(2000);

  // Blue
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 0, 255, 0));
  }
  strip.Show();
  delay(2000);

  // White (WW channel)
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 0, 0, 255));
  }
  strip.Show();
  delay(2000);
}
```

# Result

The FCOB LED strip cycles through red, green, blue, and warm white in sequence. Communication between the ESP32 and the NeoPixel strip is stable, and all four colour channels (R, G, B, W) respond correctly.
