---

---
# Danny.is Jekyll

[![Netlify Status](https://api.netlify.com/api/v1/badges/591407d0-3299-4d9f-a929-495f4725de39/deploy-status)](https://app.netlify.com/sites/dannyis/deploys)

* The code lives on Github.
* Deployed to Netlify.
* Quick access via [Siteleaf](https://www.siteleaf.com/) or [Forestry.io](forestry.io).
* Database lives on Airtable and is accessed via Netlify lambda functions

## Why?

I kinda want to use ghost and gatsby for this ebcause it's cool and fun. I love the ghost editor for ease of writing. I also kinda want to use Medium because it's easy and most of my articles live there.

But then I realise that in both these cases I'm handing my content off to somewhere else, and paying for something that should be simple and free.

My current website is a sinatra app, and I spend more time updating the dependancies that I do messing with it because it is over-engineered. My current blog is medium and I don't own my content there.

I want the simplest thing imaginable. And that's HTML/CSS. But I also want to enjoy writing articles, which means writing in markdown.

So the solution is a really simple static site generator like Jekyll.

## Principles

### Requirements and challendges

* As few build-time dependencies as possible
* Only Vanilla JS and CSS. Use the latest language features.
* Avoid fallbacks and hacks
* Fully responsive, including for dark mode.
* Fully accessible

## Pages

* Home Page
* About
* Singing
* Articles - proper, actual articles list (tagged article)
* Notes - Articles tagged notes
* Hire Me - Well written page selling my consulting services.
* Reading - Page which loads JSON from airtable. IFTTT pushes Medium recomends and pocket reads into Airtable (rather than my database)
* Now - Redirect to Notion now page
* Uses - Redirect to Notion uses page

## Why Jekyll?

* It's _almost_ plain HTML and CSS. That makes it future-proof.
* It actually generates plain HTML and CSS. Which makes it [web scale](https://www.youtube.com/watch?v=b2F-DItXtZs).
* It's ruby under the hood, which is nice.
* It has few dependancies.