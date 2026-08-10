---
title: Studio Electrical Safety & Optimization
date: 2026-05-14
description: Electrical infrastructure analysis of a home workshop, identifying 9 risk factors and implementing a star-topology power distribution system with zoned circuit separation.

type: lab
category: Electrical Engineering
cover: cover.png

tags:
  - Electrical Safety
  - Power Distribution
  - Workshop Design
  - NEN 1010
  - Risk Assessment

tools:
  - Distribution Board
  - Circuit Breakers
  - RCD
  - Power Distribution Units

featured: true

lang: en

translationKey: studio-electrical-optimization
---

![Workspace Overview](./1.png)

# Overview

This project documents a systematic analysis and optimization of the electrical infrastructure in my home workshop. The goal was to understand power distribution topology, identify safety risks, and design practical solutions for a safe, professional working environment.

The study is based on my local context in **The Netherlands (Europe)**, where installations must comply with **NEN 1010** safety regulations. Voltage standards, panel structures, and protection mechanisms vary by country.

# Research Goals

- Systematically map the power distribution structure and usage patterns
- Identify potential safety risks in the current setup
- Identify the main energy-consuming devices
- Design safe, reliable, and feasible solutions for energy savings
- Implement a zoned power distribution system

# Protective Mechanisms in the Household Electrical System

In Dutch homes, the distribution board (_groepenkast_) is located in the meter cupboard. Power enters through the grid connection and passes through the following safety components:

- **Main Fuse & Main Switch:** For total system shutdown
- **Residual Current Device (RCD):** Protects against electrocution by detecting leakage currents
- **Circuit Breakers:** Distributes the installation into groups, with heavy consumers on dedicated circuits
- **Grounding:** Provides a safe path for fault currents

![Distribution Board Structure](./2.png)

## Circuit Breakers: 1P vs. 2P

- **1P Breaker:** Interrupts the circuit but the appliance remains connected via the neutral wire (N)
- **2P / 1P+N Breaker:** Interrupts **both** conductors (Phase and Neutral), ensuring complete electrical isolation

![1P vs 2P Breaker](./4.png)

## Trip Characteristics

Circuit breakers protect against overload and short circuits. Common types include **B, C, D, K, Z, and MA** curves, differentiated by their magnetic trip threshold as a multiple of nominal current (In).

![Trip Characteristics](./3.png)

# Potential Risks in Household Power Usage

## Cable Sizing

The cross-sectional area of a cable determines its maximum safe current capacity. Key factors include:

![Hard vs Stranded Wire](./5.png)
![Wire Comparison](./6.png)

- **Material:** Copper, Aluminum, or CCA (Copper Clad Aluminum)
- **Core type:** Solid vs. stranded wire
- **Length:** Longer cables have higher resistance and voltage drop
- **Ambient Temperature:** Heat dissipation varies with environment
- **Cable Density:** Multiple cables in a conduit increase heat buildup
- **Short-circuit Current:** Must withstand thermal stress during faults

![Cable Cross-Section Reference](./7.png)

## Cord Defects

- Damage to the outer jacket
- Color changes due to overheating
- Excessive bending or pinching
- Aging/brittle insulation material

## Operating Environment

Extra caution is required in damp or wet environments. Key checks: proper grounding, IP rating, RCD presence, and contact point corrosion.

## Overload, Overvoltage and Short Circuits

- **Simultaneous Use:** Multiple high-wattage devices on one group (max. 10A/16A)
- **Long-term Heavy Load:** Cable overheating
- **Daisy-Chaining:** Power strips plugged into other power strips — major fire hazard
- **Poor Contacts:** High contact resistance causes heat
- **Limited Heat Dissipation:** Coiled cable reels must be fully unrolled
- **Lack of Surge Protection:** Vulnerability to voltage spikes

# Practical Research

![Workspace Topology Schema](./8.png)

I conducted a detailed analysis of my workspace's electrical infrastructure, focusing on safety and operational reliability. The core objective was to understand electrical topology mapping and perform risk assessments.

![Risk Analysis Overview](./9.png)

## Identified Risks and Optimization Plan

### 1. Welding Machine Grounding

The welding machine was ungrounded — a significant safety risk. **Solution:** Connect directly to the main grounding system of the distribution board.

### 2. Inrush Current

The welding machine's inrush current (20-30A) exceeded the circuit's capacity. **Solution:** Move to a dedicated circuit with a heavier-duty breaker.

### 3. Trip Characteristics

A C or D-curve breaker is needed for equipment with high starting currents.

![Daisy-Chaining Risk](./10.png)

### 4. Eliminating Daisy-Chaining

Power strips connected in series increase contact resistance, heat buildup, and fire risk. **Solution:** Convert from a tree structure to a star topology using a high-quality 16A power strip.

### 5. Voltage Dips & EMI

Heavy consumers (compressor, angle grinder) cause voltage dips and electromagnetic interference, disrupting sensitive electronics. **Solution:** Separate circuits for heavy machinery and sensitive equipment.

![Travel Adapter Issues](./11.png)

### 6. Travel Adapters

Contact surfaces are too small for high-current applications. **Solution:** Replace with standard European plugs or industrial-grade power strips.

### 7. Zoning & Circuit Distribution

Divide the workshop into "Machining Zone" and "Office Zone," each on separate circuits. Upgrade wiring from 2.5mm² to 4mm² or 6mm² where possible.

![Direct Connection Recommendation](./12.png)

### 8. Direct Connection

Eliminate secondary power strips. Critical equipment must plug directly into wall sockets.

### 9. Prevention & Warning Labels

Apply safety signage — prohibit simultaneous startup of multiple heavy machines and ban coiled extension cords.

![Warning Labels](./13.png)
![Safety Signage Detail](./14.png)

# Conclusion

This research identified **nine critical risk factors**, from missing grounds on heavy machinery to fire hazards caused by daisy-chaining. The analysis led to a concrete optimization plan to transform the workshop into a safe, professional environment.

The current installation was not equipped for simultaneous use of industrial tools and sensitive electronics. Moving from a serial tree structure to a parallel star topology and separating circuits are essential steps for fire safety and operational stability.

# Optimization — Implementation

![New Work Zone](./16.png)

To mitigate the identified risks, I implemented physical separation of equipment:

- **Office Zone:** All sensitive electronics (PC, monitors) consolidated in a dedicated area, isolated from heavy machinery to prevent EMI damage and voltage dips
- **Work Zone:** Industrial equipment and power tools moved to a separate room, isolating heavy loads from delicate electronics, significantly reducing circuit overload risk

# Reflection

Analyzing the installation and formulating concrete improvements has significantly increased my awareness of electrical safety. This research provided not only technical skills but also fostered a critical, observant attitude toward potential risks within the physical infrastructure of my workspace.

# References

1. [How does the connection of a meter box to the main fuse work?](https://saelektroexperts.nl/en/meterkast-problemen/hoe-werkt-de-aansluiting-van-een-meterkast-op-de-hoofdzekering/)
2. [Groepenkast overzicht](https://www.drixes-elektricien.nl/groepenkast/overzicht)
3. [Electrical Safety Systems and Devices](https://texasgateway.org/resource/68-electrical-safety-systems-and-devices)
4. [Types of electrical wires and cables](https://www.mall99.co.ke/types-of-electrical-wires-and-cables/)
5. [Cable size types mm AWG BS conversion guide](https://viox.com/cable-size-types-mm-awg-bs-conversion-guide/)
6. [What is the purpose of neutral disconnect in a circuit breaker?](https://electronics.stackexchange.com/questions/688210/what-is-the-purpose-of-neutral-disconnect-in-a-circuit-breaker)
7. [Aderdikte kennisbank](https://www.elektramat.nl/kennisbank/aderdikte/)
8. [Kabeldoorsnede calculator](https://builder-calc.com/nl/elektronica/kabeldoorsnedecalculator-op-basis-van-vermogen-en-stroom-online-berekening.html)
