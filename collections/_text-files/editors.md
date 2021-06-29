---
title: Text editors
layout: topic
order: 109
---

The program you use for editing text is, unsurprisingly, a _text editor_.

A text editor is different from a word processor. A word processor is concerned
with how the text looks (fonts, sizes, layout). All a text editor is really
doing is editing the text: that is, shuffling the characters around.

Text editors typically use a monospace font: that means every printable
character occupies the same width. The text file is effectively displayed on a
grid.

This is important because it means you can identify the position of a character
in the file by its line number, and its column number. This information is
often provided in diagnostic messages (or error messages) when you are
programming.

Using _line:column_ to identify a location within a text file is an implicit
feature of the text file format.

There are many different text editors. Find one that you like (maybe as part
of an [IDE]({{ site.baseurl }}/text-files/ide) if you're using it to program),
that runs on your machine, and learn to use it well.

The basic text editor on Windows is **Notepad**. On MacOS it is **TextEdit**.
Both these are quite limited, and you should probably investigate getting a
more powerful one.

Examples include Notepad++, Atom, BBEdit, Kate, Visual Studio Code.

### A non-GUI text editor

It's handy to know how to use a text-only editor too — that is, one that does
not use a Graphical User Interface (GUI). It allows you to edit files even when
you are connected to a remote server via a simple terminal.

The two most common are **emacs** and **vi** (or vim). Each has its pros and
cons but the main benefit of knowing how to use one of them is that _it will
almost certainly be installed_ on the remote server you've logged onto.

Text-only editors like these take a little more effort to use efficiently,
because you _must_ learn the basic keys needed. Both are powerful tools for
editing files, but you need to practice to get familiar with how they work.
