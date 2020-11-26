# CompSci Superbasics

If nobody has told you, it's not obvious that the tab key autocompletes on the
command line... or even how to get there.

Most people's experience of computing today is through user interfaces that —
for convenience — conceal a lot of the underlying tech. It's possible to be
using sophisticated apps on tablets today without ever interacting with a file
system.

So this is a collection of "superbasics" for students to discover some of the
the really low-level things nobody told them about.

* learn shortcuts!
* use tab completion!
* never put spaces in your filenames!

:-)

And yes I've seen CompSci professors on Macs bouncing on the left-arrow key
because they didn't know about the Alt-click position-on-command-line trick in
Terminal ;-)

## About

This Jekyll website came about in response to beginner computer science
students arriving with little or no experience of using their computers on a
system level. Some come to college already having hacked their own distro of
Ubuntu, but others might never typed a command in their lives. That's OK: you
didn't need to. Until now.

Specifically, using browser-based learning means some competent autodidacts have
learned to program entirely on the web (I'm looking at you 
[codeskulptor](https://py3.codeskulptor.org)). Nothing wrong with this — on the
contrary, it's amazing — but it means assumptions colleges make about students'
tech exposure are much less reliable than they used to be.

## Jekyll, based on block-blog theme

> See DEVELOPMENT.md if you're going to be doing any work — there's a gotcha
> on the way the topics and pages are ordered.

The site uses Jekyll's containers to manage a collection of topic-pages that
are previous-next linked together.

See `_config.yml`'s `collections` — if you add a new page, add it to the
`order` in there: the navigation links are constructed from those.

Add new topics to the `topics` collection.

The theme is based on the
[block-log theme](https://jekyllthemes.io/theme/block-log)
by [Anandu B Ajith](https://github.com/anandubajith)

##

Work-in-Progress for 2020 — RHUL