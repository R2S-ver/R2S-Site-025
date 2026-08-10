---
title: Light Diffusion Test Platform

date: 2024-07-20

description: A custom-built test platform for systematic evaluation of material optical properties — transmission, diffusion, reflection, and luminance distribution under controlled lighting. Built for CMF decision-making in product development.

type: projects

category: CMF & Optical Testing

cover: 03-final-platform-3d.png

tags:
  - Industrial Design
  - CMF
  - Material Testing
  - Light Diffusion
  - Optical Measurement

tools:
  - Arduino
  - LED Strip (PWM Controlled)
  - Laboratory Lift Table
  - Precision Stepper Driver
  - Oxygen-Free Copper Wire

featured: true

lang: en

translationKey: light-diffusion-test-platform
---

# Background

In product design, CMF (Color, Material, Finish) decisions are often made based on subjective visual judgment. When a designer chooses a translucent material for a lamp housing, a diffuser panel, or a display cover, they are essentially making a prediction about how light will interact with that material — how much will pass through, how much will scatter, and how the surface will appear under different lighting conditions.

The problem is that these optical behaviors are difficult to predict without empirical data. Two materials that look identical under room light can behave completely differently when backlit. Surface finish, thickness, color, and internal structure all affect light propagation in ways that renderings and intuition alone cannot reliably capture.

I designed and built this test platform to bridge that gap: a controlled environment where material samples can be systematically evaluated for their light transmission, diffusion, reflection, and luminance characteristics. The platform supports early-stage CMF decision-making by replacing guesswork with reproducible measurements.

# Requirements

The platform needed to measure four key optical properties:

| Property | What It Tells Us | Design Relevance |
|---|---|---|
| **Transmission** | How much light passes through the material | Brightness of backlit interfaces, display legibility |
| **Diffusion** | How evenly light scatters after passing through | Uniformity of illuminated panels, hotspot elimination |
| **Reflection** | How the surface reflects incident light | Surface finish selection, glare control |
| **Luminance Distribution** | Brightness variation across the illuminated area | Visual comfort, light guide design |

Beyond measurement capability, the platform had additional design requirements:
- <strong style="color:var(--accent)">Repeatable positioning</strong>: Samples must be placed at consistent distances from the light source
- <strong style="color:var(--accent)">Adjustable intensity</strong>: Light source must support variable brightness for testing across different illumination levels
- <strong style="color:var(--accent)">Ambient light control</strong>: The test environment must minimize external light interference
- <strong style="color:var(--accent)">Modular sample mounting</strong>: Quick swapping between different material samples
- <strong style="color:var(--accent)">Observable output</strong>: Results must be visually observable and comparable between samples

# Design & Build

![Concept Design](./02-concept-design.png)

## Platform Architecture

The test platform consists of a vertical measurement rig with a light source mounted below, a sample holder positioned at an adjustable height, and an observation point above. The design draws inspiration from laboratory optical benches, stripped down to the essentials needed for comparative material testing.

<div class="side-by-side">
  <div><img src="./04-final-render.png" alt="Final Render" /><p>Final 3D Render</p></div>
  <div><img src="./05-concept-sketch.png" alt="Concept Sketch" /><p>Concept Sketch</p></div>
</div>

### Key Components

- <strong style="color:var(--accent)">Light source</strong>: LED strip with PWM brightness control, providing adjustable illumination from dim to full intensity
- <strong style="color:var(--accent)">Sample stage</strong>: Adjustable-height platform (repurposed laboratory lift table) for precise control over the diffusion distance — the gap between the light source and the material sample
- <strong style="color:var(--accent)">Frame</strong>: Laser-cut structural components, painted black to absorb ambient light and minimize indirect reflections
- <strong style="color:var(--accent)">Control system</strong>: Arduino-based PWM controller enabling repeatable brightness settings
- <strong style="color:var(--accent)">Power delivery</strong>: Oxygen-free copper wiring (minimum 0.5mm² cross-section) for safe current handling up to 2A

## Fabrication Process

<div class="process-scroll" id="process-scroll">
  <div class="process-track" id="process-track" data-copies="3" data-unique="10">
    <div class="step"><img src="./06-3d-modelling.png" alt="3D Modelling" /><span>STEP 1: 3D Modelling</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="Laser Cutting" /><span>STEP 2: Laser Cutting</span></div>
    <div class="step"><img src="./08-test-build.png" alt="Test Build" /><span>STEP 3: Test Build</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="Surface Finish" /><span>STEP 4: Surface Finish</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="Subassembly" /><span>STEP 5: Subassembly</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="Circuit Soldering" /><span>STEP 6: Circuit Soldering</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="Circuit Verification" /><span>STEP 7: Circuit Verification</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="Polarity Check" /><span>STEP 8: Polarity Check</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="Subassembly" /><span>STEP 9: Final Assembly</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="Circuit Testing" /><span>STEP 10: Circuit Testing</span></div>

    <div class="step"><img src="./06-3d-modelling.png" alt="3D Modelling" /><span>STEP 1: 3D Modelling</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="Laser Cutting" /><span>STEP 2: Laser Cutting</span></div>
    <div class="step"><img src="./08-test-build.png" alt="Test Build" /><span>STEP 3: Test Build</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="Surface Finish" /><span>STEP 4: Surface Finish</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="Subassembly" /><span>STEP 5: Subassembly</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="Circuit Soldering" /><span>STEP 6: Circuit Soldering</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="Circuit Verification" /><span>STEP 7: Circuit Verification</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="Polarity Check" /><span>STEP 8: Polarity Check</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="Subassembly" /><span>STEP 9: Final Assembly</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="Circuit Testing" /><span>STEP 10: Circuit Testing</span></div>

    <div class="step"><img src="./06-3d-modelling.png" alt="3D Modelling" /><span>STEP 1: 3D Modelling</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="Laser Cutting" /><span>STEP 2: Laser Cutting</span></div>
    <div class="step"><img src="./08-test-build.png" alt="Test Build" /><span>STEP 3: Test Build</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="Surface Finish" /><span>STEP 4: Surface Finish</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="Subassembly" /><span>STEP 5: Subassembly</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="Circuit Soldering" /><span>STEP 6: Circuit Soldering</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="Circuit Verification" /><span>STEP 7: Circuit Verification</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="Polarity Check" /><span>STEP 8: Polarity Check</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="Subassembly" /><span>STEP 9: Final Assembly</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="Circuit Testing" /><span>STEP 10: Circuit Testing</span></div>
  </div>
</div>

# Material Testing

The platform was designed to test a range of translucent and transparent materials commonly used in product design for diffuser panels, light guides, and illuminated enclosures.

### Test Material Matrix

| Material | Type | Key Characteristic |
|---|---|---|
| **Translucent PLA** | 3D-printed | Layer-line scattering, affordable prototyping |
| **Translucent PETG** | 3D-printed | Higher clarity than PLA, better layer adhesion |
| **Acrylic Sheet** | Laser Cut | Excellent optical clarity, scratch-resistant, range of surface finishes |
| **AB Epoxy Resin Plate** | Cast resin | High transparency, smooth surface, alternative to glass |
| **PC Light Diffuser Sheet** | Extruded polycarbonate | Purpose-built for diffusion, prismatic surface patterns |

Each material was tested across multiple configurations, providing comparative data on how material choice affects the final visual output of an illuminated product.

# Controllable Variables

One of the platform's core design principles was the ability to isolate individual variables. This enables systematic A/B testing where only one parameter changes at a time.

<div class="variables-grid">

- <strong style="color:var(--accent)">Light Intensity</strong> — PWM-controlled LED brightness from dim to maximum output
- <strong style="color:var(--accent)">Material Type</strong> — PLA, PETG, Acrylic, AB Epoxy, PC Diffuser
- <strong style="color:var(--accent)">Material Color</strong> — Natural, white, tinted variants of each material
- <strong style="color:var(--accent)">Material Thickness</strong> — Single vs. multiple layers, varying sheet gauges
- <strong style="color:var(--accent)">Surface Finish</strong> — Raw print, sanded (80–5000 grit), polished, textured
- <strong style="color:var(--accent)">Diffusion Distance</strong> — Adjustable gap between light source and sample via lift table

</div>

# Iteration

The platform itself went through three significant design iterations, each solving problems discovered in the previous version.

![Iteration Comparison](./01-iteration-comparison.png)

| | V1 — Single LED | V2 — LED Strip | V3 — LED Strip + PWM |
|---|---|---|---|
| Method | Hand-soldered | Copper foil tape | PWM controller |
| Issues | <span style="color:#e53935">✕</span> Soldering too slow | <span style="color:#e53935">✕</span> Tape unsuitable for 2A | <span style="color:#00ff88">✓</span> Brightness adjustable |
| | <span style="color:#e53935">✕</span> Light effect poor | <span style="color:#e53935">✕</span> No brightness control | <span style="color:#00ff88">✓</span> Diffuse reflection from dark surfaces |
| Verdict | <span style="color:#e53935">✕ Discarded</span> | <span style="color:#e53935">✕ Discarded</span> | <span style="color:#00ff88">✓ Final</span> |

### V1: Single LED // Manual Solder

The initial prototype used individual LEDs soldered by hand to a prototype board.

- <span style="color:#e53935">**Issue:**</span> Manual soldering was time-consuming and inconsistent — each LED had slightly different output characteristics
- <span style="color:#e53935">**Issue:**</span> The single-point light source created uneven illumination, making it difficult to assess diffusion performance accurately

### V2: LED Strip // Copper Foil Tape

The second iteration replaced individual LEDs with a uniform LED strip and used copper foil tape for electrical connections.

- <span style="color:#e53935">**Issue:**</span> Copper foil tape was not suitable for the required 2A current — after calculation, the cross-sectional area was insufficient, creating a potential safety hazard
- <span style="color:#e53935">**Issue:**</span> Fixed brightness — there was no way to adjust light intensity for different test scenarios

### V3: LED Strip + PWM Controller (Current Version)

The final iteration addressed the critical issues:

- <span style="color:#00ff88">**Upgrade:**</span> Copper foil tape was replaced with oxygen-free copper wire (minimum 0.5mm² cross-sectional area), safely rated for the 2A current requirement
- <span style="color:#00ff88">**Upgrade:**</span> An Arduino-based PWM controller was integrated, enabling adjustable brightness across the full range
- <span style="color:#00ff88">**Upgrade:**</span> The test panel frame was painted black to absorb ambient light and minimize the influence of indirect material reflections on measurements

# Result

The completed platform provides a reliable environment for comparative CMF material testing. It enables:

- <strong style="color:var(--accent)">Side-by-side comparison</strong> of different materials under identical lighting conditions
- <strong style="color:var(--accent)">Systematic evaluation</strong> of how surface finish affects light diffusion and reflection
- <strong style="color:var(--accent)">Thickness-dependent analysis</strong> of transmission properties
- <strong style="color:var(--accent)">Controlled brightness testing</strong> to observe material behavior at different illumination levels
- <strong style="color:var(--accent)">Visual documentation</strong> of light distribution patterns for design reference

![Final Platform](./03-final-platform-3d.png)

## Key Learnings

Beyond the CMF test data itself, building this platform reinforced several industrial design principles:

- <strong style="color:var(--accent)">Current rating matters</strong>: The copper foil tape failure was a reminder that materials chosen for prototyping must be evaluated against real electrical requirements — aesthetics and convenience cannot override safety
- <strong style="color:var(--accent)">Ambient control is critical</strong>: Optical measurements are highly sensitive to environmental light. The black-painted frame was a simple but essential upgrade that dramatically improved measurement consistency
- <strong style="color:var(--accent)">Variable isolation enables insight</strong>: Being able to change one parameter at a time — material, thickness, surface finish, distance — transforms testing from subjective observation into systematic comparison
- <strong style="color:var(--accent)">Build the tool, then use the tool</strong>: Investing time in a proper test platform pays dividends across multiple projects. Every future CMF decision involving translucent materials can now reference empirical data rather than guesswork


