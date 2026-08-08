---
title: ESP32 WiFi LED 亮度控制
date: 2026-08-04
description: 使用 ESP32 WiFi 网页服务器和 PWM，通过浏览器界面控制内置 LED 亮度。

type: lab
category: 嵌入式系统
cover: cover.png

tags:
  - ESP32
  - Arduino
  - WiFi
  - PWM
  - 嵌入式系统

tools:
  - ESP32
  - Arduino IDE
  - NeoPixelBus

featured: true

lang: zh

translationKey: esp32-wifi-led-brightness-control
---

# 概述

在 ESP32 上搭建一个本地 Web 服务器，即可通过同一 WiFi 网络下的任何浏览器调节 LED 的亮度。该项目融合了 WiFi 通信、简洁的网页界面以及 PWM 调光功能。

# 系统架构

ESP32 同时充当 WiFi 客户端和 Web 服务器。

# 硬件

- ESP32-WROOM-32 开发板
- 内置 LED（GPIO 2）
- USB 数据线

# 软件

开发环境：Arduino IDE，需安装 ESP32 Arduino 核心支持包。

用到的库：

```cpp
#include <WiFi.h>
#include <WebServer.h>
```

# 实现过程

## WiFi 网页服务器

ESP32 连接到本地 WiFi 后，会提供一个控制页面。
同一网络下的设备可以通过分配的 IP 地址（例如 http://192.168.x.x/）访问该页面。

## PWM 亮度控制

亮度控制采用 8 位分辨率的 PWM（0–255 对应 0%–100%）。
网页上的滑块会发送 HTTP 请求来改变占空比：

浏览器 → /set?value=亮度值 → ESP32 PWM 输出

# 测试步骤

将程序上传到 ESP32。

打开串口监视器，记下连接后显示的 IP 地址。

在浏览器中访问该 IP 地址。

拖动滑块，观察 LED 的亮度变化。

# 结果

ESP32 成功连接网络、提供网页界面、接收 HTTP 亮度值并通过 PWM 驱动 LED。整个链路——硬件、网络、界面、物理输出——按预期工作，为更多交互式物联网项目奠定了基础。

# 完整代码

```cpp
#include <WiFi.h>
#include <WebServer.h>

// 请替换为你自己的 WiFi 信息
const char* ssid = "WIFI-NAME";
const char* password = "WIFI-PASSWORD";

WebServer server(80);

// LED 引脚
#define LED_PIN 2

// PWM 设置
#define PWM_CHANNEL 0
#define PWM_FREQ 5000
#define PWM_RESOLUTION 8   // 8 位分辨率，范围 0–255

void setup() {
  Serial.begin(115200);

  // 配置 PWM
  ledcAttach(LED_PIN, PWM_FREQ, PWM_RESOLUTION);
  // 初始亮度设为 50%
  ledcWrite(PWM_CHANNEL, 128);

  // 连接 WiFi
  WiFi.begin(ssid, password);
  Serial.print("正在连接 WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi 已连接");
  Serial.print("IP 地址：");
  Serial.println(WiFi.localIP());

  // 首页
  server.on("/", []() {
    String html = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ESP32 LED 控制</title>
  <style>
    body { text-align: center; font-family: Arial; }
    input { width: 80%; }
  </style>
</head>
<body>
  <h1>ESP32 LED 控制</h1>
  <h2>亮度调节</h2>
  <input type="range" min="0" max="255" value="128" id="brightness"
         oninput="changeBrightness(this.value)">
  <p>当前亮度：<span id="value">128</span></p>
  <script>
    function changeBrightness(value) {
      document.getElementById("value").innerHTML = value;
      fetch("/set?value=" + value);
    }
  </script>
</body>
</html>
    )rawliteral";
    server.send(200, "text/html; charset=utf-8", html);
  });

  // 处理亮度更新请求
  server.on("/set", []() {
    if (server.hasArg("value")) {
      int brightness = server.arg("value").toInt();
      ledcWrite(LED_PIN, brightness);
      Serial.print("亮度：");
      Serial.println(brightness);
    }
    server.send(200, "text/plain", "OK");
  });

  server.begin();
  Serial.println("Web 服务器已启动");
}

void loop() {
  server.handleClient();
}
```
