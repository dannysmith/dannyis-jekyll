---
title: Website Redesign Part VII - Responsive Type
---

# Base font-size

We'll start off by setting the font-size of the HTML element to 100%. This makes sure that `1rem` will always represent the default font-size of the device or browser - usually 16px. We'll use rems and ems to define pretty much every other size in the site, so we'll also set the body `font-size` in rems so it's inherited by other elements.

We also want to reset the heading sizes to `1em`. We'll probably redefine some of these later but I always think it's a good idea to start with one size for _all elements_, since it often makes sense to differentiate headings with weight, style or color rather than size. We're using `ems` rather than `rems` here because we want them to scale if we change the font-size on their container.

```css
html {
  font-size: 100%;
}

body {
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  font-size: 1em;
}
```

# Scaling Type Size

We can use the new CSS `clamp()` function to enable responsive type without the need for a million media queries. This will scale the type from `1rem` (16px) to `1.375rems` (22px). The middle value is calculated using both viewport units and rems: the `vw` causes the type to scale with the viewport width and the rems ensure that user-initiated text resizing still works. I arrived at `0.6rem` after a bit of experimentation.

```css
.essay {
  font-size: clamp(1rem, calc(0.6rem + 1vw), 1.375rem);
  transition: font-size 0.1s;
}
```

# Hyphens

Enabling hyphenation can make a big difference to readability on small screens, where an uneven right rag can cause very short lines. We can set up a SCSS variable for breakpoints and then use a media query to turn hyphenation off for larger viewports.

```scss
$breakpoint-mid: 42em;

.essay > p {
  -webkit-hyphens: auto;
  hyphens: auto;

  @media (min-width: $breakpoint-mid) {
    -webkit-hyphens: none;
    hyphens: none;
  }
}
```

# A quick and dirty baseine grid

Baseline grids and the web don't go particularly well together.

# Styling Headings

- Set a weight
- Set a suitable optical size
- Increase the size difference between body copy and titles as the viewport size increases.
- Reduce the line-hight as headings get bigger.

We'll also turn off styling for any links inside headings.

```scss
h1,
h2,
h3,
h4,
h5 {
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: inherit;
  }
}
```
