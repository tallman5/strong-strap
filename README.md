# strong-strap
**This is still a work in progress**

strong-strap uses TS/TSX files for strongly typing most of the styling, based on Bootstrap. It is built mainly for use in a Gatsby project, however should work for typical React sites.

## Why
Typical Gatsby sites will compile all the CSS into the page header. Normally this isn't a problem. However, this may be less than desirable on some sites with not a lot of content or basic styling.

## Installation
Currently, strong-strap does not have an avaialble NPM package (coming soon?). strong-strap does have one dependency, react-spring, for animations. In order to implement strong-strap:

1. Install react-spring
1. Copy the /src/strong-strap folder
1. Paste the folder in the /src folder of the target project
1. Add `import './src/strong-strap/strong-strap.css'` to the gatsby-browser.ts file
1. Run it!
