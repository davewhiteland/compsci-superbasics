---
title: Tab completion
layout: topic
order: 116
---


Although the command line interpreter does not attempt to execute the command
until you have submitted it with ENTER, there are a few keys that have special purpose. One is the tab:

If you start typing a command, and then press TAB, the system will try to 
auto-complete the command it _thinks_ you are typing. If there are choices it might show these to you differently according to the system you're on.

Similarly, if you start to type a filename — this is very common as an argument to a command — you can press TAB and the computer will attempt to auto-complete it for you. If there is ambiguity, this will typically autocomplete up to the last unambiguous character. Then press TAB again to cycle through the options.

In general, unless you are making a new file that doesn't exist yet, you should
_always_ use TAB completion to enter it on the command line. It saves you typing, avoids typos, and confirms that the file is indeed there.

