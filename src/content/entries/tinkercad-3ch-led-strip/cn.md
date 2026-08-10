---
title: Tinkercad 三通道灯条独立控制
date: 2026-07-25
description: 在 Tinkercad 中搭建虚拟电路——三个按钮切换当前灯条，四个旋钮电位器分别控制 RGB 与亮度，实现对三条 NeoPixel 灯带的独立控制。

type: lab
category: 嵌入式系统
cover: 01-tinkercad-circuit.png

tags:
  - Arduino
  - Tinkercad
  - NeoPixel
  - 电位器
  - 仿真

tools:
  - Tinkercad Circuits
  - Arduino (仿真)
  - NeoPixel 灯带 ×3
  - 电位器 ×4
  - 按钮 ×3

featured: false

lang: zh

translationKey: tinkercad-3ch-led-strip
---

![Tinkercad 电路](./01-tinkercad-circuit.png)

# 概述

在 Tinkercad 中设计的虚拟电路，实现对三条独立 NeoPixel LED 灯带的控制。三个按钮切换当前灯条，四个电位器分别设置所选灯条的 RGB 值与亮度。

# 控制面板

- **3 个按钮**——选择当前灯条（1、2、3）
- **3 个电位器**——R、G、B 数值（0–255）
- **1 个电位器**——总亮度（0–255）
- **状态 RGB LED**——指示当前选中的灯条（红/绿/蓝）

# 代码结构

```cpp
struct LightState {
  int r, g, b, brightness;
};

LightState lights[3];  // 每条灯带独立状态

void loop() {
  // 读取按钮 → 切换灯条
  // 读取电位器 → 更新当前灯条 RGB + 亮度
  // 应用：输出 = 基础色 × 亮度 / 255
  // 更新状态 LED 颜色
}
```

亮度作为缩放因子应用：`输出 = 基础色 × 亮度 / 255`，在不改变色相的前提下独立控制每条通道的亮度。

# 后续思考

考虑将 RGB 控制改为 **HSV（色相、饱和度、明度）** 控制，配合物理旋钮使用时会更加直观，尤其是亮度旋钮直接对应 V 分量。

# 结果

Tinkercad 仿真成功演示：
- ✅ 三条独立 LED 灯带，各自保存状态
- ✅ 按钮切换通道
- ✅ 电位器实时控制 RGB + 亮度
- ✅ 当前通道状态指示
