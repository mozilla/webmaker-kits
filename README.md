# Webmaker Kits
**Idea:** minimise the amount HTML needed to create a Teaching Kit, thus reducing the time it takes to create.

## Usage

1. Decide on whether you're creating a Teaching Kit or Activity
2. Copy + Paste the HTML for your choice from this repository, into <http://thimble.webmaker.org>
3. Change "`dist/`" for the stylesheets + javascript to "`//stuff.webmaker.org/webmaker-kits/v2/`""
4. Hack away!

## Demos

* **Teaching Kit**: <https://mozilla.github.io/webmaker-kits/kit.html>
* **Activity**: <https://mozilla.github.io/webmaker-kits/activity.html>
* **Event Kit**: <https://mozilla.github.io/webmaker-kits/event.html>

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
