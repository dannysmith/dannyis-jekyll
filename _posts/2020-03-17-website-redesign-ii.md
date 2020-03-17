---
title: Website Redesign Part II: A Blank Canvas?
---

Until now, every time I've redesigned this website it's been because I didn't like how it looked. Every few years, I look at it and feel like it doesn't adequately represent me.

When I started this process, I fully expected to feel the same this time. But having spent a bunch of time staring at it, I think I still like it. 

More accurately, I still really like these two pages...

![](/uploads/2020-03-17-dasmith1)
![](/uploads/2020-03-17-dasmith2)

When I designed them back in 2016 I was going for a modern "Swiss" influenced kinda vibe. I think I want to keep that.

Before I start writing CSS, it makes sense to think about the values for this project and how they might guide my approach to design.

As a reminder, here are the values I'm using to guide this project:

* Simple
* Beautiful
* Authentic
* Content-first

Looking at the two pages above with these in mind...

1. They *are* simple. ✅
2. They put the content first – even though there is hardly any of it. ✅
2. I think the 404 page is beautiful. I love how the colour, type and layout interact. ✅
3. The homepage is less beautiful. Futura looks pretty bad at very large sizes and the whole thing feels slightly unpolished somehow. It lacks attention to the little details.
4. Futura is a lazy choice of typeface - I use it everywhere.
5. The 404 page feels like an authentic representation of me[^1]. The homepage less so. This might have more to do with the content than the deign. I talk **a lot** and am generally friendly, and it feels a bit too minimalist and impersonal. It's somehow not goofy enough, where the 404 page is. I feel like the colour palette makes up for this a bit by being very warm.
6. I'm going for a "swiss" vibe but there's no grid. I'm a massive nerd for orderly systems and grids, so this feels both inauthentic and like a missed opportunity to create some beauty through mathematics.

A few other things also spring to mind:

* Since I'm writing on this site now, there will be a lot more written content. **Content-first** means I should probably start with that.
* **Simplicity** means I should probably ignore layout and start by making the written content as beautiful and readable as I can.

I'll come back to these observations in future articles but at this point my gut says I should start with the content-heavy stuff:

1. **Article Typography**. Because _content-first_. The UI type can wait.
2. **Article Layout**. This probably means some sort of baseline grid. But _simplicity_ says I shouldn't overcomplicate it.
3. **Article Features**. Things like inline styles, code blocks, photos, callouts and the like.


## A blank slate to work from

I'm trying to keep the CSS as minimal as possible here, but I do want a decent blank slate to work from. So I've normalised browser styles with [normalize.css](https://necolas.github.io/normalize.css/) and set up some of my own base styles. I'm sure these will change over time, but here they are for now...

<script src="https://gist.github.com/dannysmith/980e1f6b4c9e44ae39c563a15a5a84a9.js"></script>

## A starting point for article typography

Taking a [leaf out of Frank Chimero's book](https://frankchimero.com/blog/2020/redesign-this-design/), I'm starting with a very very simple set of styles for my articles:


```scss
article > * {
  font-family: var(--font-copy);
  line-height: 1.5;
  max-width: 33rem;
  margin-left: auto;
  margin-right: auto;
}
```

Until I choose a better typeface, `--font-copy` is Georgia. Like Frank, I still like it too.


[^1]: Yes I know, "Not Found". 🙃