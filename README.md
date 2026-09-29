# Pee Poo Bark

Live, laugh, love, as told by a dog. The website for Pee Poo Bark dog bandanas.

## What's in here

| File / folder | What it is |
|---|---|
| `index.html` | The page itself: all the words you see on the site |
| `site.css` | Colours, sizes and layout |
| `assets/` | Your lettering (cut out of your artwork) and the font |
| `scrollcraft/` | The scroll engine from [nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft) (MIT licence), used for the gentle fade-ins. Don't edit it |
| `design/` | The design brief and reasoning behind the page |

## Look at it on your own computer

Double-click `index.html` and it opens in your browser. That's it, no install.

## Things to change

The "Save me a bandana" button emails gmharrison@hotmail.com. To change it,
search `index.html` for `mailto:`.

1. **The bandana drawing.** Once you have photos of your dogs wearing the
   bandanas, those should replace the drawing in the middle section of `index.html`.

## Putting it online (GitHub Pages + peepoobark.ca)

The site is hosted free by GitHub Pages. The `CNAME` file tells GitHub the
site's address is `peepoobark.ca`.

**1. Turn on GitHub Pages.** In this repository on GitHub, go to
**Settings → Pages**. Under "Build and deployment", set **Source** to
"Deploy from a branch", pick the `main` branch and the `/ (root)` folder, then
**Save**.

**2. Point peepoobark.ca at GitHub.** Log in where you bought the domain and
open its **DNS settings**. Remove any existing `A` records for `@` (the bare
domain), then add:

| Type | Name / Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | gharriso83.github.io |

If there is an existing "domain forwarding" or "parked page" setting on
peepoobark.ca, turn it off, or it will fight with these records.

**3. Tell GitHub the domain.** Back in **Settings → Pages**, type
`peepoobark.ca` in **Custom domain** and **Save**. DNS changes can take from a
few minutes to a day. When GitHub says the DNS check passed, tick
**Enforce HTTPS** (it may take up to an hour to become clickable).

**4. peepoobark.com.** Leave its forwarding to peepoobark.ca as it is.

**Optional but recommended:** in your GitHub account (profile picture →
**Settings → Pages**), add and verify `peepoobark.ca`. This stops anyone else
on GitHub from claiming your domain.
