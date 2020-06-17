---
title: Website Redesign Part V - I need to choose a font for this website
---

I have a healthy distain for the stereotypical hipster designer. Check-shirted with hand-made tortoiseshell glasses perched atop a mass of bushy facial hair glistening with artisan beard oil specially ordered from NYC. Or perhaps it's beige and turtleneck with a clean shave, produced no doubt by a custom-milled german straight blade. Whatever form this awful stereotype take in your mind, it probably spends some time talking about _typography, bro_. And in all likelihood, it knows bugger all about typography.

Using type well is really hard, and every designer I know who's really good at it spent **years** getting there. Interestingly, nearly all of them have formal academic training in design.

I love typography. But sadly, I'm about as good at it as the stereotype. And probably just as wanky when I talk about it. One day I'll take a typography course at a a design school.

The next few articles are my first real dive into some of this stuff, so forgive the waffle. And if you're a proper designer, forgive the fact I possibly sound like that stereotype.

In Part I, I settled on four values:

- Simple
- Beautiful
- Authentic
- Content-first

## Technical Constrains & Type Features

First, they must be on google fonts or open source, because **simplicity**.

I'd also prefer variable fonts because they're new and fun to play with, and they're likely to reduce page weight. This is not necessarily a hard constraint, though.

If the weight isn't variable, I'll want a good selection of weights standard weights... probably 200 (light), 400 (normal), 700 (bold) in both roman and italic.

I also want support for the following opentype features[^1]:

* Proper small caps
* Both Old-style and and Lining figures 
* Nice default and discretionary ligatures
* Fractions

It would be nice to have a proper superscript for footnotes and ordinals too, but this is hardly crucial.

I also think I want a clear visual distinction between "content copy" and "UI copy". The former plays the lead role and the latter a host of supporting roles.




Human vs Systems
Can I use a "Human" feeling font for article copy and a font more evocative of carefully designed, ordered systems for the UI copy?



## Checklist
### Technical Features
- [ ] Available on Google Fonts
- [ ] Variable Font?
- [ ] Has light (200), normal (400) and bold (700) weights in *italic* and **bold.**.
- [ ] Small Caps
- [ ] Old-style and lining figures
- [ ] Nice ligatures (including discretionary)
- [ ] Fractions

### Style
- [ ] Does it show off the content?
- [ ] Is it easy and pleasant to read at multiple user font sizes?
- [ ] Does it work in both light and dark modes?
- [ ] Is it suitable for both dense paragraph-heavy copy and more sparse copy like lists?
- [ ] Do I think it's beautiful?
---


[^1]: [Here's](https://sparanoid.com/lab/opentype-features/) a good overview of CSS opentype features.

