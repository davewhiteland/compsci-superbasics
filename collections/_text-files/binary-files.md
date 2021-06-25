---
title: Binary files
layout: topic
order: 113
---

Sometimes it's useful to describe a file as _not-a-text-file_.

The term for this is a **binary file**. This is because all that you know about
such a file is that it is _not_ encoded as bytes-representing-numbers (with
those numbers mapping to [character codes]({{ site.baseurl }}/text-files/characters)).
Instead, the 1s and 0s inside could represent anything, and not necessarily be
divided on byte boundaries.

Which is to say... it's just _binary data_.

> Of course, the text file is really binary data too: the difference is that,
> in the text file, every number starts on a byte boundary and corresponds to
> a character. There's no reason why a non-text file will follow that pattern.

Sometimes the first two bytes of a binary file are used to indicate what
kind of file it is, but this is just a convention and often not especially
helpful to a human viewer.

### What happens if you open a binary file with a text editor?

If you open a binary file in a text editor, it will look scrambled and
nonsensical. What you are seeing is the computer trying to break the binary 1s
and 0s down into chunks of 8 (a byte) and mapping those to ASCII codes — but
that won't work because that's not what they are.

Because the alphabet/digit/punctuation characters are only about a quarter of
all (255) ASCII codes, most of the characters printed in this way won't look
like normal text. This is why you'll usually see gibberish instead, with
question marks or boxes (unprintable characters) and uncommon symbols.

Opening a binary file in a text editor isn't inherently dangerous; it just
won't make sense. But... **do not edit it** (that is: do not change it and
then save it). You'll almost certainly corrupt the file if you do that.
