---
title: ESP32 + EC11 旋转编码器 + 步进电机控制
date: 2026-08-02
description: 完整嵌入式运动控制系统——双 EC11 编码器、双 OLED 显示、DM430 驱动器、42BL40 步进电机、WiFi WebSocket 仪表盘，支持手动/自动双模式。

type: lab
category: 嵌入式系统
cover: cover.png

tags:
  - ESP32
  - WiFi
  - EC11 Encoder
  - 步进电机
  - DM430
  - FreeRTOS
  - 运动控制
  - Web Server

tools:
  - ESP32
  - EC11 旋转编码器 ×2
  - SH1106 OLED ×2
  - DM430 步进驱动器
  - 42BL40 步进电机
  - FreeRTOS

featured: true

lang: zh

translationKey: esp32-ec11-stepper-motor
---

# 目的

验证 ESP32 能否同时完成：

1. **双 EC11 编码器输入**——方向检测、增量计数、按键输入
2. **双 OLED 显示控制**——SH1106 ×2 并联同步显示，实时角度与步数
3. **DM430 步进驱动**——STEP/DIR 脉冲输出，42BL40 电机控制，细分与电流调试
4. **WiFi WebSocket 仪表盘**——实时控制页面，自动重连与心跳
5. **FreeRTOS 多任务架构**——编码器任务、电机任务、OLED 任务、WebServer

# 系统架构

```
                    ESP32
               ┌──────────────┐
    Core 0     │ AsyncWebSvr  │  WiFi + WebSocket
               └──────────────┘
               ┌──────────────┐
    Core 1     │ Encoder Task │  旋钮输入
               │ Motor Task   │  DM430 脉冲
               │ OLED Task    │  显示刷新
               └──────────────┘
                        │
                   STEP / DIR
                        │
                  ┌─────────┐
                  │  DM430  │  24V 供电
                  └─────────┘
                        │
                  ┌─────────┐
                  │ 42BL40  │  步进电机
                  └─────────┘
```

# 双模式控制

- **MANUAL 模式：** 旋钮旋转 → 电机跟随步进。直接位置控制，适合精确调节。
- **AUTO 模式：** 旋钮调节速度（−5000 到 +5000 步/秒）。电机按设定速度持续运转，适合测试运动范围。

按下按钮切换模式。

# 硬件接线

## 引脚 — 模块 1（编码器 + OLED）

| 信号 | ESP32 引脚 | 功能 |
|------|-----------|------|
| SDA  | GPIO21    | I²C 数据 |
| SCL  | GPIO22    | I²C 时钟 |
| VCC  | 3.3V      | 供电 |
| GND  | GND       | 接地 |
| TRA  | GPIO32    | 编码器 A（旋转） |
| TRB  | GPIO33    | 编码器 B（旋转） |
| PSH  | GPIO25    | 按压按钮 |
| BAK  | GPIO26    | 返回按钮 |
| CON  | GPIO27    | 确认按钮 |

## 引脚 — 模块 2（编码器 + OLED）

| 信号 | ESP32 引脚 | 功能 |
|------|-----------|------|
| SDA  | GPIO21    | I²C 数据（共享总线） |
| SCL  | GPIO22    | I²C 时钟（共享总线） |
| VCC  | 3.3V      | 供电 |
| GND  | GND       | 接地 |
| TRA  | GPIO16    | 编码器 A（旋转） |
| TRB  | GPIO17    | 编码器 B（旋转） |
| PSH  | GPIO18    | 按压按钮 |
| BAK  | GPIO19    | 返回按钮 |
| CON  | GPIO23    | 确认按钮 |

## 引脚 — DM430 步进驱动器 → ESP32

| DM430 端 | ESP32 引脚 | 功能 |
|----------|-----------|------|
| PUL+     | GPIO4     | STEP 脉冲 |
| DIR+     | GPIO5     | 方向信号 |
| ENA+     | GPIO13    | 使能（可选） |
| PUL-     | GND       | — |
| DIR-     | GND       | — |
| ENA-     | GND       | — |

## DM430 → 42BL40 步进电机

| DM430 | 电机线 |
|-------|--------|
| A+    | A+（黑） |
| A-    | A-（绿） |
| B+    | B+（红） |
| B-    | B-（蓝） |

## 供电

| 设备     | 电压  | 来源       |
|----------|------|-----------|
| ESP32    | 5V   | USB       |
| OLED ×2  | 3.3V | ESP32     |
| EC11 ×2  | 3.3V | ESP32     |
| DM430    | 24V  | 外接电源   |
| 42BL40   | —    | DM430 输出 |

# 调试过程

主要遇到的问题与解决：

| 问题 | 原因 | 解决 |
|------|------|------|
| OLED 仅显示一条横线 | SH1106 初始化参数错误 | `display.begin(0x3C, true)` |
| 电机不转 | ENA 信号逻辑反了 | 断开 ENA，仅用 STEP+DIR |
| DM430 红灯报警 (FLT) | PA 电流参数设置错误 | 重新配置驱动器参数 |
| 电机转速过慢 | 每格步数过少 | 增加速度因子 |

# 结果

ESP32 成功：
- ✅ 双 EC11 编码器读取
- ✅ 双 OLED 同步显示
- ✅ WiFi WebSocket 服务器 + 仪表盘
- ✅ DM430 步进电机控制
- ✅ 42BL40 电机经 DM430 驱动
- ✅ FreeRTOS 多任务调度
- ✅ 工业级驱动器参数调试

系统已从输入设备验证阶段进入完整运动控制平台。下一步：TCA9548A I²C 扩展、4 路独立 OLED、HSV 灯光控制、步进电机闭环控制。
