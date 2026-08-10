---
title: ESP32 Serial Output Test
date: 2026-07-20
description: Basic verification of ESP32 microcontroller functionality — uploading a simple sketch and confirming serial communication over USB.

type: lab
category: Embedded System
cover: cover.png

tags:
  - ESP32
  - Serial Communication
  - Getting Started

tools:
  - ESP32
  - Arduino IDE
  - USB Cable

featured: false

lang: en

translationKey: esp32-serial-test
---

# Purpose

Verify that the ESP32 board can run programs correctly and send data to a computer via USB serial.

# Code

```cpp
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println("ESP32 OK");
  delay(1000);
}
```

# Test Steps

1. Select the ESP32 board and corresponding COM port in Arduino IDE.
2. Connect the ESP32 via USB and upload the code.
3. When `Connecting......` appears, press the IO0 button on the ESP32 to enter flash mode.
4. After uploading, open the Serial Monitor and set the baud rate to **115200**.

# Result

The Serial Monitor continuously outputs:

```
ESP32 OK
ESP32 OK
ESP32 OK
```

The ESP32 program runs correctly and serial communication is functioning normally.
