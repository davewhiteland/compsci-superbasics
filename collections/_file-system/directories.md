---
title: Directories and subdirectories
layout: topic
order: 104
---

Directories are also known as "folders".

A directory is a special kind of file that contains other files.

A directory can itself contain other directories, which (in the context of that
directory) are called _subdirectories_.

Each directory can have at most one parent; it can only ever be in one
directory<a href="#footnote-1"><sup>1</sup></a>. The consequence of this is
that directory structures are hierarchical: they can be represented as
(inverted) tree-like graphs:


<hr>

<sup id="footnote-1">1</sup>&nbsp;
You can create [symbolic links]({site.baseurl}/file-system/symbolic-links)
that make it look as if a directory is in more than one place... but these
are just aliases, so the directory itself still has only one parent.
