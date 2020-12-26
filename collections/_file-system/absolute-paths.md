---
title: Absolute paths
layout: topic
order: 107
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
  Click or tap on a directory to see the path from root to that directory.
</p>

Absolute paths make sense regardless of what the current directory is.

One problem with absolute paths is that they break if any of the directories
within them are deleted or renamed.

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