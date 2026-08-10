---
title: ESP32 + RGBWW FCOB LED Color Wheel Control
date: 2026-07-31
description: WiFi-controlled RGBWW FCOB LED strip with a web-based colour wheel picker, RGB-to-RGBW white extraction algorithm, and real-time brightness control.

type: lab
category: Embedded System
cover: 03-led-strip-lit.png

tags:
  - ESP32
  - WiFi
  - NeoPixel
  - Web Server

tools:
  - ESP32
  - RGBWW FCOB LED Strip
  - NeoPixelBus
  - WebServer

featured: true

lang: en

translationKey: esp32-rgbww-color-wheel
---

![LED Strip Lit](./03-led-strip-lit.png)

# Overview

A WiFi web server on the ESP32 provides a colour wheel and RGB sliders to control an RGBWW FCOB LED strip in real time. An RGB→RGBW extraction algorithm separates the white channel from the RGB values for accurate colour mixing.

# Colour Processing — RGB to RGBW

The key challenge with RGBWW strips is extracting the white component:

```cpp
void updateLED() {
    byte W = min(R, min(G, B));   // white = common component
    byte r = R - W;                // pure red
    byte g = G - W;                // pure green
    byte b = B - W;                // pure blue

    for (int i = 0; i < LED_COUNT; i++) {
        strip.SetPixelColor(i, RgbwColor(r, W, g, b));
    }
    strip.Show();
}
```

> **Note:** NeoGrbwFeature uses the channel order **Red, White, Green, Blue** — not R, G, B, W.

# Web Interface

![Color Picker](./01-color-picker.png)
![RGB Sliders](./02-rgb-sliders.png)

The web page provides:
- A colour wheel for intuitive hue selection
- Individual R, G, B sliders for fine control
- Real-time LED preview

# Full Code

```cpp
#include <WiFi.h>
#include <WebServer.h>
#include <NeoPixelBus.h>

const char* ssid = "WIFI_USERNAME_HERE";
const char* password = "WIFI_PASSWORD_HERE";

#define LED_PIN 5
#define LED_COUNT 150

NeoPixelBus<NeoGrbwFeature, NeoEsp32Rmt0800KbpsMethod> strip(LED_COUNT, LED_PIN);
WebServer server(80);

int R = 255, G = 0, B = 0;

// RGB → RGBW extraction
void updateLED() {
    byte W = min(R, min(G, B));
    byte r = R - W;
    byte g = G - W;
    byte b = B - W;
    for (int i = 0; i < LED_COUNT; i++) {
        strip.SetPixelColor(i, RgbwColor(r, W, g, b));
    }
    strip.Show();
}

void setRGB(String value) {
    int p1 = value.indexOf(',');
    int p2 = value.indexOf(',', p1 + 1);
    R = value.substring(0, p1).toInt();
    G = value.substring(p1 + 1, p2).toInt();
    B = value.substring(p2 + 1).toInt();
    updateLED();
}

void setup() {
    Serial.begin(115200);
    strip.Begin(); strip.Show();
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
    Serial.println("\n" + WiFi.localIP().toString());

    server.on("/", []() {
        server.send(200, "text/html; charset=utf-8", webpage);
    });
    server.on("/set", []() {
        if (server.hasArg("color")) setRGB(server.arg("color"));
        server.send(200, "text/plain", "OK");
    });
    server.begin();
}

void loop() { server.handleClient(); }
```

The full HTML/CSS webpage (glassmorphism iOS-style colour picker) is available in the source repository.

# Result

The ESP32 serves a responsive colour control page. Users can select any colour from the wheel or adjust individual channels, and the FCOB strip updates immediately. The RGB→RGBW algorithm produces clean colours with independent warm white control.
