---
title: Options
layout: topic
order: 114
---

An option is a way to give a command extra information about how to run. They
are called _options_ because they are usually _optional_.

> Arguments typically tell the command _what_, whereas options give extra
> information about _how_.

Options usually control _how_ a command runs. Unlike arguments, they begin with a hyphen (-).

Some options just work by _being there_: these are the simplest ones to use.

Other options have a value associated with them.


A _short option_ is one letter:

    -v

A _long option_ is more than one letter, and has _two_ hyphens

    --version

Often — but not always (it depends on the command or program) — the same option has both forms: short (for convenience) and long (for clarity).

The programs you write can accept options, but what they mean is up to you. Most programming languages have libraries to help you define and use your own.