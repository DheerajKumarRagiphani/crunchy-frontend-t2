# ShopMart – Responsive Product Showcase

## About
A responsive product showcase website built with HTML5 and CSS3, using the existing JavaScript product filtering and delete interactions.

## Features
- ShopMart header and navigation
- Product status filter
- Six product cards
- Responsive mobile-first layout
- Product delete interaction

## Technologies
- HTML5
- CSS3
- Flexbox
- CSS Grid
- CSS Media Queries
- Vanilla JavaScript

## Layout decisions

### Flexbox
Flexbox is used for the header, logo, navigation, filter controls and product-card button row because these are one-dimensional alignment tasks.

### CSS Grid
CSS Grid is used for the product collection because it arranges product cards in rows and columns. The grid uses one column on small screens, two columns from 600px, and three columns from 900px.

## Responsive breakpoints
The stylesheet follows a mobile-first approach and uses three min-width breakpoints:
- 600px: move to a two-column product grid and wider navigation layout.
- 900px: move to a three-column product grid and desktop spacing.
- 1400px: refine spacing and image height for wide desktop screens.

These breakpoints should be checked against the supplied reference design and adjusted if the design breaks at different widths.

## Assets
Keep the existing `Images` folder beside `index.html`, `style.css` and `script.js`. The HTML and JavaScript refer to files inside `Images/`.

## Live website
Add the published GitHub Pages URL here.

## Screenshots
Save the required reference-versus-implementation desktop and mobile comparison screenshots inside `docs/`.
