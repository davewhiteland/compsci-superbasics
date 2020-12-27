---
title: Absolute paths
layout: topic
order: 109
---

Absolute file paths _start at the [root]({{ site.baseurl }}/files/root)_.

That means they *must* have the
[file separator]({{ site.baseurl }}/files/file-separators)
as the very first character, because that is effectively the name of the
root directory.

<object id="svg-dir-diagram" data="{{ site.baseurl }}/images/dir-with-paths.svg" type="image/svg+xml">
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
working with files a long way from the root, this can be inconvienient.

Another problem is that — almost by definition — they rely on the file
structure being exactly as described. This is why you should avoid using 
absolute paths in any programs you write: absolute paths will only work on
another computer if it has exactly the same path as the one you've written
yours on.

[Relative paths]({{ site.baseurl }}/files/relative-paths) address both these
disadvantages.

<script type="text/javascript">
  // check settings here match with SVG contents
  const ID_PREFIX = "dir",
        PATH_PREFIX = "path",
        TEXT_PREFIX = "text",
        ID_SEP = "-",
        COL_TEXT_DEFAULT = "#000",
        COL_TEXT_ON_PATH = "#fff",
        COL_DEFAULT = "#ffb",
        COL_CURRENT = "#b00",
        PATH_DISPLAY_NAME = "path-display";
  let dirs, paths, texts, path_display;
  window.addEventListener("load", function() {
    let svgObject = document.getElementById('svg-dir-diagram').contentDocument;
    dirs  = svgObject.getElementsByTagName("use");
    paths = svgObject.getElementsByClassName("path");
    texts = svgObject.getElementsByClassName("text");
    path_display = document.getElementById(PATH_DISPLAY_NAME);
    for (let d of dirs) {
      d.addEventListener("click", function(){
        for (let d of dirs) {
          d.setAttributeNS(null, 'style',  "--dirfill:" + COL_DEFAULT);
        }
        for (let t of texts) {
          t.setAttributeNS(null, 'style',  "--textfill:" + COL_TEXT_DEFAULT);
        }
        for (let path of paths) {
          path.setAttributeNS(null, 'style', "opacity: 0");
        }
        let dir_names = [];
        let steps = this.id.split(ID_SEP).slice(1);
        while (steps.length > 0) {
          let id = steps.join(ID_SEP);
          let d = svgObject.getElementById(ID_PREFIX + ID_SEP + id);
          d.setAttributeNS(null, 'style', "--dirfill:" + COL_CURRENT);
          let t = svgObject.getElementById(TEXT_PREFIX + ID_SEP + id);
          t.setAttributeNS(null, 'style', "--textfill:" + COL_TEXT_ON_PATH);
          if (steps.length > 1) {
            svgObject.getElementById(PATH_PREFIX + ID_SEP + id)
              .setAttributeNS(null, 'style',  "opacity: 1");
            dir_names.push(t.dataset['text']);
          }
          steps.pop();
        }
        path_display.innerHTML = "/"+dir_names.reverse().join("/");
      })
    }
  });
</script>