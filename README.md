---
---

# Danny.is Jekyll

[![Netlify Status](https://api.netlify.com/api/v1/badges/591407d0-3299-4d9f-a929-495f4725de39/deploy-status)](https://app.netlify.com/sites/dannyis/deploys)

## Install and Run

```shell
brew install imagemagick
bundle install

bundle exec jekyll serve --drafts --livereload
```

## Values

- Simple
- Beautiful
- Authenntic
- Content-first

## Site/User Goals

- **Danny**
  - Express himself freely and without constraint.
  - Have fun. With writing, design and code.
  - Connect with people he can help, or who can help him.
- **Interested reader**
  - Read Danny's words in peace.
  - (Perhaps) be notified when Danny writes some new words.
- **Person checking Danny out**
  - Find out if Danny is the right person to help them.
  - Contact him.

## Redesign Goals

- I want a simpler, more technology-agnostic website.
- I want to write on my own website, not on Medium.

1. Represent myself more authentically.
2. Simplify my own mental model for who I am and what I do, as expressed through this site.
3. Make things more obvious and useful to readers.
4. Put my writing at the front, and make it beautiful.
5. Provide somewhere for folks to find out about my work, and how I might be able help them.

## Engineering Principles

1. As few dependencies as possible (both build-time and run-time).
2. Use defaults wherever possible.
3. Write as little code as possible.
4. Do not over-abstract. Avoid fallbacks, polyfills and hacks.
5. Bake accessibility in.

## Tools

- The code lives on Github.
- Deployed to Netlify.
- Quick access via [Forestry.io](forestry.io).
- Database lives on Airtable and is accessed via Netlify lambda functions

## Documentation

This documentation is mainly for my own use. It;s too easy to forget the conventions if I don't touch this for a while.

### Writing essays

Use Jekyll's `_drafts` folder. You can write in either markdown or HTML, though markdown is preferred. When a post is ready to publish, update the filename with the publication date and move it to `_posts`. No frontmatter is required, though it's recommended you always supply a `title`.

To keep posts looking nice, stick to the following rules:

1. Always begin with a longish paragraph, and avoid formatting in the first line where possible.
1. Always end with a summary paragraph.
1. Wrap all acronyms in `<abbr>` tags - providing a title is optional.
1. Always provide alt text for images.

#### Images

Images should be named in the form `YYY-MM-DD-title.ext` and added to `_uploads`. Do not use subfolders. There is a github app to optimize the images via PR.

The following layout classes are provided for use with images, though they can be used with any block content:

| Tag               | Desscription                                                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `{:.full-bleed}`  | The image will bleed out to the edges of the screen                                                                                    |
| `{:.left-bleed}`  | The image will bleed out to the left                                                                                                   |
| `{:.right-bleed}` | The image will bleed out to the right.                                                                                                 |
| `{:.border}`      | The image will be rendered with a border and internal pading. Good for images with a background similar to the site background colour. |

The bleed classes should always be applied to a paragraph wrapping the image, like this:

```markdown
{:.full-bleed}
![Example](/uploads/example.png)
```

The bordr can be applied to either the wrapper or the element itself. To combine a bleed and border, apply the border to the image:

```markdown
{:.full-bleed}
![Example](/uploads/example.png){:.border}
```

#### Code blocks

Prefer gists for longer code samples, and always specify a language when writing fenced code blocks.

#### Callouts

Callouts can be added like this

```md
{:.callout}
This is a callout
```

### Adding Externally hosted essays

Create a new markdown file in `/posts` with the publication date in the file name. Add three fields to the frontmatter: title, rediirect_to and platform.

```yaml
title: Business Process and Tooling
redirect_to: 'https://medium.com/@dannysmith/business-process-tooling-56f1e3341d21'
platform: medium
```

The post will be rendered as normal in lists but will redirect to the URL provided. The `platform` field us used to style external links differently. Any single-word string is valid but `medium`, `devto` recieve special styling.

### Adding new pages and redirects

Create a new page in `_pages`. Any pages in this folder will be mapped to the root of the site.

You can create redirects in the same way as for posts above. To redirect https://danny.is/google to https://google.com, greate a file named `google.md` in `_pages` with one line of frontmatter: `redirect_to: https://google.com`.

If you are creating a page for the site, prefer HTML over markdown in most cases. If we're creating a "fishing" page...

1. Create `fishing.html` in `_pages`.
1. Add a title and `body-class: page-fishing` to the frontmatter. The `body-class` will be applied as a class to the `<body>` element so we can style the page.
1. Create a `page-fishing.scss` file in `_sass` and include it in `main.scss`.
1. Write your page-specific styles nested in a `.page-fishing` selector.

If you apply a `body-class` of `no-drop-cap` to an essay, a drop cap won't be used. This is useful for essays with very short first paragraphs.

Danny Smith
