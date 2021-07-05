---
title: The ASCII code
layout: topic
order: 107
---

The ASCII code (strictly speaking, US-ASCII) was introduced in the 1960s and is
a standard way of mapping numbers to characters. It grew out of the _telegraph
codes_ of the 1800s.

Pragmatically, you can think of it as part of the much larger 
[Unicode]({{ site.baseurl }}/text-files/unicode) standard
— but for many purposes (such as most programming languages) the ASCII code is
a useful subset.

To understand text files, you do _not_ need to know these numbers, or these
codes. But it's useful to remember it really is just a mapping: every character
has a number.  `65` for `A`, `66` for `B`, `67` for `C`...


The ASCII code breaks down into three parts:

| from  | to    | characters                                                   |
|:-----:|:-----:|--------------------------------------------------------------|
| `0`   | `31`  | non-printable characters (or [control characters]({{ site.baseurl }}/text-files/control-chars)) |
| `32`  | `127` | printable characters (the letters of the alphabet, numbers, punctuation, etc.) |
| `128` | `255` | extended ASCII — there are different variations              |

The limitation of ASCII is that it only accommodates 255 characters. That's not
enough for all the characters we need (the different writing systems of the
world, mathematical symbols, emojis, and so on).

