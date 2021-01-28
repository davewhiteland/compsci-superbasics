---
title: Tab completion
layout: topic
order: 119
---


Although the command line interpreter does not attempt to execute the command
until you have submitted it with enter, there are a few keys that have special
purpose. One is the [tab key]({{ site.baseurl }}/keyboard/tab).

If you start typing a command, and then press tab, the system will try to
auto-complete the command it _thinks_ you are typing. If there are choices it
might show these to you differently according to the system you're on.

Similarly, if you start to type a filename — this is very common as an argument
to a command — you can press tab and the computer will attempt to auto-complete
it for you. If there is ambiguity, this will typically autocomplete up to the
last unambiguous character. Then press tab again to see the choices.

> In general, unless you are making a new file that doesn't exist yet, you
> should _always_ use tab completion to enter its filename on the command line.
> It saves you typing, avoids typos, and confirms that the file is indeed there.

### Autocomplete and ambiguity in more detail

Autocomplete works by looking at what you've typed already, matching it to the
available possibilities, and adding those characters for you.

Sometimes this completes the whole command or filename, because there are no
alternatives. Great!

But sometimes it can only add some of the characters until it gets to a choice.
For example, suppose you have two files: `my-little-pony` and
`my-little-puppy`. If you type `m` then press tab, autocomplete will only give
you `my-little-p`. It can't go further because your intention — based on what
you've typed — is ambiguous: is the next letter `o` or `u`?

When this happens — when tab completion cannot complete because of this
ambiguity — if you press tab again _straight away_, it will show you all the
choices available. Use this information to type enough character or characters
so that the ambiguity no longer applies, and then press tab to continue.

Of course, if there are no possibilities it means you've typed something that
doesn't match _anything_, and tab completion cannot help. But it _does_ help
because it shows you that nothing match (you keep hitting tab, but no choices
are shown). It turns out this is very useful when you're working on the command
line — it's like being able to look ahead as you're working.

Note that autocomplete can be very contextual. Depending on which program or
shell you're running. So some autocompletion is taking into account what it
knows you are trying to do (from the characters you've already typed). For
example, if you are trying to change to a directory with the `cd` command, some
shell's autocomplete will automatically disregard any filename that is not a
directory.

