---
title: Why use the command line?
layout: topic
order: 103
---

Graphical user interfaces (GUIs) exist because they make interacting with the
computer (and specifically the operating system) simple. It's easy to click
and double-click on icons or pick things from menus! 

But that convenience also blunts its power. When you study Computer Science,
using the command line is a crucial skill... because (once you know how to use
it) it's much more powerful.

* Using the command line can be faster, especially for complex operations.

* You are being very explicit when you use it, so you need to know what
  you're doing... and if you don't (yet) it's an explicit way to learn.
  
* Commands themselves are scriptable (you can put them in a file and replay
  them), so are ideal for automation.

* Similarly, you can issue commands from within other programs you write (for
  example, in Python you can use the `os.system()` function).

* Commands can be chained together so output from one can be "piped" to the
  next.

* You can control (redirect) the inputs and outputs, which is very handy for
  capturing output into [files]({{site.baseurl}}/files/contents/), which you
  can then use as input to other commands.

* Some commands give you a lot of power to control
  [options]({{ site.baseurl}}/command-line/options/), which can quickly get
  fiddly with GUIs.

* Most GUIs don't make your history available; the command line has good
  [previous command recall]({{ site.baseurl}}/command-line/previous-command/).

* Sometimes you don't have access to a GUI on a remote server, so you _only_
  have the command line available.


If you're studying Computer Science you _must_ understand how the command line
works: it's possibly the primary way you communicate with the computer. The GUI
is a layer on top of that (of course you will be familiar with that too).

You can drive most computers from the command line. We tend to focus on the
Unix-like systems (that includes the Mac's command line, and the Windows
Subsystem for Linux) because they have a long history of utility, predating
GUIs entirely. Window's own command line is a little bit different, but the
underlying ideas are similar.

