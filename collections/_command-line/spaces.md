---
title: Spaces on the command line
layout: topic
order: 112
---

All the spaces on the command line get squashed (collapsed) into single spaces. They are not commands themselves, but they server as separators between commands.

If you type a few spaces at the prompt, you'll see the cursor move along. (If there wasn't a cursor, you wouldn't be able to see this happening).

If you type a few spaces, type `pwd` and some more spaces, and then press ENTER...

...the `pwd` command runs (it prints the current working directory, remember?)

The command line interpreter _collapses_ the spaces, and looks for the command that is left.

If you just type some spaces on the command line and press ENTER... nothing happens. The spaces are being collapsed, but there's no command.
 