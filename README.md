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

Make sure to have **grunt** installed globally.

	npm install -g grunt-cli

Next run `npm install`, followed by `grunt` to get the development server running.

#### Play nice

* remove trailing whitespace from files before save
* don't use non-ascii file names
* run `grunt build` before commit (and make sure there are no errors)

Do all this w/ ease!

	mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
	echo "\n# run grunt build before commit, abort if errors\ngrunt" >> .git/hooks/pre-commit

## License

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at <http://mozilla.org/MPL/2.0/>.
