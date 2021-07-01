---
title: Directories and subdirectories
layout: topic
order: 104
---

Directories are sometimes called folders.

A directory is a special kind of file that contains other files.

A directory can itself contain other directories, which (in the context of that
directory) are called _subdirectories_. The directory is called the _parent_
of its subdirectories.

Each directory can have at most one parent; it can only ever be in one
directory<a href="#footnote-1"><sup>1</sup></a>. The consequence of this is
that directory structures are hierarchical: they can be represented as
(inverted) tree-like graphs:

<object id="svg-dir-diagram" data="{{ site.baseurl }}/images/dir-tree.svg"
 data-superbasics="parent" type="image/svg+xml">
</object>


<table class="js-only key-dir-table">
  <tr>
    <td>
      <object class="key-dir" id="key-dir-parent" data="{{ site.baseurl }}/images/dir.svg" type="image/svg+xml"></object>
    </td>
    <td>
      parent<span id="qty-dir-parent"></span>
    </td>
  </tr>
  <tr>
    <td class="key-dir">
      <object id="key-dir-current" data="{{ site.baseurl }}/images/dir.svg" type="image/svg+xml"></object>
    </td>
    <td>
      current<span id="qty-dir-current"></span>
    </td>
  </tr>
  <tr>
    <td>
      <object class="key-dir" id="key-dir-subdir" data="{{ site.baseurl }}/images/dir.svg" type="image/svg+xml"></object>
    </td>
    <td>
      subdirectory<span id="qty-dir-subdir"></span>
    </td>
  </tr>
</table>

<p class="js-only">
  Click or tap on the directories above to see their parents and subdirectories.
</p>

Note how every directory (except one) has <em>only one parent</em>, and can have
none, one, or many subdirectories.


<p class="footnote"><sup id="footnote-1">1</sup>
  You can create <a href="{{ site.baseurl }}/files/symlinks">symbolic links</a>
  that make it look as if a directory is in more than one place... but these
  are just aliases, so the directory itself still has only one parent.
</p>
