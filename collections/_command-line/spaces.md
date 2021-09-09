---
title: Spaces on the command line
layout: topic
order: 114
---

All the spaces on the command line get squashed (collapsed) into single spaces.
They are not commands themselves, but they serve as separators between
commands.

If you type a few spaces at the prompt, you'll see the cursor move along. (If
there wasn't a cursor, you wouldn't be able to see this happening).

If you type a few spaces, type `pwd` and some more spaces, and then press
enter...

...the `pwd` command runs (it prints the current working directory).

The command line interpreter _collapses_ and _strips_ the spaces, and looks for
the command that is left.

> _Collapsing_ spaces means a run of spaces get squashed down to just one.
> <br>
> _Stripping_ spaces means the spaces at the start and end get removed.

If you just type some spaces on the command line and press enter... nothing
happens. The spaces are being collapsed and stripped to nothing: there's
[no command]({{ site.baseurl }}/command-line/no-command).
 