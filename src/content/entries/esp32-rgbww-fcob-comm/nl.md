---
title: ESP32 + RGBWW FCOB LED-communicatie
date: 2026-08-02
description: "Communicatietest met NeoPixelBus op een RGBWW FCOB LED-strip: kanaalwisseling en protocolverificatie."

type: lab
category: Embedded systemen
cover: 01-fcob-setup.png

tags:
  - ESP32
  - NeoPixel

tools:
  - ESP32
  - RGBWW FCOB LED-strip
  - NeoPixelBus-bibliotheek

featured: false

lang: nl

translationKey: esp32-rgbww-fcob-comm
---

![FCOB LED-opstelling](./01-fcob-setup.png)

# Doel

Voordat ik iets interessants met de FCOB-strip kon doen, moest ik eerst controleren of de basis klopte: dat de ESP32 ermee kon communiceren, dat de datalijn op de juiste pin zat en dat ik de volgorde van de kleurkanalen begreep. FCOB-strips verschillen iets van gewone adresseerbare leds; ze gebruiken een doorlopende fosforcoating in plaats van losse leds, wat een veel vloeiender en egaler licht geeft. Maar het communicatieprotocol is dezelfde one-wire interface in NeoPixel/WS2812-stijl, dus de softwarekant is bekend terrein.

# Code

```cpp
#include <NeoPixelBus.h>

#define LED_PIN 5
// Assume 150 control points for now
#define LED_COUNT 150

NeoPixelBus<NeoGrbwFeature, NeoEsp32Rmt0800KbpsMethod> strip(LED_COUNT, LED_PIN);

void setup() {
  strip.Begin();
  strip.Show();
}

void loop() {
  // Red
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(255, 0, 0, 0));
  }
  strip.Show();
  delay(2000);

  // Green
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 255, 0, 0));
  }
  strip.Show();
  delay(2000);

  // Blue
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 0, 255, 0));
  }
  strip.Show();
  delay(2000);

  // White (WW channel)
  for (int i = 0; i < LED_COUNT; i++) {
    strip.SetPixelColor(i, RgbwColor(0, 0, 0, 255));
  }
  strip.Show();
  delay(2000);
}
```

Ik had 150 leds hard gecodeerd als tijdelijke waarde; ik wist op dat moment nog niet het exacte aantal aanstuurpunten van deze strip (dat kwam later). Voor een communicatietest maakt dat niet uit; je hebt alleen een getal nodig dat hoog genoeg is om de hele strip te dekken. De belangrijkste dingen om hier te controleren waren de kleurvolgorde van `NeoGrbwFeature` (de library verwacht rood, wit, groen en blauw; niet de gebruikelijke R, G, B, W) en de `NeoEsp32Rmt0800KbpsMethod`, die de RMT-peripheral van de ESP32 gebruikt voor stabiele timing op 800 kbps. Als je het feature-type of het pinnummer verkeerd hebt, gaat er niets branden; of erger, je krijgt willekeurige kleuren waardoor je een uur lang aan je bedrading gaat twijfelen.

# Resultaat

De FCOB LED-strip doorloopt achtereenvolgens rood, groen, blauw en warmwit. De communicatie tussen de ESP32 en de NeoPixel-strip is stabiel en alle vier de kleurkanalen (R, G, B, W) reageren correct.

Bevredigend moment: de hele strip licht op in een strakke, egale kleur, zonder geflikker, zonder haperingen. De op RMT gebaseerde methode op de ESP32 verwerkt de strakke timingvereisten van het WS2812-protocol zonder moeite. Nu de communicatie bevestigd was, kon ik verder met het bouwen van een echte kleurregelinterface.
