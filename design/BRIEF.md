# Pee Poo Bark · build brief

## Current version: simplified

The owner saw the first version and said: "the website seems way too busy.
its cute but... i want a simpler site."

So the page is now three calm sections on one scroll:

1. **The name.** The owner's brush lettering, big, on tennis-ball yellow, with
   one line underneath.
2. **About.** The bandana drawing beside a short paragraph about the bandanas
   and the daily walk with two dogs.
3. **Hello.** "Want one for your dog?" and one button: Save me a bandana.

No pinned scrolling, no moving words, no crossed-out sign, no glossary. The
scroll-craft engine is only used for the gentle fade-in as each section
arrives, and that is switched off for visitors who ask for reduced motion.

Colours: tennis ball `#D8F04A`, off-black `#1A1916`, off-white `#F2F0E8`.
Type: the owner's lettering (`assets/logo.webp`) plus Archivo for everything
else.

---

## First version (retired as too busy), kept for reference

# Pee Poo Bark · build brief

**Self-authored from the owner's first message.** There was no formal
interview. Anything in *italics* below is an assumption to confirm or change.
Everything else comes from what the owner actually said.

## What the owner told us

> "pee poo bark. its a play on live, laugh love. its aimed at dogs and their
> human doggie parents."

> "i go for a walk with my two dogs every single day. i will start by creating
> bandannas that say pee, poo, bark on them. i already have the design ready,
> i will walk my dogs while they are wearing their bandanas to see if anyone
> takes any notice."

Assets supplied: the brush-script lettering "Pee / Poo / Bark" (one image, with
a fake checkerboard baked in). No photos, no footage, no colours, no logo files.

## The eight topics

1. **Vibe.** *Cheeky, warm, loud, a bit rude, fond.* Reference: the
   "Live Laugh Love" hallway sign itself, which the whole brand is answering.
2. **Journey (owner's sequence, inferred).** The name first. Then the joke it is
   playing on. Then the product (bandanas). Then the person and the two dogs
   behind it. Then a way to say hello.
3. **Energy.** Loud open, a hush, the loudest moment (the joke landing), then
   calmer and warmer towards the person, quiet at the end.
4. **Feeling, stage by stage, and the one moment.** See the curve below. The
   moment: the hallway sign being rewritten by the dog.
5. **Something no other site does.** A "Live Laugh Love" sign that gets crossed
   out in brush strokes and rewritten, word by word, as you scroll.
6. **Distance from premium-minimal.** Far. *Playful family*: bright ground,
   huge type, jokes. The taste floor still holds.
7. **One world or distinct scenes.** Distinct scenes, hard cuts between grounds.
   It is a poster, not a journey through a place.
8. **Assets.** The lettering only. *No generated imagery*: a fake dog photo
   would undercut a real person walking real dogs. Photos of the dogs in the
   bandanas should replace the bandana illustration as soon as they exist.

## Journey

```
1  The name      Pee Poo Bark, huge, before anything else
2  The hallway   the sign everyone has seen
3  The rewrite   the dog corrects it, word by word
4  The glossary  what the three words actually mean, to a dog
5  The bandana   the thing you can put on your own dog
6  The person    one human, two dogs, a walk every single day
7  Hello         one quiet way to ask for a bandana
```

## Feeling curve

```
1  Grin          three brush words at poster scale, moving apart as you scroll
2  Recognition   a near-empty beige screen and one small line about the sign
3  Delight       each polite word is struck through and a dog word lands on it   ← PEAK
4  Fondness      dictionary definitions that describe the reader's own dog
5  Want          the bandana drawn open, the three words on it
6  Warmth        a first-person note that assembles line by line
7  Welcome       the smallest type on the page, one underlined link
```

No two adjacent feelings repeat.

## The peak

> "there's a Live Laugh Love sign and as you scroll the dog crosses every word
> out and writes Pee, Poo, Bark over it"

Lives in act 3. It has the largest span on the page (3.4 viewport-heights,
next largest 1.7). Act 2 is the silence in front of it.

## Tell-someone sentence

It's the site where **the Live Laugh Love sign gets crossed out and rewritten by
a dog while you scroll.**

## Authored silence

Act 2 is deliberately almost empty: a beige ground and a single short line.
That is the quiet before the peak, not dead scroll.

## Grammar

**Typographic poster.** The brand's only asset is three words, and there are no
photographs yet. Why the other seven lost:

- Filmic one-shot and continuous world need footage or generated film. None
  exists, and generated dogs would be dishonest for a one-person brand.
- Live surface is for software.
- Chaptered editorial is for long reading. This brand is a joke told in three
  words.
- Gallery needs a range of products. There is one product so far.
- Split stage needs a two-sided argument. The Live Laugh Love comparison is one
  beat of this page, not its whole structure.
- Rhythmic cutlist fits the energy, but it bans the held pin the peak needs to
  land the joke slowly, word by word.

## Signature move

**The rewrite.** A pinned "LIVE · LAUGH · LOVE" sign. Scroll draws a
hand-made brush strike through each word (SVG `stroke-dashoffset` driven from
the act's `--sc-p`), then the owner's own lettering for Pee, Poo and Bark lands
over it at an angle, like graffiti, and the ground flips from hallway beige to
tennis-ball yellow once the dog has won. Coded in the page, the engine is not
touched.

## Score

| # | Beat | Device | Span | Why |
|---|---|---|---|---|
| 1 | The name | `pin` + per-word depth from `--sc-p` | 1.7 | Three word planes move at three rates, so the hero has depth without any photograph |
| 2 | The hallway | `flow` + `in` | ~0.8 | The quiet. Nothing moves but one line |
| 3 | The rewrite | `pin` + bespoke strike/stamp | 3.4 | The peak, the longest act |
| 4 | Glossary | `flow` + `in` stagger, `kinetic` heading | ~1.6 | Reading, not watching |
| 5 | Bandana | `flow` + `reveal` | ~1.2 | A wipe unveils the product |
| 6 | The person | `flow` + `kinetic` lines | ~1.0 | The note assembles line by line as it rises into view |
| 7 | Hello | `flow` + `in` | 1.0 | Smallest type on the site. It holds |

Families: pin, in, reveal, kinetic, plus the bespoke rewrite. No `scrub`,
`pan`, `tilt`, cards or scrims (grammar bans). Seven acts, about 11.5
viewport-heights, outside the 13.6 to 13.8 band.

## Colour

| Role | Value | Where |
|---|---|---|
| Tennis ball (accent) | `#D8F04A` | Hero ground, post-rewrite ground, person ground, lettering on dark |
| Off-black ink | `#1A1916` | Lettering and type on light grounds, glossary and close grounds |
| Bone | `#F2F0E8` | Type on dark, bandana ground |
| Hallway beige | `#E8DFD1` | Acts 2 and 3 only. This IS the Live Laugh Love aesthetic, used on purpose as the thing the dog overthrows |

## Type

- The owner's brush lettering, as cut-out images (`assets/word-*.webp`,
  `assets/logo.webp`), always with real text behind it for screen readers.
- One family for everything else: **Archivo** (Google Fonts), heavy and wide for
  display, regular for reading, thin and tracked for the hallway sign.

## Things to replace when they exist

- The contact email in `index.html` (search for `CHANGE-ME`).
- The bandana illustration, with a real photo of the dogs wearing them.
