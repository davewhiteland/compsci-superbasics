---
title: Absolute paths
layout: topic
order: 109
---

Absolute file paths _start at the [root]({{ site.baseurl }}/files/root)_.

That means they *must* have the
[path separator]({{ site.baseurl }}/files/path-separators)
as the very first character, because that is effectively the name of the
root directory.

<object id="svg-dir-diagram" data="{{ site.baseurl }}/images/dir-with-paths.svg"
  type="image/svg+xml" data-superbasics="absolute">
</object>

<pre id="path-display" class="language-plaintext highlighter-rouge">
/ada/data
</pre>

<p class="js-only">
  Click or tap a directory to see the path from root to that directory.
</p>

Absolute paths are useful because they work independently of what the current
directory is.

One disadvantage of absolute paths is that they can be quite long. When you're
working with files a long way from the root, this can be inconvenient.

Another problem is that — almost by definition — they rely on the file
structure being exactly as described. This is why you should avoid using 
absolute paths in any programs you write: absolute paths will only work on
another computer if it has exactly the same path as the one you've written
yours on.

[Relative paths]({{ site.baseurl }}/files/relative-paths) address both these
disadvantages.
