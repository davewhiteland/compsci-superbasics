---
title: Control characters
layout: topic
order: 105
---

Not all the characters in a text file are things you can see when they are
printed. Instead they indicate a different purpose.

Some common ones are shown here. You don't need to remember them, but it
helps you understand how text files work to realise these are just characters:
they are _non-printable_ characters. They have a number, but it doesn't
result in a symbol you can see (or the computer can print).

These are sometimes considered to be "invisible characters" (which includes
space and tab).


| code | name            | abbreviation | display | notes                 |
|-----:|-----------------|--------------|---------|-----------------------|
|    0 | null            | `NUL`        |         |                       |
|    7 | bell            | `BEL`        | `^G`    | beep!                 |
|    8 | backspace       | `BS`         | `^H`    |                       |
|    9 | tab             | `HT`         | `^I`    | horizontal tab (`\t`) |
|   10 | line feed       | `LF`         | `^J`    | [newline]({{ site.baseurl }}/text-files/newlines) (`\n`) |
|   11 | vertical tab    | `VT`         | `^K`    |                       |
|   12 | form feed       | `FF`         | `^L`    | next page             |
|   13 | carriage return | `CR`         | `^M`    | [newline]({{ site.baseurl }}/text-files/newlines) (`\r`) |
|   26 | end of file     | `EOF`        | `^Z`    |                       |
|   27 | escape          | `ESC`        | `^[`    |                       |

The _display_ column here is not universal: by definition these characters
are not displayed at all. But some programs represent them in this way, when
indicating that they are there.