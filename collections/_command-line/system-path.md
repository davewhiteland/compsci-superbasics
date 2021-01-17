---
title: The system path
layout: topic
order: 111
---


The list of directories your command interpreter works along, looking for the
program whose name you've typed, is called the _system path_, and often just
"the path".

When you install a new program, the installation process will either put it in
a directory that is already on the system path, or — if it makes a new
directory — add the new directory to the path.

You can inspect and modify the system path on your own machine.

For example, to see the system path on Unix, do:

    echo $PATH

In general, the system takes care of the path for you, so normally you don't
need to look at it. But it matters when you are having problems running a
command (or perhaps being sure _which_ version of a command you are running).
