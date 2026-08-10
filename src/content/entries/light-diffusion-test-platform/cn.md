---
title: 光扩散测试平台

date: 2024-07-20

description: 自建测试平台，用于在受控光照条件下系统评估材料的光学性能——透光率、扩散度、反射率及亮度分布。为产品开发中的CMF决策提供数据支撑。

type: projects

category: CMF与光学测试

cover: 03-final-platform-3d.png

tags:
  - 工业设计
  - CMF
  - 材料测试
  - 光扩散
  - 光学测量

tools:
  - Arduino
  - LED灯带 (PWM控制)
  - 实验室升降台
  - 精密步进驱动
  - 无氧铜导线

featured: true

lang: zh

translationKey: light-diffusion-test-platform
---

# 背景

在产品设计中，CMF（色彩、材料、表面处理）的决策往往基于主观视觉判断。当设计师为灯罩、扩散板或显示屏盖选择半透明材料时，本质上是在对光与材料之间的互动做出预测——多少光会穿透、多少会散射、表面在不同光照条件下会呈现怎样的效果。

问题在于这些光学行为很难在没有实验数据的情况下准确预测。两块在室内光线下看起来完全相同的材料，在背光条件下可能表现出截然不同的效果。表面处理、厚度、颜色和内部结构都会影响光的传播，而这些影响仅靠渲染图和直觉无法可靠地捕捉。

我设计并建造了这个测试平台来弥合这一差距：一个受控环境，在此环境中可以对材料样品的光透射、扩散、反射和亮度特性进行系统评估。该平台通过用可重复的测量取代猜测，为早期CMF决策提供支持。

# 需求

该平台需要测量四个关键光学特性：

| 特性 | 说明 | 设计相关性 |
|---|---|---|
| **透光率** | 多少光穿透材料 | 背光界面的亮度、显示屏可读性 |
| **扩散度** | 光穿透后散射的均匀程度 | 发光面板的均匀性、消除热点 |
| **反射率** | 表面对入射光的反射表现 | 表面处理选择、眩光控制 |
| **亮度分布** | 照亮区域的亮度变化 | 视觉舒适度、导光板设计 |

除测量能力外，平台还有额外的设计要求：
- <strong style="color:var(--accent)">可重复定位</strong>：样品必须能以一致的距离放置在光源处
- <strong style="color:var(--accent)">可调节亮度</strong>：光源必须支持可变亮度以测试不同照度水平
- <strong style="color:var(--accent)">环境光控制</strong>：测试环境必须最大限度减少外部光线干扰
- <strong style="color:var(--accent)">模块化样品安装</strong>：快速更换不同材料样品
- <strong style="color:var(--accent)">可观测输出</strong>：结果必须可目视观察且能在样品间进行比较

# 设计与建造

![概念设计](./02-concept-design.png)

## 平台架构

测试平台由一个垂直测量架构成，光源安装于下方，样品架置于可调高度位置，观察点位于上方。设计灵感来源于实验室光学平台，精简至比较性材料测试所需的核心要素。

<div class="side-by-side">
  <div><img src="./04-final-render.png" alt="最终渲染" /><p>最终 3D 渲染图</p></div>
  <div><img src="./05-concept-sketch.png" alt="概念草图" /><p>概念草图</p></div>
</div>

### 核心组件

- <strong style="color:var(--accent)">光源</strong>：带PWM亮度控制的LED灯带，提供从暗光到全亮的可调照明
- <strong style="color:var(--accent)">样品台</strong>：可调高度平台（改造后的实验室升降台），用于精确控制扩散距离——光源与材料样品之间的间距
- <strong style="color:var(--accent)">框架</strong>：激光切割结构组件，喷涂黑色以吸收环境光、减少间接反射
- <strong style="color:var(--accent)">控制系统</strong>：基于Arduino的PWM控制器，实现可复现的亮度设定
- <strong style="color:var(--accent)">供电</strong>：无氧铜导线（最小截面积0.5mm²），安全承载最高2A电流

## 制造流程

<div class="process-scroll" id="process-scroll">
  <div class="process-track" id="process-track" data-copies="3" data-unique="10">
    <div class="step"><img src="./06-3d-modelling.png" alt="三维建模" /><span>步骤 1: 三维建模</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="激光切割" /><span>步骤 2: 激光切割</span></div>
    <div class="step"><img src="./08-test-build.png" alt="试装" /><span>步骤 3: 试装</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="表面处理" /><span>步骤 4: 表面处理</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="部件组装" /><span>步骤 5: 部件组装</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="电路焊接" /><span>步骤 6: 电路焊接</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="电路验证" /><span>步骤 7: 电路验证</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="极性检查" /><span>步骤 8: 极性检查</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="总装" /><span>步骤 9: 总装</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="电路测试" /><span>步骤 10: 电路测试</span></div>

    <div class="step"><img src="./06-3d-modelling.png" alt="三维建模" /><span>步骤 1: 三维建模</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="激光切割" /><span>步骤 2: 激光切割</span></div>
    <div class="step"><img src="./08-test-build.png" alt="试装" /><span>步骤 3: 试装</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="表面处理" /><span>步骤 4: 表面处理</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="部件组装" /><span>步骤 5: 部件组装</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="电路焊接" /><span>步骤 6: 电路焊接</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="电路验证" /><span>步骤 7: 电路验证</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="极性检查" /><span>步骤 8: 极性检查</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="总装" /><span>步骤 9: 总装</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="电路测试" /><span>步骤 10: 电路测试</span></div>

    <div class="step"><img src="./06-3d-modelling.png" alt="三维建模" /><span>步骤 1: 三维建模</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="激光切割" /><span>步骤 2: 激光切割</span></div>
    <div class="step"><img src="./08-test-build.png" alt="试装" /><span>步骤 3: 试装</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="表面处理" /><span>步骤 4: 表面处理</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="部件组装" /><span>步骤 5: 部件组装</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="电路焊接" /><span>步骤 6: 电路焊接</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="电路验证" /><span>步骤 7: 电路验证</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="极性检查" /><span>步骤 8: 极性检查</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="总装" /><span>步骤 9: 总装</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="电路测试" /><span>步骤 10: 电路测试</span></div>
  </div>
</div>

# 材料测试

该平台旨在测试一系列产品设计中常用于扩散板、导光板和发光外壳的半透明与透明材料。

### 测试材料矩阵

| 材料 | 类型 | 关键特性 |
|---|---|---|
| **半透明PLA** | 3D打印 | 层纹散射、低成本原型制作 |
| **半透明PETG** | 3D打印 | 比PLA更高的透明度、更好的层间附着力 |
| **亚克力板** | 激光切割 | 优异的光学透明度、耐刮擦、多样化表面处理 |
| **AB环氧树脂板** | 浇铸树脂 | 高透明度、表面光滑、玻璃替代方案 |
| **PC光扩散板** | 挤出聚碳酸酯 | 专为扩散设计、棱柱状表面纹理 |

每种材料在多种配置下进行了测试，提供了关于材料选择如何影响发光产品最终视觉效果的可比数据。

# 可控变量

平台的核心设计原则之一是能够隔离单个变量。这使得系统性的A/B测试成为可能，每次仅改变一个参数。

<div class="variables-grid">

- <strong style="color:var(--accent)">光照强度</strong> — PWM控制的LED亮度，从暗光到最大输出
- <strong style="color:var(--accent)">材料类型</strong> — PLA、PETG、亚克力、AB环氧树脂、PC扩散板
- <strong style="color:var(--accent)">材料颜色</strong> — 各种材料的本色、白色、着色变体
- <strong style="color:var(--accent)">材料厚度</strong> — 单层与多层、不同板材厚度
- <strong style="color:var(--accent)">表面处理</strong> — 原始打印、打磨（80–5000目）、抛光、纹理
- <strong style="color:var(--accent)">扩散距离</strong> — 通过升降台调节光源与样品之间的间距

</div>

# 迭代

平台本身经历了三次重要的设计迭代，每次迭代都解决了前一个版本中发现的问题。

![迭代对比](./01-iteration-comparison.png)

| | V1 — 单 LED | V2 — LED 灯带 | V3 — LED 灯带 + PWM |
|---|---|---|---|
| 方法 | 手工焊接 | 铜箔胶带 | PWM 控制器 |
| 问题 | <span style="color:#e53935">✕</span> 焊接速度太慢 | <span style="color:#e53935">✕</span> 胶带不适配 2A | <span style="color:#00ff88">✓</span> 亮度可调 |
| | <span style="color:#e53935">✕</span> 灯光效果差 | <span style="color:#e53935">✕</span> 无亮度控制 | <span style="color:#00ff88">✓</span> 暗表面漫反射 |
| 结论 | <span style="color:#e53935">✕ 已弃用</span> | <span style="color:#e53935">✕ 已弃用</span> | <span style="color:#00ff88">✓ 最终版本</span> |

### 版本一：单LED // 手工焊接

初始原型使用单个LED手工焊接到原型板上。

- <span style="color:#e53935">**问题：**</span> 手工焊接耗时且一致性差——每个LED的输出特性略有不同
- <span style="color:#e53935">**问题：**</span> 单点光源造成照明不均匀，难以准确评估扩散性能

### 版本二：LED灯带 // 铜箔胶带

第二版用均匀LED灯带替代了单个LED，并使用铜箔胶带进行电气连接。

- <span style="color:#e53935">**问题：**</span> 铜箔胶带不适配所需的2A电流——经计算，截面积不足，存在安全隐患
- <span style="color:#e53935">**问题：**</span> 固定亮度——无法根据不同测试场景调节光照强度

### 版本三：LED灯带 + PWM控制器（当前版本）

最终版本解决了关键问题：

- <span style="color:#00ff88">**改进：**</span> 铜箔胶带更换为无氧铜导线（最小截面积0.5mm²），安全匹配2A电流要求
- <span style="color:#00ff88">**改进：**</span> 集成基于Arduino的PWM控制器，实现全范围可调亮度
- <span style="color:#00ff88">**改进：**</span> 测试面板框架喷涂黑色，吸收环境光，最大限度降低材料间接反射对测量的影响

# 成果

完成的平台为比较性CMF材料测试提供了可靠的环境。它能够实现：

- <strong style="color:var(--accent)">同条件并排比较</strong>不同材料在相同光照条件下的表现
- <strong style="color:var(--accent)">系统评估</strong>表面处理如何影响光扩散和反射
- <strong style="color:var(--accent)">厚度相关分析</strong>透光特性随厚度的变化
- <strong style="color:var(--accent)">可控亮度测试</strong>观察材料在不同照度水平下的行为
- <strong style="color:var(--accent)">目视记录</strong>光分布模式，供设计参考

![最终平台](./03-final-platform-3d.png)

## 核心心得

除CMF测试数据本身外，搭建这个平台强化了若干工业设计原则：

- <strong style="color:var(--accent)">电流承载能力至关重要</strong>：铜箔胶带的失败提醒我们，为原型选择的材料必须对照真实电气需求进行评估——美观和便利不能凌驾于安全性之上
- <strong style="color:var(--accent)">环境控制是关键</strong>：光学测量对环境光极为敏感。黑色喷涂框架是一个简单但至关重要的改进，显著提升了测量的一致性
- <strong style="color:var(--accent)">变量隔离带来洞察</strong>：能够一次改变一个参数——材料、厚度、表面处理、距离——将测试从主观观察转化为系统性比较
- <strong style="color:var(--accent)">先建工具，再用工具</strong>：为一个合适的测试平台投入时间，会在多个项目中持续产生回报。未来每一个涉及半透明材料的CMF决策，都可以引用实测数据而非主观猜测


