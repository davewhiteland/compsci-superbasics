---
title: Moving around (cd)
layout: topic
order: 112
---

You need to use paths when you move around the file system. Use the `cd`
("change directory") command to change your
[current directory]({{ site.baseurl }}/files/current-directory). Controlling
which directory you are in is critically important when using the
[command line]({{ site.baseurl }}/command-line/).

<object  id="svg-dir-diagram"
    data="{{ site.baseurl }}/images/dir-for-cd.svg"
    type="image/svg+xml" data-superbasics="cd">
</object>


<div class="cd-command-box">
  <pre id="path-display" class="language-plaintext highlighter-rouge">cd <span
    id="hop-0-0">..</span>/<span id="hop-0">..</span>/<span id="hop-0-1">chaz</span></pre>
  <button id="cd-button" class="hidden" data-to="0-1">go</button>
</div>
<p>
  This is command moves from 
  <code id="from-abs-display" class="language-plaintext highlighter-rouge">/ada/data</code>
  to
  <code id="to-abs-display" class="language-plaintext highlighter-rouge">/chaz</code>.
</p>

<div class="js-only">
  <p>
    <strong>Click on a directory</strong> to see the
    <code class="language-plaintext highlighter-rouge">cd</code> command that
    takes you there. Click on “go” to see how the path is being followed.
  </p>
</div>

This example is using [relative paths]({{ site.baseurl }}/files/relative-paths)
to navigate the file system with `cd`. Notice how you can't jump sideways
(to siblings) — to do that you _must_ go via the 
[parent]({{ site.baseurl }}/files/parent-directory) (`..`). For example, in
this file structure, to move from `ada` to `chaz` you must go via  `/`.

You can “chain” multiple `..`s together to travel up the tree.

Of course, you can use [absolute paths]({{ site.baseurl }}/files/absolute-paths)
instead. But for small, local moves — which are very common — relative paths
are simpler.
