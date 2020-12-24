---
title: What if that's not a command?
layout: topic
order: 109
---

What happens if you type a command your computer doesn't know?

It looks to see if it can find a program to run with that name. But it doesn't
look _everywhere_: it has a list of all the directories (or folders) to check.
It goes through that list, checking each place. If it finds a program with that
name, it runs it. Otherwise, it looks in the next directory on its list.

If it gets to the end of the list and hasn't found a match, it gives up: there
is no command or program to run. It will tell you why it didn't obey the
command you gave it (the actual words depend on which command line interpreter
you are running), but will usually look something like this:

    banana: command not found
    
or

    The term 'banana' is not recognized as
    the name of a cmdlet, function, script,
    file, or operable program.

On most systems, you can use
[tab completion]({{ site.baseurl }}/command-line/tab-completion)
to know _before you press enter_
if the command exists.

