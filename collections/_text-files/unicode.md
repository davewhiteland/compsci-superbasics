---
title: Unicode
layout: topic
order: 108
---

Unicode is a response to the obvious limitation that 
[US-ASCII]({{ site.baseurl }}/text-files/ascii) only allows for 256 characters.
This is because ASCII stores each character code in a single byte, which can
only contain a number between 0 and 255.

ASCII worked fine for early computers using English text, because that's more
than enough to cover the numbers (10 digits), upper and lower case letters (2 ×
26), punctuation and control characters.

But it is clearly insufficient for displaying every character with diacritics
or accents, letters from non-Latin alphabets, and all the specialised symbols
of the world.

So Unicode is now the widely-adopted standard. Its use has been accelerated
by the growth of web.

The ASCII codes map onto the Unicode codes. That is, the ASCII character codes
are deliberately a subset of Unicode, so plain text files that use ASCII are
effectively and conveniently _also_ Unicode.

### UTF-8 Encoding

Unicode represents over 140,000 characters. This means some characters are
stored in two or more bytes. So when it reads each character from the file, the
computer needs to determine how many bytes to read. That is, it needs to know
where each number starts and ends, because — unlike ASCII — it's not simply
"the next byte". There's more than one way to indicate this when the numbers
are stored in the file, but the most common method is called UTF-8 encoding.

Unicode with UTF-8 encoding is now such a common standard for text files — in
operating systems, programming languages, and on the web — that it might be the
only one you ever encounter.

If you see strange characters — like `Ã¨Ã©@Ã` — in the text of a web page, it's
usually because the web page creator did not explicitly set it to use UTF-8
encoding, so it's reading every character as a single byte.

