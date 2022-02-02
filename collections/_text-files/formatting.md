---
title: Formatting text
layout: topic
order: 112
---

Text files _cannot_ contain formatting.

What that means is that the formatting is not encoded in the file: only the
characters are.

This doesn't mean that you can't express formatting within the text file.
For example, [Markdown](https://en.wikipedia.org/wiki/Markdown) is a common way
of formatting text: you put an underscore either side of a word to indicate it
is _italic_, or a couple of asterisks to show it is **bold**.

    This is an _italic_ word and this is
    a **bold** word in a Markdown file.

But this is still a text file because it only contains characters (the `_` and
the `*` are just characters in the text). The formatting only gets applied if
you view the file in a program which interprets the file, and displays the
results.

Similarly, you can express italic and bold in 
[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) using the tags `<em>`
(emphasis) and `<strong>`:

    This is an <em>italic</em> word and this is a
    <strong>bold</strong> word in an HTML file

The formatting there is not encoded in the file: it only contains characters
which in this case include the symbols `<`, `>`, and `/`. You only see italic
and bold if you look at the contents of a file using a program that displays
it after processing it: for example, a web browser.



  