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

Make sure to have **less** and **grunt** installed globally.

	npm install -g less grunt-cli

Next run `npm install` to get all the needs of grunt (and the lightweight testing server).

When you're ready to rock and roll you can start the server with `node server.js` and compile the less files with `grunt watch`

## License

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at <http://mozilla.org/MPL/2.0/>.
