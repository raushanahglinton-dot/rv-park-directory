# Small RV Parks USA 🏕️

> A directory of RV parks with fewer than 100 sites across the United States.

Live site: **[your-site.vercel.app](https://your-site.vercel.app)**

## What this is

Most RV park directories push the big resorts. This one tracks the other kind — small parks under 100 sites where you can still hear the creek at night. It covers federal, state park, Corps of Engineers, and private campgrounds.

## Current coverage

| State | Parks listed |
|-------|-------------|
| Tennessee | 73 |
| *(add your state)* | — |

## How to add a state

All park data lives in **`data.js`**. Each park is a simple JavaScript object:

```js
{ name:    "Blue Ridge RV Park",
  city:    "Blue Ridge",
  county:  "Fannin",
  state:   "Georgia",          // spelled out, not abbreviated
  region:  "North GA",
  type:    "Private",          // "Federal / NPS" | "State Park" | "Corps of Engineers" | "Private"
  sites:   48,
  hookup:  "Full hookups, 30/50A",
  phone:   "(706) 555-0100",   // "" if unknown
  web:     "blueridgervpark.com", // no https:// prefix; "" if none
  tags:    ["Lake", "Fishing", "Blue Ridge Scenic Railway"]
},
```

Add your entries to the `PARKS` array in `data.js`, save, and push. The site updates automatically — new state tabs, filters, and hero stats populate with no other changes needed.

See [how-to-add.html](how-to-add.html) for the full guide including data sources.

## Data sources

- [Recreation.gov](https://recreation.gov) — all federal and Corps campgrounds
- [AllStays Camp & RV](https://allstays.com) — most complete campground database
- [Campendium](https://campendium.com) — user reviews with site counts
- [The Dyrt](https://thedyrt.com) — good for private parks
- [RV Life](https://campgrounds.rvlife.com) — 488 Tennessee parks reviewed
- State park reservation systems

## File structure

```
index.html       — main directory page
style.css        — design system (forest green + amber)
app.js           — filtering, sorting, rendering
data.js          — all park data (edit this to add states)
vercel.json      — Vercel static site config
how-to-add.html  — guide for contributors
about.html       — about page
```

## Deploy

This is a zero-dependency static site. Deploy anywhere that serves HTML:

**Vercel** (recommended): Connect this repo at [vercel.com/new](https://vercel.com/new). No build step required.

**GitHub Pages**: Settings → Pages → Source: main branch → `/` root.

## License

Data compiled from public sources. Park information may change — always verify before visiting.
