---
title: Options
layout: topic
order: 115
---

One major benefit of using the command line is that you can give commands
_options_. Compare this with clicking on an icon: you can't easily click it
differently in order to launch the program in a different way. But on the
command line it's very common to be able to add options that change the way
the command runs.

Options let you give a command extra information about how you want it to run.
They are called _options_ because they are usually _optional_.

> Arguments typically tell the command _what_, whereas options give extra
> information about _how_.

Options usually control _how_ a command runs. They begin with a hyphen (-)
immediately followed by a letter indicating _which_ option it is. The hyphen
is crucial: it's how the computer knows it's an option and not an argument.

Every command will have its own options. Some have none (but in Unix, this is
unusual).

Some options just work by _being there_ (these are the simplest ones to use).

Other options have a value associated with them.

A _short option_ is one letter:

    -v

A _long option_ is more than one letter, and has _two_ hyphens

    --version

Often — but not always (it depends on the command or program) — the same option
has both forms: short (for convenience) and long (for clarity). For example,
`-v` and `--version` might both be the same option. But be careful because
that's not always the case!

The programs you write can accept options, but what they mean is up to you.
Most programming languages have libraries to help you define and use your own.

It's common to learn the useful options for the commands you use most. But you
must know how to find others. On Unix, use the `man` (manual) command to see
them.

