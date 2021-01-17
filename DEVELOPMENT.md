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

Because of a Jekyll version lag on GitHub, there's a Python utility in here
too (see "about `order`" below). When the version bumps, the Python script
will be redundant, and will go.


## Adding content

This whole project was set up to make adding and changing the basic content as
lightweight as possible: so, the content itself, as much as possible, is
written in markdown. In order to keep pages on sites like these populated and maintained, the smallest overhead possible is best.

So if this is installed in a GitHub repo, just editing markdown prose (and
maybe a setting or two for new pages) is enough: pushing deploys and publishes.

In order to do this — specifically the building of the navigation and on-page
links — whole thing is driven by Jekyll's surprisingly versatile collections.

## Topics and pages are in collections

Look in the `collections` directory.

The site has **topics**. The topics that are _published_ are in `_topics`. Each
markdown file in there contains settings (in fact those files only contain
Jekyll "front-matter").

To **add a new topi**:

* add a markdown file to `_collections/_topics`
* update the `_config.yml`: add the page you've just added  to the
  `collections`, in the `topics` list
* you need to update the order too (see below) — in time this step will
  become redundant

There are some work-in-progress topics: they are in `_topics_pending` so that
they don't get displayed on the live site. You can move files out of there into
`_topics` while you are working.

## How to add a new topic page

For example to make a page about _Shaving Yaks_ in the
_Animals_ topic:

* Find the topic subdirectory in the `collections` directory: it will be
  something like `_animals/`.

* Make a new markdown file: `yak-shaving.md` inside that `_animals`
  subdirectory. The filename you choose will be in the (public, obviously) URL.

* Make sure that file has this _front matter_ at the very top of the file,
  including the triple-hyphens, otherwise it will not be processed by Jekyll:
    ```yaml
    ---
    title: Shaving yaks
    layout: topic
    ---
    ```
  The title will appear as the link text on the site (as well as the page title
  and heading).

* You also need an `order` number in there (for old versions of Jekyll, but see
  the last step in this list for how to do that).

* Look in other topic pages to see how the markdown and writing style used so
  far. Remember to _always_ use `{{site.baseurl}}` as the prefix on all
  superbasic URLs (even if it works for you on `localhost:4000` without it, it
  won't up on GitHub pages because that's not running in the root of the
  webserver).

* Edit `_config.yml`: inside the `collections`, find `animals` and go to the
  `order:` list...

* ...add `yak-shaving.md` to the `order:` list in the position you want it to
  appear (i.e., relative to the other topic pages) — Jekyll builds the site
  with prev/next links that implement that order.

* Finally, run the Python script `utils/sortorder.py` (see below) which "fixes"
  your `yak-shaving.md` file's front-matter by putting a correct `order: 123`
  value in there for older versions of Jekyll _inlcuding the one running on
  GitHub_ at time of writing.


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
`_sass/layout.scss` with the narrow-screen layout in `responsive.scss` (which
implements the "hamburger" menu).


## Work in progress

This is a work in progress (2020).
