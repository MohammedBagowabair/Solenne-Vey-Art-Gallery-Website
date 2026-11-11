# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and vanilla JavaScript. No framework, no heavy library, no build step. Files live at the repository root so GitHub Pages can serve the `main` branch from `/`.

Confirmed by the request. Not delegated.

## Users

Primary visitors are people looking at a fictional artist's work and asking about a specific piece. Their job is to scan the hang, filter it, open a work, and send a WhatsApp inquiry.

Secondary audience: gallery and artist prospects evaluating this repository as a sellable demo they could commission for a real practice. Their job is to judge whether the page feels like a serious gallery site and whether the inquiry path is obvious.

Assumption, labeled: both audiences use a phone or a laptop in ordinary daylight. Nothing in the request describes a native app or a logged-in workflow.

## Product Purpose

A hosted demo landing page for the fictional artist Solenne Vey. It exists to show prospects a complete artist/gallery site: a striking first view, a filterable hang, a keyboard-accessible lightbox, fictional studio context, and WhatsApp as the only inquiry channel.

Success means the live GitHub Pages URL loads, every inquiry link uses the confirmed WhatsApp number, images are local and credited, and the page stays usable from a 360px-wide screen upward.

## Positioning

The page is a portfolio people can inquire from, not a shop. Each work can open a pre-written WhatsApp message that names that exact piece. There is no price, cart, checkout, or payment.

## Operating Context

Public GitHub Pages site at `https://mohammedbagowabair.github.io/Solenne-Vey-Art-Gallery-Website/`. Prospects open that URL. Visitors inquire on WhatsApp. Studio visits, exhibitions, and the biography are demonstration copy and must stay visibly fictional.

## Capabilities and Constraints

- Sections required: hero, filterable gallery, lightbox, about, exhibitions/process, contact.
- Gallery filters include series or medium (Paintings, Works on Paper, Mixed Media) and availability (Sold, Available).
- Lightbox: previous, next, Escape, and focus moved into the dialog and returned on close.
- Nine to twelve works. Each has a fictional title, medium, dimensions, and year. Availability is shown. The price line is always "Price on request".
- Artwork images are royalty-free files stored in the repo (Unsplash, Pexels, or similar), optimized WebP, with width, height, lazy loading, and srcset where it helps. A credits note lists sources.
- Every artwork card and the lightbox include "Inquire on WhatsApp". A general WhatsApp control sits in the hero and the contact section. A floating WhatsApp control stays available.
- WhatsApp number, confirmed: +967 783 964 784. Every link is `https://wa.me/967783964784?text=...`. No other WhatsApp number is used.
- Piece inquiry text names that work, for example: Hi, I'm interested in 'Title' (medium, year) by Solenne Vey. Is it available?
- No payments, cart, or checkout.
- Responsive from 360px with no horizontal scrolling.
- Performance and SEO Lighthouse targets: 90 or above.
- Required metadata: document title, meta description, Open Graph tags, an Open Graph image, alt text on every image, semantic HTML, an SVG favicon, visible focus, and contrast that stays readable.
- Motion may include a hero moment, scroll reveals, and hover, and must honor `prefers-reduced-motion`.
- Footer states that this is a demo and that the artist is fictional.
- Design constraints named in the request: editorial typography, strong contrast, asymmetric layout, generous whitespace, tasteful motion. Not a generic template.

## Brand Commitments

The artist name is Solenne Vey, a fictional contemporary painter and mixed-media artist. The practice may be refined in the copy as long as it stays clearly fictional. No real person's likeness may be presented as the artist. No prices. The demo disclaimer stays in the footer.

Visual constraints the request made binding: editorial typography, strong contrast, asymmetric layout, generous whitespace, and motion that respects reduced-motion settings. Palette and typefaces were not specified.

## Evidence on Hand

Repository started as a one-line README. No photography, logo, or prior page was supplied. Artwork images must be downloaded from reusable stock sources and credited. Exhibition history, biography, studio location, and work titles are authored as fiction and labeled as such on the page.

Do not invent prices, sales counts, press quotes from real publications, or a claim that a real gallery represents her.

## Product Principles

- The work leads. Interface chrome stays quieter than the hang.
- Inquiry is one action, on WhatsApp, and it always names the piece when a piece is in view.
- Fiction is labeled. A prospect should never wonder whether Solenne Vey is a real client.
- The page is a static file site. Anything that needs a build step or a paid font host does not ship.
- Availability is honest inside the fiction: sold works stay visible and are marked sold.

## Accessibility & Inclusion

Semantic HTML, text alternatives, keyboard use of the lightbox and filters, visible focus, and a reduced-motion path are required by the request. Body text and interface labels need accessible contrast. The page is in English.
