---
title: File contents
layout: topic
order: 101
---

What's in a file?

When you save things to computer disk, the storage is organised by files.

Your Python program can be in a file. A JPEG image of your dog is a file.
An application might be in a file. A spreadsheet is a file.

You need a basic appreciation of files in order to use a computer. The
_file system_ controls how the files are organised. You need to be familiar
with this in order to access files and their contents, or locate them, or
even change or delete them.

> Many consumer devices try to conceal the underlying file system from the user
> (for example, smart phones and some tablet computers). Graphical interfaces,
> applications, and even search have all made it possible for people to use
> these devices without being concerned with file systems. When you study
> Computer Science, you must look behind these interfaces.

The way file systems are implemented varies a little between operating systems:
there are some differences in the detail between Windows, Mac, and Unix.

The file system is organised into
[directories]({{ site.baseurl }}/files/directories) (sometimes called folders)
which themselves contain files (and more directories).

File systems also need to know how to work with different kinds of disk and
storage, but a lot of that is hidden from you. To start with, all you need to
know is how to _navigate_ through the file system and work with the files.
