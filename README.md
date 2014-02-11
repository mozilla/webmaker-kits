# Simpler Webmaker Kits
<https://bugzilla.mozilla.org/show_bug.cgi?id=962509>

 * Reduce CSS into a single <link> tag by consolidating into a single file
	 * Even a main, and then including the rest w/ @imports
 * Remove HTML adding visual flare, and move it into the CSS
	 * e.g. vertical lines for the agenda blocks
 * Make blocks more resuable by having stying them with class selectors not IDs.
 * Simplify and reduce code for layout
	 * Rely more on heading level than section tags, make use of HTML5 tags like <header> and <main>

**Idea:** minimise the amount HTML needed to create a Teaching Kit, thus reducing the time it takes to create.

## Development

Make sure to have **less** installed globally.

	npm install less --global

This will allow you to run the included less watch compiler (by [Jony Cheung](https://github.com/jonycheung/Dead-Simple-LESS-Watch-Compiler)) and then hack on the `.less` files to modify the kit styles.

	node less-watch.js teach-assets/less teach-assets/css

## License

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at <http://mozilla.org/MPL/2.0/>.
