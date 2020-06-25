---
title: Website Redesign Part XX - Images
---

There's not much we can do about images

Jekyll lets you add a class to an element by using curly braces like this:

```markdown
{:.left-bleed}
![Image](/uploads/images.jpg)
```

Which will produce HTML that looks something like this:

```html
<p class="left-bleed">
  <img src="/uploads/images.jpg" alt="I(mage" />
</p>
```

```scss
.essay {
  .full-bleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);

    // For images that are not wide enough to fill the gap
    display: flex;
    justify-content: center;
  }

  .left-bleed {
    margin-left: calc(50% - 50vw);
    display: flex;
    justify-content: flex-end;
  }

  .right-bleed {
    margin-right: calc(50% - 50vw);
    display: flex;
    justify-content: flex-start;
  }
}
```

---

## Examples

### A normal image

Donec feugiat sagittis velit non molestie. Nullam mattis erat eget elit faucibus, ac tincidunt ligula bibendum. Suspendisse potenti. Nunc et aliquet nunc.

![](/uploads/2020-06-24-styleguide.jpg)

### An image at left-bleed

Donec feugiat sagittis velit non molestie. Nullam mattis erat eget elit faucibus, ac tincidunt ligula bibendum. Suspendisse potenti. Nunc et aliquet nunc.

{:.left-bleed}
![](/uploads/2020-06-24-styleguide.jpg)

### An image at right-bleed

Donec feugiat sagittis velit non molestie. Nullam mattis erat eget elit faucibus, ac tincidunt ligula bibendum. Suspendisse potenti. Nunc et aliquet nunc.

{:.right-bleed}
![](/uploads/2020-06-24-styleguide.jpg)

### An image at full-bleed

Donec feugiat sagittis velit non molestie. Nullam mattis erat eget elit faucibus, ac tincidunt ligula bibendum. Suspendisse potenti. Nunc et aliquet nunc.

{:.full-bleed}
![](/uploads/2020-06-24-styleguide.jpg)
