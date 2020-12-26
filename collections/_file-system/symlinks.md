---
title: Symbolic links
layout: topic
order: 110
---

Sometimes called a _symlink_, _alias_ or (in user interface terms) an
_shortcut_.

A _symbolic link_ is a file that points to another file. The file it's pointing
to might be a directory (because directories are really just a special kind of
file).

If you double-click on a symbolic link's icon, most user interfaces will treat
that exactly as if you'd double-clicked on the thing it is linking too. This is
why symbolic links (especially on your
[desktop]({{ site.baseurl }}/files/desktop)) are so useful.

This is handy because it means you can effectively put files (or directories)
in more than one place in the filesystem. They are not _really_ there — 
but that's because a file can only be in one place — but the symbolic link
means that the file can be found as if it was.

When you are [auto-completing]({{ site.baseurl }}/command-line/tab-completion)
on the command line, you can usually follow symbolic links. So this is a very
useful way to make navigating the file system easier.

### Make a symlink on Unix

Make a symbolic link using the `ln` command with the `-s` option for symbolic
link (as opposed to a hard<a href="#footnote-1"><sup>1</sup></a> link).

The link itself is just a file, so you need to give it a filename when you
create it.

For example, if you have a file called `foo.py` in a `programs` directory, 
you can make a symbolic link called `link-to-foo` that links to it with:

    ln -s programs/foo.py link-to-foo

That creates the symbolic link called `link-to-foo` in the current directory.

Deleting a symbolic link does _not_ delete the file it is linking to. However,
renaming, moving, or deleting a file that a symbolic link is pointing to breaks
the link (and leaves it "dangling").


---

<sup id="footnote-1">1</sup>&nbsp;
Hard links are a little more powerful; normally that's not what you want.
Whereas a symbolic link is really just pointing to the other file, a hard link
is more like a duplicate that the system _knows_ is a clone, and when you delete
a hard link, you're deleting _all_ the clones too.


