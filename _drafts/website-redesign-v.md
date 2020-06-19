---
title: Website Redesign Part V - Choosing a Typeface for Essays
---

I love typography, but I'm not that good at it. One day I'll take a typography course at a a design school, but in the meantime I need to choose some typefaces for this website. I'm fairly confident I'll need two rather different typefaces in the end. A **essay face** for setting longer-form writing and a **UI face** for everything else. I like the idea of using a very modernist face for the UI and something more old-fasioned and bookish for the essays. It might be hard to make this work but it seems to chime will with my personality – I've always had a tendancy to mix super-modern with traditional oldy-worldy. Trainers and Tweeds, if you will.

I'll explore this in more detail in a future article, but for the time-being let's revisit the four core values I decided on in [Part I]({% post_url 2020-03-14-website-redesign-i %}): _Simple_, _Beautiful_, _Authentic_ and _Content-first_. Choosing and pairing typefaces is hard, so to keep things simple we'll start by looking for one. And that last value makes a strong case for starting with the content.

## What do I need from an Essay Typeface

The most obious requirement is that it's very readable. And in particular, **on screens**. It needs to get out of the way and put the content first. It also needs to work well in dark mode, which probably rules out faces with very high stroke contrast (and therefore thin stokes). And to keep things simple, it should also work for headings, quotes, captions and the like –I'd rather not use a third face for this.

As far as feel goes, I'm going for **bookish but definitely of the digital world**. This probably means a serif, but maybe not a really traditional one.

So I'm going to start by looking for faces that are digital natives (ie not redrawings of print faces), which have been designed specifically for readability on the screen. There are a few technical constraints to think about first, though.

## Technical Constrains & Features

It must be open source. While I have a subscription to Adobe Fonts I don't want this project to depend on a paid service. If I can find something that's hosted on Google Fonts so much the better. Because **simplicity**.

I'd _prefer_ a variable font. Mostly because they're new and shiny and fun to play with, but also because it's likely to reduce total page weight. If I go with a variable font, it also needs to have a static version – not all browsers properly support variable fonts yet.

I'll need a good selection of weights in both roman and italic. Probably 200 (light), 400 (normal), 700 (bold) as a minimum. I'll also want support for the following opentype features[^1]:

- Proper small caps
- Both Old-style and and Lining figures
- Nice default and discretionary ligatures
- Fractions

It would be nice to have a proper superscript for footnotes, but this is hardly crucial.

## Checklists

I've bubbled all of that down into a couple of checklists to help me evaluate fonts. On reflection, none of the items are really mandatory – it's important I keep an open mind while I'm exploring. But they're good starter to help narrow down the field.

### Technical Features

- [ ] Open source?
- [ ] Available on Google Fonts?
- [ ] Variable Font? (with static version as fallback?)
- [ ] Wights at least: light (200), normal (400) and bold (700) in italic and bold.
- [ ] Proper Small Caps
- [ ] Old-style and lining figures
- [ ] Nice ligatures (including discretionary)
- [ ] Proper Fractions
- [ ] Other OpenType features that might be fun/useful?

### Style

- [ ] Was it made specifically for the screen?
- [ ] Does it feel bookish?
- [ ] Does it still feel kinda modern?
- [ ] Is it easy to read at very small and very large text-sizes?
- [ ] Also in light and dark modes?
- [ ] Does it work on low-res screens?
- [ ] Is it suitable for both dense paragraph-heavy copy and more sparse copy like lists?
- [ ] Could it work for headings, callouts, quotes and captions too?
- [ ] Does it get out the way?
- [ ] Do I think it's beautiful?
- [ ] Does it feel like me?

## The Shortlist

After a lot of exploration, I've settled on five candidates. None hit all the criteria in the checklists, but a few get pretty close. And I like them all.

### Spectral

![Type Specimen - Spectral](/uploads/2020-06-19-Spectral.png)

Link to article.
Too spindly.
Looks bad in dark mode (show screenshot).
Doesn't Feel modern enough.

### Lora

![Type Specimen - Lora](/uploads/2020-06-19-Lora.png)

A nice simple one. Explain history and features a bit more.

### Alagreya

![Type Specimen - Alagreya](/uploads/2020-06-19-Alagreya.png)

Has a small caps and sans version as seperate fonts.
Feels too caligraphic somehow.

### Literata

![Type Specimen - Literata](/uploads/2020-06-19-Literata.png)

Literata is probably one of my favourites. It feels right for the job, somehow. It's got a huge array of varients plus a variable version and some lovely ligatures.

### Bitter

![Type Specimen - Bitter](/uploads/2020-06-19-Bitter.png)

Great for eBook readers, but specifically designed for that. Not refined enought for my use here. Feels too clunky.

---

[^1]: [Here's](https://sparanoid.com/lab/opentype-features/) a good overview of CSS opentype features.
