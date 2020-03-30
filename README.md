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

1. The Why & Technical Decisions
1. Stuff to Keep, Principles and Goals
1. A base to start from (CSS)
1. IA, Content map and Conceptual Hierarchy
1. Trypeface choice and setting body copy
1. A type hierarchy
1. A vertical grid (a shitty baseline grid).
1. Inspiration - Examples of stuff I like. Visual shit. No CSS.
1. Defining the Grid
1. Making the Grid (CSS)

## Sitemap

- Home
- About
- Now
- Singing
- Writing
- Books
- Notes
- Hire Me
- Reading - Page which loads JSON from airtable. IFTTT pushes Medium recomends and pocket reads into Airtable (rather than my database)
- Uses - Redirect to Notion uses page
