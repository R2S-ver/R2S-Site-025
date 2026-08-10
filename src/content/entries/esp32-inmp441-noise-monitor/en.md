---
title: ESP32 + INMP441 Noise Monitor
date: 2026-08-01
description: Real-time ambient noise monitoring with an INMP441 I2S microphone, FFT spectrum analysis, and a web dashboard displaying dB level, frequency spectrum, and noise history charts.

type: lab
category: Embedded System
cover: 01-setup.png

tags:
  - ESP32
  - WiFi
  - INMP441
  - I2S
  - FFT
  - Audio
  - Web Server
  - Chart.js

tools:
  - ESP32
  - WiFi
  - INMP441 Microphone
  - ArduinoFFT
  - Chart.js
  - WebServer

featured: true

lang: en

translationKey: esp32-inmp441-noise-monitor
---

![Setup](./01-setup.png)

# Overview

A real-time ambient noise monitor built with an ESP32 and an INMP441 omnidirectional I2S microphone. The system captures audio, performs FFT spectrum analysis, and streams live data to a web dashboard with dB meter, frequency bars, and historical charts.

# System Architecture

```
INMP441 → I2S → ESP32 → FFT → WebSocket → Browser Dashboard
                                  │
                            Spectrum + dB + History
```

# Pinout — INMP441 → ESP32

| INMP441 Pin | ESP32 Pin | Function |
|-------------|-----------|----------|
| VDD         | 3.3V      | Power |
| GND         | GND       | Ground |
| SD          | GPIO32    | I2S Serial Data |
| WS          | GPIO15    | I2S Word Select (LRCLK) |
| SCK         | GPIO14    | I2S Serial Clock |
| L/R         | GND       | Left channel (tie to GND) |

# Key Features

- **Real-time dB SPL** reading with status indicator (Quiet / Normal / Warning / Danger)
- **64-bin frequency spectrum** visualised as animated bar chart
- **Dominant frequency detection** — identifies the loudest frequency in real time
- **Noise history** with 30-minute rolling buffer (1 sample/sec)
- **Calibration offset** for adjusting sensitivity

# Web Dashboard

![Web Dashboard](./02-web-dashboard.png)
![Spectrum View](./03-spectrum.png)

The browser dashboard uses Chart.js for:
- Real-time dB history line chart
- Dominant frequency history
- 64-bin animated spectrum bars

# Code Structure

Two files:
- **Main.ino** — I2S driver, FFT processing, WiFi server, JSON API
- **webpage.h** — complete HTML/CSS/JS dashboard with Chart.js and WebSocket auto-reconnect

# Result

The ESP32 successfully captures audio via INMP441, computes FFT in real time, and streams spectrum + dB data to multiple browser clients over WiFi. The dashboard updates at 1 Hz with smooth animated charts.
