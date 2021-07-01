---
title: Relative paths
layout: topic
order: 110
---

Relative file paths start at the
[current directory]({{ site.baseurl }}/files/current-directory).

<object id="svg-dir-diagram" data="{{ site.baseurl }}/images/dir-with-paths-relative.svg"
  type="image/svg+xml" data-superbasics="relative">
</object>

<pre id="path-display" class="language-plaintext highlighter-rouge">
../../chaz
</pre>

<p>
  This is the relative path from <code id="from-abs-display" class="language-plaintext highlighter-rouge">/ada/data</code> to
  <code id="to-abs-display" class="language-plaintext highlighter-rouge">/chaz</code>
</p>

<p class="js-only">
  Click or tap a directory to set the current directory, then tap or click
  another to see the relative path between the two.
</p>

There's no way to just hop across between siblings. You must go up to the
[parent]({{ site.baseurl }}/files/parent-directory) (with `..`) and then down
again.

The downside of relative paths is that they are — by definition — sensitive
to the context of _where_ they are used. Unlike
[absolute paths]({{ site.baseurl }}/files/absolute-paths), you need a different
relative path to access the same file from different locations within the file
structure.

This means you can sometimes break programs that use relative paths if you run
them from the wrong directory.

### Using the "current directory" `./`

You don't always _need_ to use the dot to indicate "current directory" at the
start of a relative path. It's redundant, because it means "start where I am",
which is what a relative path means anyway. However, it does indicate that
you're _deliberately_ using relative addressing. So some operations on the
command line (such as autocomplete, or running an executable file) work best if
you use it.

