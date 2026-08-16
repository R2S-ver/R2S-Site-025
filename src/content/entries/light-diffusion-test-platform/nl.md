---
title: Testplatform voor lichtdiffusie
date: 2026-04-20
description: Ontwierp een optisch desktop-testplatform om lichttransmissie, diffusie, reflectie en luminantieverdeling onder gecontroleerde omstandigheden te meten, zodat subjectieve CMF-beslissingen meetbaar worden.
type: projects
category: CMF & Optisch Testen
cover: 03-final-platform-3d.png
tags:
  - Industrieel Ontwerp
  - CMF
  - Materiaaltesten
  - Lichtdiffusie
  - Optische Meting
tools:
  - Arduino
  - LED-strip (PWM-gestuurd)
  - Laboratoriumheftafel
  - Precisie-stappenmotordriver
  - Zuurstofvrij koperdraad
featured: true
lang: nl
translationKey: light-diffusion-test-platform
---

# Het probleem dat ik wilde oplossen

Dit gebeurt voortdurend in productontwerp: je kiest een doorschijnend materiaal voor een lampenkap, een diffuserpaneel of een displayafdekking, en eigenlijk doe je een goed onderbouwde gok. Je houdt het sample tegen het licht, knijpt je ogen een beetje toe, houdt het misschien naast een ander sample en denkt: "ja, deze ziet er wel goed uit".

Het probleem is dat twee materialen die er onder kamerlicht identiek uitzien, zich totaal anders kunnen gedragen zodra ze van achteren worden belicht. Oppervlakteafwerking, dikte, pigmentgehalte, interne structuur: ze beïnvloeden allemaal hoe licht door het materiaal beweegt, en renders brengen je maar tot zover. Op een gegeven moment moet je echt meten wat er gebeurt.

Dus bouwde ik een testopstelling. Niet omdat ik weken aan een apparaat wilde besteden, maar omdat elke CMF-beslissing die ik daarna nam, onderbouwd zou zijn met data in plaats van intuïtie.

# Wat het platform meet

Vier optische eigenschappen, elk direct relevant voor productontwerpbeslissingen:

| Eigenschap              | Wat het je vertelt                                  | Waarom het ertoe doet voor ontwerp                        |
| -------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| **Transmissie**         | Hoeveel licht er door het materiaal heen komt       | Helderheid van displays die van achteren belicht worden, zichtbaarheid van LED-indicatoren |
| **Diffusie**            | Hoe gelijkmatig het licht verstrooit na het passeren | Hotspots elimineren, uniformiteit van belichte oppervlakken |
| **Reflectie**           | Hoe het materiaaloppervlak invallend licht weerkaatst | Keuze van oppervlakteafwerking, tegengaan van verblinding |
| **Luminantieverdeling** | Helderheidsvariatie over het belichte oppervlak     | Visueel comfort, prestaties van lichtgeleiders            |

Naast de meetdoelen had ik een handvol praktische eisen die net zo belangrijk bleken als de optische:

- <strong style="color:var(--accent)">Reproduceerbare positionering</strong>: als ik samples niet op consistente afstanden van de lichtbron kan plaatsen, betekenen de vergelijkingen niets.
- <strong style="color:var(--accent)">Instelbare helderheid</strong>: materialen zien er bij 10% helderheid anders uit dan bij 100%. De lichtbron moet dat bereik kunnen dekken.
- <strong style="color:var(--accent)">Beheersing van omgevingslicht</strong>: optische metingen in een zonverlichte kamer zijn alleen maar ruis. De testomgeving moet externe interferentie minimaliseren.
- <strong style="color:var(--accent)">Snel samples wisselen</strong>: als het verwisselen van materiaal vijf minuten kost, ga ik niet genoeg vergelijkingen uitvoeren om iets nuttigs te leren.
- <strong style="color:var(--accent)">Visuele output</strong>: ik moet de resultaten kunnen zien, niet alleen getallen loggen. Zij-aan-zij visuele vergelijking is de helft van waar het om gaat.

# Ontwerp & bouw

![Conceptontwerp](./02-concept-design.png)

## Platformarchitectuur

De opstelling is een verticaal meetstatief: lichtbron onderaan, verstelbaar sampleplatform in het midden, observatie van bovenaf. De lay-out is in feite een uitgeklede optische bank: niets wat ik niet nodig had, niets wat in de weg zit.

<div class="side-by-side">
  <div><img src="./04-final-render.png" alt="Finale render" /><p>Finale 3D-render</p></div>
  <div><img src="./05-concept-sketch.png" alt="Conceptschets" /><p>Conceptschets</p></div>
</div>

### Belangrijkste onderdelen

- <strong style="color:var(--accent)">Lichtbron</strong>: LED-strip met PWM-helderheidsregeling. Gaat van nauwelijks gloeiend tot volledige output, en ik kan exacte niveaus reproduceerbaar instellen.
- <strong style="color:var(--accent)">Sampleplatform</strong>: hergebruikte laboratoriumheftafel. De hoogteverstelling laat me de afstand tussen de lichtbron en het materiaal precies bepalen, wat ik de "diffusiespleet" noem. Deze variabele bleek verrassend belangrijk.
- <strong style="color:var(--accent)">Frame</strong>: lasergesneden structuurpanelen, matzwart gespoten. De zwarte afwerking is geen cosmetica: hij absorbeert strooilicht en smoort interne reflecties die de metingen anders zouden vervuilen.
- <strong style="color:var(--accent)">Besturingssysteem</strong>: een Arduino met een eenvoudige PWM-routine. Niets bijzonders, maar het geeft me reproduceerbare helderheidsstappen, zodat ik dagen later naar dezelfde instellingen kan terugkeren en dezelfde output krijg.
- <strong style="color:var(--accent)">Voedingsleiding</strong>: zuurstofvrij koperdraad, minimale doorsnede van 0.5mm². Geschikt voor 2A met marge. Deze specificatie werd later belangrijk (zie het iteratiegedeelte).

## Fabricageproces

<div class="process-scroll" id="process-scroll">
  <div class="process-track" id="process-track" data-copies="3" data-unique="10">
    <div class="step"><img src="./06-3d-modelling.png" alt="3D-modelleren" /><span>STAP 1: 3D-modelleren</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="Lasersnijden" /><span>STAP 2: Lasersnijden</span></div>
    <div class="step"><img src="./08-test-build.png" alt="Testopbouw" /><span>STAP 3: Testopbouw</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="Oppervlakteafwerking" /><span>STAP 4: Oppervlakteafwerking</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="Subassemblage" /><span>STAP 5: Subassemblage</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="Circuit solderen" /><span>STAP 6: Circuit solderen</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="Circuitverificatie" /><span>STAP 7: Circuitverificatie</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="Polariteitscontrole" /><span>STAP 8: Polariteitscontrole</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="Subassemblage" /><span>STAP 9: Eindassemblage</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="Circuittest" /><span>STAP 10: Circuittest</span></div>
    <div class="step"><img src="./06-3d-modelling.png" alt="3D-modelleren" /><span>STAP 1: 3D-modelleren</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="Lasersnijden" /><span>STAP 2: Lasersnijden</span></div>
    <div class="step"><img src="./08-test-build.png" alt="Testopbouw" /><span>STAP 3: Testopbouw</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="Oppervlakteafwerking" /><span>STAP 4: Oppervlakteafwerking</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="Subassemblage" /><span>STAP 5: Subassemblage</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="Circuit solderen" /><span>STAP 6: Circuit solderen</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="Circuitverificatie" /><span>STAP 7: Circuitverificatie</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="Polariteitscontrole" /><span>STAP 8: Polariteitscontrole</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="Subassemblage" /><span>STAP 9: Eindassemblage</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="Circuittest" /><span>STAP 10: Circuittest</span></div>
    <div class="step"><img src="./06-3d-modelling.png" alt="3D-modelleren" /><span>STAP 1: 3D-modelleren</span></div>
    <div class="step"><img src="./07-laser-cutting.png" alt="Lasersnijden" /><span>STAP 2: Lasersnijden</span></div>
    <div class="step"><img src="./08-test-build.png" alt="Testopbouw" /><span>STAP 3: Testopbouw</span></div>
    <div class="step"><img src="./09-surface-finish.png" alt="Oppervlakteafwerking" /><span>STAP 4: Oppervlakteafwerking</span></div>
    <div class="step"><img src="./10-subassembly-1.png" alt="Subassemblage" /><span>STAP 5: Subassemblage</span></div>
    <div class="step"><img src="./11-circuit-soldering.png" alt="Circuit solderen" /><span>STAP 6: Circuit solderen</span></div>
    <div class="step"><img src="./12-circuit-verification.png" alt="Circuitverificatie" /><span>STAP 7: Circuitverificatie</span></div>
    <div class="step"><img src="./13-polarity-check.png" alt="Polariteitscontrole" /><span>STAP 8: Polariteitscontrole</span></div>
    <div class="step"><img src="./14-subassembly-2.png" alt="Subassemblage" /><span>STAP 9: Eindassemblage</span></div>
    <div class="step"><img src="./15-circuit-testing.png" alt="Circuittest" /><span>STAP 10: Circuittest</span></div>
  </div>
</div>

# Materiaaltesten

Ik testte een reeks doorschijnende en transparante materialen die vaak voorkomen in productbehuizingen, diffusers en lichtgeleiders:

### Testmateriaalmatrix

| Materiaal                   | Type                  | Belangrijkste eigenschap                                               |
| --------------------------- | ---------------------- | ------------------------------------------------------------------------ |
| **Doorschijnend PLA**       | 3D-geprint            | Verstrooiing door laaglijnen, goedkoop voor prototyping                 |
| **Doorschijnend PETG**      | 3D-geprint            | Betere helderheid dan PLA, sterkere laaghechting                        |
| **Acrylaatplaat**           | Lasergesneden         | Grote optische helderheid, krasbestendig, veel opties voor oppervlakteafwerking |
| **AB-epoxyharsplaat**       | Gegoten hars          | Hoge transparantie, glad oppervlak, glasalternatief                     |
| **PC-lichtdiffuserplaat**   | Geëxtrudeerd polycarbonaat | Speciaal gemaakt voor diffusie, prismatische oppervlaktetextuur    |

Elk materiaal doorliep meerdere configuraties (verschillende diktes, verschillende oppervlakteafwerkingen, verschillende afstanden tot de lichtbron), zodat ik kon zien hoe de materiaalkeuze het uiteindelijke visuele resultaat echt beïnvloedt.

# Beheersbare variabelen

Het hele doel van het bouwen van een testopstelling in plaats van dingen gewoon voor een lamp te houden, was dat ik één ding tegelijk kon veranderen. Systematisch A/B-testen is alleen mogelijk als je elke variabele kunt vastzetten behalve degene die je onderzoekt.

<div class="variables-grid">

- <strong style="color:var(--accent)">Lichtintensiteit</strong>: PWM-gestuurd, van nauwelijks zichtbaar tot volle kracht
- <strong style="color:var(--accent)">Materiaaltype</strong>: PLA, PETG, acrylaat, AB-epoxy, PC-diffuser
- <strong style="color:var(--accent)">Materiaalkleur</strong>: naturel, wit en getinte varianten van elk materiaal
- <strong style="color:var(--accent)">Materiaaldikte</strong>: enkele laag, gestapelde lagen, verschillende plaatdiktes
- <strong style="color:var(--accent)">Oppervlakteafwerking</strong>: ruwe print, geschuurd (korrel 80–5000), gepolijst, getextureerd
- <strong style="color:var(--accent)">Diffusieafstand</strong>: de spleet tussen lichtbron en sample, ingesteld via de heftafel

</div>

# Drie versies om het goed te krijgen

Het platform ontstond niet in één keer. Ik heb het drie keer gebouwd, en elke versie loste iets op wat de vorige fout deed.

![Iteratievergelijking](./01-iteration-comparison.png)

|                          | V1: enkele LED                                          | V2: LED-strip                                               | V3: LED-strip + PWM                                                                      |
| ------------------------ | ------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <strong>Methode</strong> | Handgesoldeerd                                          | Koperfolietape                                              | PWM-controller                                                                           |
| <strong>Problemen</strong> | <span style="color:#e53935">✕</span> Solderen te langzaam | <span style="color:#e53935">✕</span> Tape ongeschikt voor 2A | <span style="color:var(--terminal-green)">✓</span> Helderheid instelbaar               |
|                          | <span style="color:#e53935">✕</span> Lichteffect matig  | <span style="color:#e53935">✕</span> Geen helderheidsregeling | <span style="color:var(--terminal-green)">✓</span> Diffuse reflectie vanaf donkere oppervlakken |
| <strong>Oordeel</strong> | <span style="color:#e53935">✕ Afgevallen</span>         | <span style="color:#e53935">✕ Afgevallen</span>             | <span style="color:var(--terminal-green)">✓ Definitief</span>                            |

### V1: enkele LED, handmatig solderen

Ik begon met losse LED's die ik met de hand op een perfboard soldeerde. Het was de voor de hand liggende eerste aanpak, en het was fout op precies de manieren die je zou verwachten.

- <span style="color:#e53935">**Probleem:**</span> Twintig LED's met de hand solderen is saai en inconsistent. Elke verbinding heeft een iets andere weerstand, waardoor elke LED een klein beetje anders gloeit. Voor een testplatform is "een klein beetje anders" fataal.
- <span style="color:#e53935">**Probleem:**</span> Een puntvormige lichtbron zorgt voor ongelijkmatige belichting over het sample. Als het licht van meet af aan niet uniform is, kun je niet zien of het diffusiepatroon dat je ziet van het materiaal komt of van de lichtbron.

### V2: LED-strip, koperfolietape

Ik verving de losse LED's door een uniforme LED-strip en gebruikte koperfolietape voor de elektrische verbindingen. Beter, maar nieuwe problemen.

- <span style="color:#e53935">**Probleem:**</span> Koperfolietape is handig en ziet er netjes uit, maar het kan 2A niet aan. Ik rekende de doorsnede door en realiseerde me dat dit een brandgevaar was dat stond te gebeuren. De esthetiek van een prototype telt weinig als je bedrading ondergedimensioneerd is.
- <span style="color:#e53935">**Probleem:**</span> Vaste helderheid. Welk materiaal of welke afstand ik ook testte, de lichtopbrengst bleef hetzelfde. Verschillende scenario's vragen om verschillende lichtniveaus, en ik had geen manier om bij te stellen.

### V3: LED-strip + PWM-controller (huidige versie)

Dit is de versie die is gebleven:

- <span style="color:var(--terminal-green)">**Upgrade:**</span> De kopertape eruit gesloopt en vervangen door zuurstofvrij koperdraad (min 0.5mm²). Netjes geschikt voor 2A met marge. Minder prettig om mee te werken dan tape, maar gemak doet er niet toe als je testopstelling afbrandt.
- <span style="color:var(--terminal-green)">**Upgrade:**</span> Een PWM-controller op basis van Arduino toegevoegd voor helderheidsregeling over het volledige bereik. Nu kan ik testen op 10%, 50%, 100% of alles daartussenin, en elke keer dezelfde meting krijgen.
- <span style="color:var(--terminal-green)">**Upgrade:**</span> Het binnenframe matzwart geschilderd. Dit klinkt triviaal, maar de verbetering in meetconsistentie was dramatisch. Omgevingslicht en interne reflecties hadden stilletjes elke meting vervuild die ik in V1 en V2 deed.

# Wat het platform oplevert

De afgebouwde opstelling geeft me een betrouwbare, reproduceerbare omgeving om te vergelijken hoe materialen met licht omgaan:

- <strong style="color:var(--accent)">Zij-aan-zij materiaalvergelijking</strong> onder identieke belichting: geen "ik denk dat deze er beter uitziet" meer
- <strong style="color:var(--accent)">Beoordeling van oppervlakteafwerking</strong>: hoe verandert schuren, polijsten of textureren de manier waarop licht erdoorheen beweegt?
- <strong style="color:var(--accent)">Analyse van dikte versus transmissie</strong>: hoeveel helderheid kost een verdubbeling van de plaatdikte nu echt?
- <strong style="color:var(--accent)">Gecontroleerde helderheidssweeps</strong>: zie hoe materialen zich gedragen over het volledige dimbereik, niet alleen bij één instelling
- <strong style="color:var(--accent)">Visuele documentatie</strong> van lichtverdelingspatronen waar ik bij toekomstige projecten naar kan terugverwijzen

![Eindplatform](./03-final-platform-3d.png)

## Wat het bouwen me heeft geleerd

Naast de CMF-data heeft het bouwen van dit platform een paar principes erin gestampt die op vrijwel elk ontwerp-bouwproject van toepassing zijn:

- <strong style="color:var(--accent)">Stroomwaarden zijn geen suggesties</strong>: het falen van de kopertape was een concrete herinnering dat prototypematerialen moeten worden beoordeeld op hun werkelijke elektrische belasting. Het maakt niet uit hoe netjes de build eruitziet als de bedrading ondergedimensioneerd is. Veiligheidsspecificaties zijn niet onderhandelbaar.
- <strong style="color:var(--accent)">Je omgeving is onderdeel van je instrument</strong>: optische metingen staan of vallen met de beheersing van omgevingslicht. Die matzwarte verflaag (die misschien twintig minuten kostte) verbeterde de meetconsistentie meer dan elke andere afzonderlijke wijziging. Soms heeft de simpelste oplossing de grootste impact.
- <strong style="color:var(--accent)">Isoleer één variabele tegelijk, anders ben je gewoon aan het gokken</strong>: de mogelijkheid om materiaal, dikte, afwerking of afstand onafhankelijk te veranderen is wat dit van "dingen voor een lamp houden" verandert in echt testen. Systematische vergelijking werkt alleen als je alles stil kunt houden behalve het ene ding dat je onderzoekt.
- <strong style="color:var(--accent)">Gereedschap verdient zich terug over projecten heen</strong>: tijd steken in een goed testplatform voelt in het begin traag, maar elke toekomstige CMF-beslissing met doorschijnende materialen verwijst nu naar echte metingen in plaats van turen en hopen. Dat is een rendement dat zich blijft opstapelen.
