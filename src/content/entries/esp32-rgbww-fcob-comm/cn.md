---
title: ESP32 + RGBWW FCOB 灯带通讯测试
date: 2026-08-02
description: 测试 ESP32 通过 NeoPixelBus 库与 RGBWW FCOB LED 灯带的基本通信——依次循环红、绿、蓝、白四个通道，验证接线与协议正确性。

type: lab
category: 嵌入式系统
cover: 01-fcob-setup.png

tags:
  - ESP32
  - NeoPixel

tools:
  - ESP32
  - RGBWW FCOB LED 灯带
  - NeoPixelBus 库

featured: false

lang: zh

translationKey: esp32-rgbww-fcob-comm
---

![FCOB LED 接线](./01-fcob-setup.png)

# 目的

验证 ESP32 能否通过 NeoPixelBus 库与 RGBWW FCOB LED 灯带通信——依次切换红、绿、蓝、白四个通道，确认颜色顺序与数据传输正确。

# 代码

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
  // 红色
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(255, 0, 0, 0));
  }
  strip.Show();
  delay(2000);

  // 绿色
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 255, 0, 0));
  }
  strip.Show();
  delay(2000);

  // 蓝色
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 0, 255, 0));
  }
  strip.Show();
  delay(2000);

  // 暖白（W 通道）
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 0, 0, 255));
  }
  strip.Show();
  delay(2000);
}
```

# 结果

FCOB 灯带依次显示红、绿、蓝、暖白四种颜色。ESP32 与 NeoPixel 灯带通信稳定，四个颜色通道（R、G、B、W）均正常响应。
