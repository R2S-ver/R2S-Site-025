---
title: Electronics Fundamentals — Self-Study Notes
date: 2026-05-14
description: A structured study log covering voltage and current theory, Kirchhoff's laws, and the principles of basic electronic components including resistors, capacitors, diodes, and power supplies.

type: note
category: Electronics
cover: cover.png

tags:
  - Electronics
  - Fundamentals
  - Analog Circuits
  - Components
  - Self-Study

tools:
  - Circuit Analysis
  - Ohm's Law
  - Kirchhoff's Laws
  - Analog Electronics

featured: true

lang: en

translationKey: electronics-fundamentals-notes
---

# Electronics Fundamentals — What I've Been Studying

This is my running set of notes as I work through the fundamentals of hardware and analog electronics. I started from the absolute basics — voltage, current, what a resistor actually is inside — and I'm building up toward being able to read a schematic and understand what every component is doing and why it's there. These notes are the raw material I come back to when I need to refresh something.

> **Note:** The images I've collected here are for educational and self-study purposes only.

# Voltage and Current

## The Water Analogy — A Good Starting Point

Before diving into the physics, the water pipe analogy gives you a working mental model:

- **Voltage (V):** Like water pressure. It's the "push" — the potential energy difference that drives charges through a circuit.
- **Current (I):** Like water flow rate. The actual movement of charges through the conductor.
- **Resistance (R):** Like pipe diameter. A narrower pipe resists flow more.

> **Ohm's Law: V = I × R**

This analogy isn't perfect (nothing is), but it's good enough for an intuitive grasp of what's happening.

## The Deeper Explanation — What Actually Happens When You Flip a Switch

When you flip a light switch, the bulb comes on instantly. So electrons must rush from the battery to the bulb at the speed of light, right? Nope. Not even close.

### "Snail-Paced" Electrons vs. "Light-Speed" Energy Propagation

Inside a copper wire, the free electrons form what's called an **"electron sea"** — they're already everywhere in the wire, swimming around in the metal's crystal lattice.

- **Drift Velocity**: When you apply a voltage, the electric field pushes electrons forward. But they're constantly bouncing off copper atoms in the crystal lattice, so their net forward motion is incredibly slow — typically only **a few micrometers to millimeters per second**. Slower than a snail.

- **So why does the bulb turn on instantly?** Because energy doesn't travel via the electrons themselves. It travels via the **electromagnetic field**. The moment the switch closes, an electric field propagates along the wire at **nearly the speed of light** (about 3 × 10⁸ m/s). The electrons are already there, filling the entire wire. The field gives all of them the push simultaneously (F = qE), and they all start drifting together.

This was a real "aha" moment for me. The electrons barely move, but the field moves at light speed. What we call "electricity" is really field propagation.

### The Essence of Voltage: Electric Field Accumulated Over Distance

In physics terms, voltage is **electrical potential difference**. A battery uses chemical energy to forcibly separate positive and negative charges, creating an **electric field** in the space around it. Voltage is the work done by that field per unit charge moved between two points.

So voltage isn't some mystical pressure — it's the **spatial accumulation of the electric field's "invisible push" on charges**.

# Kirchhoff's Laws

These two laws aren't just handy circuit analysis tricks. They're direct consequences of two fundamental conservation laws of the universe: **conservation of charge** and **conservation of energy**.

## Kirchhoff's Current Law (KCL)

### Why Electrons Can't Pile Up at a Node

- **The formula**: Σ I_in = Σ I_out
- **The physics**: Electrons carry negative charge. According to **Coulomb's Law**, like charges repel each other with enormous force. If more electrons flowed into a junction than flowed out, negative charge would start accumulating there.
- **The self-correction**: The instant charge begins to accumulate, the repulsive force pushes away incoming electrons and accelerates outgoing ones. This self-balancing act happens in nanoseconds. Under steady-state conditions, **no node can hold excess net charge**. What goes in must come out — exactly.

## Kirchhoff's Voltage Law (KVL)

### Why the Sum Around a Loop Must Equal Zero

- **The formula**: Σ V = 0
- **The physics**: In electrostatics and low-frequency circuits, the electric field is a **conservative field** (irrotational). The work done depends only on the start and end points, not on the path taken between them.

- **The energy picture**: Think of the power source as a "charge elevator" — it uses chemical energy to lift electrons from low potential to high potential. As those electrons flow through resistors, they give up that potential energy through collisions with the atomic lattice, converting it into **heat** or **light**. By the time an electron returns to the battery's negative terminal, it has given back all the energy it gained. Energy can't be created or destroyed — that's KVL in a nutshell.

# Basic Electronic Components

## Resistor

![Carbon Film Resistor Cross-Section](./18.jpg)

A resistor is a passive component whose job is to impede current flow. Its primary uses: limiting current (so your LED doesn't burn out) and dividing voltage (so you can create reference levels).

### What's Inside a Carbon Film Resistor?

1. **Ceramic Core**: A solid rod of high-grade ceramic (an insulator) — the structural foundation.
2. **Carbon Film Layer**: A thin layer of pure carbon deposited on the ceramic rod. This is the actual resistive material.
3. **The Helical Groove**: A spiral cut is laser-trimmed into the carbon film. The spiral's geometry sets the resistance: shorter, wider path = lower resistance; longer, thinner path = higher resistance.
4. **End Caps and Leads**: Metal caps press-fit onto both ends, with tinned copper leads welded on.
5. **Protective Coating and Color Bands**: Insulating lacquer with colored stripes that encode the resistance value and tolerance.

![Resistor Color Bands](./21.png)

### LED Current Limiting

![Limit the ampere vs LED broke by too much ampere](./17.png)

This is probably the first resistor circuit everyone builds: a resistor in series with an LED. Without it, the LED pulls as much current as the supply can give until it destroys itself.

### The Voltage Divider

In a series circuit with multiple resistors, the voltage drop across each is proportional to its resistance (bigger R = bigger voltage drop).

**Practical example — sizing a series resistor for an LED:**
An LED runs at 3V and draws 13.5mA (0.0135A). I've got a 5V supply.

- V_drop = V_source - V_LED = 5V - 3V = 2V
- R = V_drop / I = 2V / 0.0135A = 148.15Ω → **use a 150Ω resistor**

### Can I Treat an LED as a Resistor?

No. An LED is a diode — it's nonlinear. A resistor follows Ohm's law (current proportional to voltage). An LED's I-V curve is exponential: below its forward voltage it barely conducts, and above it, current skyrockets. You can't replace it with a fixed resistance value.

### Practical Case: Voltage Comparator

![Voltage Comparator Schematic 1](./23.png)
![Voltage Comparator Schematic 2](./22.png)

### Resistor Types

![Resistor Types Overview](./extra.png)

There's a whole zoo of resistor types: carbon film, metal film, wire-wound, SMD chip resistors, potentiometers (variable resistors). The choice depends on power rating, tolerance, temperature coefficient, and noise requirements. Metal film is my default for analog circuits — lower noise and better temperature stability than carbon film.

### Resistor — Summary

![Resistor Conclusion Diagram](./20.png)

## Capacitor

![Capacitor Overview 1](./27.png)
![Capacitor Overview 2](./28.png)

Capacitors store energy in an electric field between two conductive plates separated by a dielectric (insulator). They're used for filtering, decoupling, timing circuits, and energy storage. The key formula: I = C × dV/dt — current through a capacitor is proportional to how fast the voltage is changing.

## Inductor

![Inductor Overview](./29.png)

An inductor stores energy in a magnetic field when current flows through it. It's a coil of wire, usually wound around a magnetic core. Its defining behavior: it resists changes in current. The key formula: V = L × dI/dt — voltage across an inductor is proportional to how fast the current is changing.

### Practical Case: Rectifier Bridge with LC Filter

![Rectifier Bridge with Inductor 1](./24.png)
![Rectifier Bridge with Inductor 2](./25.png)

In power supplies, inductors team up with capacitors to form LC filters. After the bridge rectifier converts AC to pulsating DC, the inductor opposes ripple current and the capacitor smooths the voltage, giving much cleaner DC than a capacitor alone.

## Diode

![Diode Overview](./30.png)

A diode is a semiconductor device that lets current flow in only one direction — anode to cathode. It's the fundamental building block for rectification (AC to DC), reverse-polarity protection, and all sorts of signal processing. The forward voltage drop is typically 0.7V for silicon diodes and 0.2-0.4V for Schottky diodes.

### Practical Case: Rectifier Bridge

![Rectifier Bridge — Diode Case](./26.png)

Four diodes arranged as a bridge rectifier turn AC into pulsating DC. The capacitor after the bridge smooths it into something usable. This is the front end of basically every linear power supply ever made.

## Transistor

🚧 _Coming soon — I'm working through transistor content and will add it when I've got it organized._

## MOSFET

🚧 _Coming soon — MOSFET content will be added in a future update._

## Linear and Switching Power Supplies

![Linear vs Switching PSU Overview](./31.png)

Power supplies convert input power into regulated DC output. Two main approaches:

- **Linear Power Supply**: Transformer → rectifier → filter capacitor → linear regulator. Simple, low noise, but inefficient — excess energy becomes heat.
- **Switching Power Supply (SMPS)**: High-frequency switching → transformer → rectification → feedback control. More complex, but way more efficient and much smaller.

### Practical Case: 230V to 12V Switching Power Supply

![SMPS Analysis 1](./32.png)
![SMPS Analysis 2](./33.png)
![SMPS Analysis 3](./34.png)

Walking through an SMPS schematic and identifying the input filtering, bridge rectifier, switching controller, transformer, output rectification, and feedback loop is great practice for understanding real power supply design.

## Practical Skills

![Practical Skills Overview](./35.png)

The hands-on stuff I've been building: breadboarding circuits, soldering, using a multimeter properly, reading schematics, and basic troubleshooting. You can read about theory all day, but until you've debugged why your circuit isn't working and found the loose ground connection with a meter, it doesn't really stick.

# References

1. [LED weerstand calculator](https://www.budgetronics.eu/nl/led-weerstand-calculator/c-7)
2. [Resistor Heat Calculator](https://a2zcalculators.com/science-and-engineering-calculators/resistor-heat-calculator)
3. [Pull-up and Pull-down Resistors](https://www.circuitbasics.com/pull-up-and-pull-down-resistors/)
4. [Voltage comparator LM393 data sheet | TI.com](https://www.ti.com/product/LM393#features)
5. [How to Build a Voltage Comparator Circuit Using an LM393](https://www.learningaboutelectronics.com/Articles/LM393-voltage-comparator-circuit.php)
6. [LC filter calculator](https://www.omnicalculator.com/physics/lc-filter)
7. [Voltage and Current Explained](https://www.ariat-tech.com/blog/comprehensive-overview-of-voltage-and-current.html)
8. [25 Types of Capacitors & their Uses](https://www.etechnophiles.com/types-of-capacitors/)
9. [Linear Regulated Power Supply Block Diagram & Circuit Diagram](https://www.hackatronic.com/linear-regulated-power-supply-block-diagram-circuit-diagram/)
10. [How to Build a Linear Power Supply](https://www.circuitbasics.com/linear-power-supplies/)
11. [Power Supply Basics — Part 1](https://mcitransformer.com/power-supply-basics-part-1-unregulated-linear-regulated-linear/)
12. [Isolated vs Non-Isolated Power Supplies](https://resources.altium.com/p/isolated-vs-non-isolated-power-supplies-right-choice-without-fail)
13. [Gallium Nitride Power Devices in Power Electronics Applications](https://www.mdpi.com/1996-1073/16/9/3894)
14. [How mobile phone charger works? | SMPS](https://www.youtube.com/watch?v=F2dCS5qOE8A)
15. [Modular AC line EMI filters explained](https://passive-components.eu/modular-ac-line-emi-filters-explained/)
16. [Bridge Rectifier With Capacitor Filter](https://www.voltagelab.com/bridge-rectifier-with-capacitor-filter/)
17. [Understanding of Carbon Film Resistors](https://www.utmel.com/blog/categories/resistor/understanding-of-carbon-film-resistors)
18. [Resistor Color Codes: What Do the Color Bands Mean?](https://www.te.com/en/products/passive-components/resistors/intersection/resistor-color-codes.html)
