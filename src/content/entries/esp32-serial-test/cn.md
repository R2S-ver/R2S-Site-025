---
title: ESP32 串口输出测试
date: 2026-07-20
description: 验证 ESP32 单片机基本功能——上传简单程序并通过 USB 串口确认数据通信正常。

type: lab
category: 嵌入式系统
cover: cover.png

tags:
  - ESP32
  - 串口通信
  - 入门

tools:
  - ESP32
  - Arduino IDE
  - USB 数据线

featured: false

lang: zh

translationKey: esp32-serial-test
---

# 目的

验证 ESP32 开发板能否正常运行程序，并通过 USB 串口向电脑发送数据。

# 代码

```cpp
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println("ESP32 OK");
  delay(1000);
}
```

# 测试步骤

1. 在 Arduino IDE 中选择 ESP32 开发板和对应 COM 端口。
2. 使用 USB 连接 ESP32 并上传代码。
3. 当显示 `Connecting......` 时按下 ESP32 的 IO0 键进入烧录模式。
4. 上传完成后打开串口监视器，设置波特率为 **115200**。

# 结果

串口监视器持续显示：

```
ESP32 OK
ESP32 OK
ESP32 OK
```

ESP32 程序运行正常，串口通信功能正常。
