---
title: Current directory
layout: topic
order: 114
---

Also known as: "this directory" or "current working directory"

When you are navigating the file system the concept of _which directory you are
in_ is very important, especially when you are working on the
[command line]({{ site.baseurl }}/command-line).

This matters because when you refer to files, by default the computer will
assume you're refering to files relative to where you are.

### Find out which directory you are in

The `pwd` command (pwd is short for "print working directory") tells you
where you are.

    pwd


### Change directory

To change into the directory `foo`, do this:

    cd foo

...but this will only work if the directory `foo` is in the
current directory. If it isn't, you'll need to provide a path to it.

