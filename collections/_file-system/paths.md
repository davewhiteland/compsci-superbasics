---
title: File paths
layout: topic
order: 108
---

The _file path_ describes the position of a file by identifying its position
in the directory structure.

Specifically, it describes the route to that file _from_ a starting point
directory.

The route is described by naming each of the directories, in order, through
which you must pass to get to the directory that contains the file. The
directory names are separated by the
[path separator]({{ site.baseurl }}/files/path-separators) character, which on
Unix is `/` (and Windows is `\`).

>  The file itself is identified by its filename. Remember that filenames are
>  not unique within the file system, but they _are_ unique in any given
>  directory. That's why identifying the directory that contains the file (that
>  is, its _path_) allows you to **uniquely identify the file**.

* [Absolute-paths]({{ site.baseurl }}/files/absolute-paths) describe the route
  starting from the [root]({{ site.baseurl }}/files/root).

* [Relative-paths]({{ site.baseurl }}/files/relative-paths) describe the route
  starting from the current directory (although what that means depends a
  little on context).

You need to understand both, but in practice you'll probably use relative
paths more often.

### Paths in URLs

You've seen paths like this in URLs on the web, because URLs use this
mechanism too. In that case the links, such as tags inside the HTML like
this:

<pre class="language-plaintext highlighter-rouge">

&lt;a href="<a href="{{ site.baseurl }}/files/absolute-paths">/files/absolute-paths</a>"&gt;absolute&lt;/a&gt;

&lt;a href="<a href="../relative-paths">../relative-paths</a>"&gt;relative&lt;/a&gt;

</pre>

...may be absolute or relative to the _current page_. But really they're
navigating a file structure — or simulating it — just like the one on your
computer. The difference is that root described in the URL is the "document
root" of the website, not the root of the entire file system of the server it's
running on.

That last point is important: it's what prevents you navigating up the path to
the root of the server the website is running on, and accessing files that are
are stored on that machine but not part of the website.