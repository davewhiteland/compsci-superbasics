---
title: What is it?
layout: topic
order: 101
---


The fundamental way of issuing a command to the the computer is by typing it on
the _command line_.

Interfaces (like point-and-click graphical interfaces, or audio commands, or
even games controllers) bypass the command line because they are more
convenient. But when you study computer science, you go to the machine: you
must get familiar with the command line.

The _commands_ your computer understands vary depending on what kind of
computer it is (of course!) but the fundamentals of commands are the same.

> Specifically, you use the command line to send commands to the operating
> system.

### An example on the command line

This example shows a complex command on the command line:
the [prompt]({{ site.baseurl }}/command-line/prompt), 
[command]({{ site.baseurl }}/command-line/issuing-a-command), 
[options]({{ site.baseurl }}/command-line/options), 
and [arguments]({{ site.baseurl }}/command-line/arguments).
Notice how the parts are _separated_ by spaces.

<object data="{{ site.baseurl }}/images/command-line.svg" type="image/svg+xml"></object>

The `grep` command searches files for patterns. This example will print out all
the lines in _any_ text files (`*.txt`) in the current directory (`notes`) that
contain the word `needle`. The search will be case-insentive (`-i`) and only
full word matches are considered (`-w`) (so "needles" or "needless" won't
match, but "needle" will).
