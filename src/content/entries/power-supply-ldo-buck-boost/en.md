---
title: Power Supply — LDO, Buck, Boost Converters
date: 2026-08-10
description: A designer's guide to power supply topologies — LDO linear regulators, Buck/Boost switching converters, and practical selection criteria.

type: note
category: Electronics

tags:
  - Electronics
  - Power Supply
  - LDO
  - Buck Converter
  - Circuit Protection

tools:
  - Circuit Design

featured: false

lang: en

translationKey: power-supply-ldo-buck-boost
---

# Overview

A comprehensive guide to power supply design for embedded systems and consumer electronics. This note covers the complete power chain from input protection through regulation to load, comparing linear (LDO) and switching (Buck/Boost) topologies with practical selection criteria and thermal design considerations.

## The Three Design Questions

1. What is the input-output voltage difference? → If >3V and >0.3A, do not use an LDO — use a Buck converter.
2. Is the system noise-sensitive? → Wireless modules and precision analog circuits favor LDOs or additional filtering.
3. What are the space and thermal constraints? → Enclosed small enclosures favor switching regulators to avoid heat build-up.

## Key Topics Covered

### Power Architecture
Power systems are multi-stage conversion and distribution networks. The goal is not "generating electricity" but delivering energy at the correct voltage, current, and noise level to each module. A typical product chain:

```
Input (USB/Battery) → Protection (Fuse, Reverse Polarity) → Charge Management → Battery → DC/DC Conversion → Multiple Voltage Rails → MCU/Sensors/LEDs/Motors
```

### LDO Linear Regulators
LDOs dissipate excess voltage as heat: P_loss = (Vin - Vout) × I. They excel in low-noise, low-dropout scenarios (e.g., 3.6V Li-ion → 3.3V for MCU/sensors) but become extremely inefficient with large voltage differentials.

### Buck Switching Converters
Buck converters use high-speed MOSFET switching with LC filtering to achieve 85-97% efficiency. Ideal when the voltage drop exceeds 3V and current exceeds 0.3A. The trade-off is higher ripple and more external components.

### Boost and Buck-Boost
- **Boost**: Steps voltage up (e.g., 3.7V Li-ion → 5V/12V)
- **Buck-Boost**: Automatically switches modes when input voltage may be above or below output, maintaining stable regulation (e.g., 2.7-4.2V battery → 3.3V)

### Battery Charging & Protection
Lithium batteries require dedicated charge management ICs (e.g., TP4056) and protection boards (DW01+8205A) for overcharge, over-discharge, overcurrent, and short-circuit protection. Both are essential for any Li-ion powered product.

### Thermal Design
Even at 95% efficiency, a 50W output means ~2.6W of heat loss. Thermal path design — MOSFET → thermal pad → metal frame/enclosure → air — is essential. PCB copper pours can serve as heatsinks for LDOs.

### AC-DC Topologies (Extended Reading)
- **Flyback**: Dominant below ~100W (phone chargers, LED drivers)
- **Forward**: 100W+, higher efficiency
- **Push-Pull, Half-Bridge, Full-Bridge**: Increasing power levels
- **LLC Resonant**: Modern PC power supplies (90-96% efficiency)

### Ripple Mitigation
For noise-sensitive circuits, the Buck+LDO cascade topology combines efficiency with low noise: Buck handles the large voltage drop efficiently, then an LDO with small dropout voltage provides clean, regulated output with high PSRR.

## Reference Module Cards

| Module | Type | Vin | Vout | I_max | Efficiency | Heat |
|--------|------|-----|------|-------|------------|------|
| LM7805 | Linear | 7-25V | 5V | 1.5A | ≈Vo/Vin | High |
| LM2596 | Buck | 4.5-40V | Adj 1.25-37V | 2-3A | 85-93% | Low |

| Module | Function | Method | Protection |
|--------|----------|--------|------------|
| TP4056+Protection | 1S Li-ion Charging | Linear, 1A adj | OV, UV, OC, SC |

## Core Principles
- Power design is about energy distribution, not "making electricity"
- LDO and Buck are complementary: LDO for low-noise/low-power; Buck for high-power/high-efficiency
- Switching supplies still need thermal management despite high efficiency
- The design chain: Energy flow → Voltage conversion → Thermal path → Mechanical integration
