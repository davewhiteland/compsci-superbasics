# Working on CompSci Superbasics


## To run on GitHub pages

This is a
[GitHub Pages-friendly Jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll)
site. That means if you fork or clone it on GitHub, and switch the "GitHub
Pages" setting **on**, it will appear online as a published site. If you change
the content, and push it up to the repo, the site changes.

## To run locally

For local development or testing, you need [Jekyll](https://jekyllrb.com)

Jekyll has some dependencies (Ruby and friends). Try it. It can just work, in
which case it's great. But like all "it just work"s, if it doesn't just work
it can be a royal pain (voice of experience). Good luck.

## Adding content

This whole project was set up to make adding and changing the basic content as
lightweight as possible: so, the content itself, as much as possible, with
markdown. In order to get pages on sites like these populated and maintained,
the smallest overhead possible is best.

So if this is installed in a repo, just editing markdown prose (and maybe a
setting or two for new pages) is enough: pushing deploys and publishes.

In order to do this — specifically the building of the navigation and on-page
links — whole thing is driven by Jekyll's surprisingly versatile collections.

## Sections are in collections

See the `collections` directory: each section of the site is in there.

The site has **topics**. The topics that are _published_ are in `_topics`. Each
markdown file in there contains settings (in fact the files only contain Jekyll
"front-matter").

To **add a new topi**:

* add a markdown file to `_collections/_topics` and 

There are some work-in-progress topics: they are in `_topics_pending` so that
they don't get displayed on the live site. You can move files out of there into
`_topics` while you are working.

To **add a new page** to `some-section`:

* add a markdown (`.md`) file to the `collections/_some-section` folder
* make sure it has the _right position_ relative to the other pages: that means
  adding it to the right place in `_config.yml` too... and also setting an
  `order` (see below).

## About `order`

The order in which the topics and their pages appear matters, because the
previous and next links are based on that.

The _latest version_ of Jekyll respects the order of the list that appears in
`order:` sections of the `_config.yml` file — so make sure you keep that how
you want it.

Unfortunately, at time of development, the Jekyll up on GitHub wasn't running
that version, which is why there are _also_ `order:` values in the front-matter
of each page. That's a pain because if you need to change any orders you might
have to change a bunch of numbers (and equal numbers are... wrong).

In fact it's such a pain, use the `utils/sortorder.py` utility to fix that all
for you. It reads the order from the `_config.yml` and updates all the
individual pages for you.

The `order:` numbers three-digits for neatness, but of course the number
doesn't matter, it's the order of the numbers you care about.

>  It's probably a good idea to use the `sortorder.py` utility, because if you
>  don't, the `order:` values in the files will get out of synch with the
>  (definitive, ideally) order in the config.


## Changing styling

There are a few settings you might want to fiddle with in `css/main.scss`.

Jekyll watches the stylesheets in the `_sass` directory, and rebuilds the CSS
if you change it. This project's custom styling is pretty much all in
`_sass/layout.css`.


## Work in progress

This is a work in progress (2020).
