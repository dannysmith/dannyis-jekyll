---
---

# Danny.is Jekyll

[![Netlify Status](https://api.netlify.com/api/v1/badges/591407d0-3299-4d9f-a929-495f4725de39/deploy-status)](https://app.netlify.com/sites/dannyis/deploys)

## Run

```shell
bundle exec jekyll serve --drafts
npx browser-sync start --files "scss/*.scss" --proxy "localhost:4000" --files "_posts/*.*" --files "_drafts/*.*" --files "_pages/*.*" --reloadDelay "2000" --no-open --no-notify
```

## Values

- Simple
- Beautiful
- Authenntic
- Content-first

## Tools

- The code lives on Github.
- Deployed to Netlify.
- Quick access via [Forestry.io](forestry.io).
- Database lives on Airtable and is accessed via Netlify lambda functions

## Article Series

The goal is to just write up my process, so don't be bound by this.

1. The Why & Technical Decisions
1. Stuff to Keep, Principles and Goals
1. A base to start from (CSS)
1. IA, Content map and Conceptual Hierarchy
1. Trypeface choice and setting body copy
1. A type hierarchy
1. A vertical grid (a shitty baseline grid).
1. Styling With Simplicity (making it look nice with no design: homepage, "redesign banner", etc)
1. Inspiration - Examples of stuff I like. Visual shit. No CSS.
1. Defining the Grid (Sketch, not CSS)
1. Making the Grid (CSS)

### Future Ideas

Be even less bound by these. Do what's fun and write about it.

* Dark Mode
* Reading time calculation (plugin?)
* Share data (images/metadata when embedded in places)
* Quotes, immages, callouts etc
* Code blocks
* Fancy in-article image layout

## Sitemap

- Home
- About
- Now
- Singing
- Writing
- Books
- Notes (Not sure how to do this yet. Perhaps a seperate collection?)
- Hire Me
- Reading - Page which loads JSON from airtable. IFTTT pushes Medium recomends and pocket reads into Airtable (rather than my database)
- Uses - Redirect to Notion uses page
