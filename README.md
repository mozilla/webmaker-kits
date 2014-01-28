## Simpler Webmaker Kits
<https://bugzilla.mozilla.org/show_bug.cgi?id=962509>

 * Reduce CSS into a single <link> tag by consolidating into a single file
	 * Even a main, and then including the rest w/ @imports
 * Remove HTML adding visual flare, and move it into the CSS
	 * e.g. vertical lines for the agenda blocks
 * Make blocks more resuable by having stying them with class selectors not IDs.
 * Simplify and reduce code for layout
	 * Rely more on heading level than section tags, make use of HTML5 tags like <header> and <main>

**Idea:** minimise the amount HTML needed to create a Teaching Kit, thus reducing the time it takes to create.
