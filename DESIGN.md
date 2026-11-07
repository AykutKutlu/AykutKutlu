---
name: Kutvoks
description: Existing Kutvoks identity applied to an equal two-app Android showcase.
colors:
  ink: "#13283f"
  ink-soft: "#4b5d72"
  ink-faint: "#566980"
  bg: "#f5f7fb"
  surface: "#fff"
  surface-blue: "#eaf0fc"
  line: "#dbe3ed"
  blue: "#1857df"
  blue-deep: "#123eab"
  navy: "#102f59"
  orange: "#ffac61"
typography:
  display:
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif'
    fontSize: "clamp(44px, 5.2vw, 70px)"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-.04em"
  headline:
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif'
    fontSize: "clamp(30px, 3.4vw, 46px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.035em"
  body:
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  chip: "8px"
  button: "12px"
  control: "14px"
  video: "16px"
  screen: "20px"
  contact: "22px"
  exhibit: "24px"
  hero-art: "26px"
spacing:
  feature-gap: "8px"
  action-gap: "20px"
  mobile-gutter: "22px"
  gutter: "32px"
  section: "88px"
  mobile-section: "58px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
  button-text:
    textColor: "{colors.ink}"
    rounded: "2px"
    padding: "13px 4px"
  navigation-link:
    textColor: "{colors.ink-soft}"
    padding: "12px 0"
  journey-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    rounded: "10px"
    padding: "10px 28px"
  feature-chip:
    backgroundColor: "{colors.surface-blue}"
    textColor: "#254986"
    rounded: "{rounded.chip}"
    padding: "7px 12px"
---

# Design System: Kutvoks

## Overview

Kutvoks uses its established navy, blue and orange identity to make two Android applications clear, equally important choices. Space Grotesk is deliberately retained with the existing logo, app icons and OPS mascot. This is an extraction of the built site, not a replacement identity or a new visual concept.

The home page leads with a task-oriented introduction and two equally sized product exhibits. Product pages share a readable catalogue structure, explicit usage tables and real supporting media. The OPS mascot is a brand character; Bütçe Takip imagery is actual application imagery. Their different treatments preserve each product's identity without changing their equal standing.

**Key Characteristics:**

- Equal product emphasis with distinct, authentic imagery.
- Large, compact headings above readable, limited-width prose.
- Light surfaces, navy media areas and blue actions.
- Visible content by default, enhanced with small accessible controls.

Implementation provenance: code-first direction seed `a935e462`; no approved image comp. Source authority is `styles.css`, the home page body contract, `ops.html`, `butce-takip.html` and `lang.js`. Product claims remain governed by `PRODUCT.md`; this file specifies visual behavior.

## Colors

### Primary

Blue identifies primary actions, links, numbered steps and active section navigation. Deep blue is the primary button's hover state. Navy anchors OPS artwork, selected controls, video sections and table headers.

### Secondary

Orange belongs to the retained mascot/brand assets and the focus outline for links inside the dark home video section. It is not the site's default CTA background.

### Neutral

Ink supplies headings and body text; soft ink supplies descriptions and navigation; faint ink supplies supporting notes. The cool background, white surface and pale blue surface separate sections. Thin line-colored dividers organize content without turning every feature into a card.

**The Existing Identity Rule.** Preserve Kutvoks's supplied logo, icons, mascot and deliberate Space Grotesk typography when extending the site.

## Typography

The display and body family is Space Grotesk, with Segoe UI and sans-serif fallbacks. The font is shared across marketing copy, navigation and controls rather than paired with an unrelated display face.

Home display typography uses the frontmatter scale on wide screens. Product hero headings use a separate responsive scale (`clamp(38px,4.4vw,60px)`, line height 1.08). Headings have balanced wrapping and tight tracking. Default body copy uses the browser's normal 16px base and a 1.65 line height; paragraphs are limited to 70 characters. Hero supporting copy is larger, with a 1.75 line height and a narrower measure.

Section titles use the headline role. Common item titles use the title role, with intentional local variations for story headings, FAQ summaries and media captions. Small metadata stays subordinate, generally 11–14px. Do not enlarge source-version notes into promotional claims.

## Layout

The centered wrapper is at most 1240px wide including its gutters. Desktop gutters are 32px; sections generally have 88px vertical padding. The home hero uses a 1.08:1 text-to-exhibit grid with a 44px gap. Its exhibit area remains two equal columns; Bütçe's slight vertical offset adds rhythm without reducing its allocated width.

Product stories and feature catalogues use heading/identity columns beside detailed copy, divided by horizontal rules. Three numbered onboarding steps form a desktop row. The product detail hero uses a 1.2:0.8 split; the main home hero stacks earlier than the product detail hero.

Responsive behavior is explicit:

- At 1050px and below, home videos stack into one column; the portrait video is centered and capped at 330px. Hero gaps and exhibits become more compact. Video grid tracks have zero minimums, cards have a zero minimum width, and captions wrap to contain intermediate widths.
- At 850px and below, the home hero stacks copy above the two exhibits. The exhibits remain side by side in a centered area up to 550px wide. Product stories and the about section stack; product detail heroes and catalogues still retain two columns.
- At 620px and below, gutters become 22px and section padding becomes 58px. Navigation wraps into a permanently visible second row, rather than hiding behind a menu. Product heroes, feature catalogues, onboarding steps and privacy layouts become one column. The two home exhibits remain equal columns.
- At 360px and below, gutters become 16px, heading and exhibit details tighten, and story actions stack.

The header is sticky (88px desktop, 110px mobile minimum height). Product subnavigation sticks below it and scrolls horizontally when needed. Anchor offsets account for sticky navigation; the page uses 160px scroll padding, rising to 188px on mobile.

Home landscape/portrait media use 16:9 and 9:16 frames. Product galleries retain their media proportions. Full-size budget screenshots are linked rather than stretched into artificial product mockups.

## Elevation & Depth

Depth comes primarily from flat, contrasting section surfaces and fine dividers. The shared shadow (`0 14px 38px rgb(16 47 89 / 10%)`) is used on budget screenshot frames. It is not a universal card shadow. Navy artwork panels, clipped media and the dark phone-frame borders provide additional separation.

Buttons rise 2px on hover over a 0.2s transition; product exhibits rise 7px over 0.3s. Reduced-motion preferences remove transitions and animation and disable smooth scrolling.

## Shapes

Shapes are gently rounded and functional. Controls use modest corners, while exhibit and hero artwork panels use larger corners. App icons keep their own rounded frames. Video frames clip to their rounded boundary; budget screenshots use dark phone-like borders. Feature rows remain open and rule-separated rather than nested inside rounded containers.

The CSS root also defines a generic 20px radius; implemented components commonly use the explicit radii recorded in the frontmatter rather than referencing that variable.

## Components

**Actions.** Primary links are blue rounded buttons with white text, a 48px minimum height and a darker hover. Text actions remain visibly underlined, with a 2px corner radius and compact horizontal padding. Navigation links become blue and underlined on hover.

**Product exhibits.** Equal-sized, fully linked exhibits route to the product pages. OPS uses a navy field with the genuine mascot; Bütçe uses a pale field with a real screenshot. Preserve their distinct imagery and equal area.

**Journey selector.** Without JavaScript both onboarding panels remain readable, while the selector is hidden. Enhancement reveals the selector, initially selects OPS, and hides the other panel with the native hidden attribute. Selection is exposed with `aria-pressed`; Left/Right arrows move focus and selection between the two buttons. Navy and white indicate selection. This is a button group, not an ARIA tab widget.

**Language selector.** The home page supports TR/EN copy, a navy selected state and `aria-pressed`. A stored language preference is optional; static Turkish content remains readable if enhancement is unavailable. Product detail pages retain their supplied Turkish content.

**Feature catalogue and chips.** Detailed feature entries are readable heading-and-copy rows with lists and quieter note surfaces. Small wrapped chips summarize capabilities. Budget chips have a restrained purple tint already present in the code. Anchor chips gain a pale blue hover fill.

**Usage tables.** Native tables have captions, scoped column/row headers, navy header rows and fine horizontal dividers. Their labeled wrapper can scroll horizontally and receive keyboard focus.

**FAQ.** Native details/summary elements provide disclosure behavior. The trailing plus becomes a minus while open. Answers use softer body text and remain in normal document flow.

**Focus and visibility.** Links, buttons, summaries and focusable regions receive a 3px blue outline with a 5px offset. Home video links use orange outlines on navy. The skip link becomes visible on focus. Content does not depend on scroll-reveal animation or intersection observation for visibility; the observer only enhances active product subnavigation with `aria-current="location"`.

**The Visible Content Rule.** Keep essential copy, product routes and supporting evidence available before JavaScript runs.

## Do's and Don'ts

- Do give OPS and Bütçe Takip equal visual importance.
- Do retain the existing brand assets, palette and Space Grotesk.
- Do use real screenshots and label mascot art as brand imagery.
- Do preserve visible keyboard focus and the static-content fallback.
- Do retain readable limitations and usage notes alongside feature descriptions.
- Don't present mascot art as an application screenshot.
- Don't make content visibility depend on reveal scripts.
- Don't invent product features or guarantee outcomes through design copy.
- Don't apply the screenshot shadow to every surface.

