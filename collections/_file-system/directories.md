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

<object id="svg-dir-diagram" data="{{ site.baseurl }}/images/dir-tree.svg" type="image/svg+xml">
</object>


<table class="js-only key-dir-table">
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
      <object class="key-dir" id="key-dir-parent" data="{{ site.baseurl }}/images/dir.svg" type="image/svg+xml"></object>
    </td>
    <td>
      parent<span id="qty-dir-parent"></span>
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

<hr>

<sup id="footnote-1">1</sup>&nbsp;
You can create [symbolic links]({site.baseurl}/file-system/symbolic-links)
that make it look as if a directory is in more than one place... but these
are just aliases, so the directory itself still has only one parent.

<script type="text/javascript">
  // check settings here match with SVG contents
  const ID_PREFIX = "dir",
        ID_SEP = "-",
        COL_DEFAULT = "#ffb",
        COL_CURRENT = "#0b0",
        COL_PARENT  = "#fff",
        COL_SUBDIR  = "#ffee00";
  let quantities, dirs, subdirs = {};
  window.addEventListener("load", function() {
    quantities = {
      "current": document.getElementById("qty-dir-current"),
      "parent": document.getElementById("qty-dir-parent"),
      "subdir": document.getElementById("qty-dir-subdir")
    } 
    // shocking JavaScript
    document.getElementById("key-dir-current").contentDocument.getElementsByTagName("path")[0].setAttributeNS(null, 'style',  "--dirfill:" + COL_CURRENT);
    document.getElementById("key-dir-parent").contentDocument.getElementsByTagName("path")[0].setAttributeNS(null, 'style',  "--dirfill:" + COL_PARENT);
    document.getElementById("key-dir-subdir").contentDocument.getElementsByTagName("path")[0].setAttributeNS(null, 'style',  "--dirfill:" + COL_SUBDIR);

    let svgObject = document.getElementById('svg-dir-diagram').contentDocument;
    dirs  = svgObject.getElementsByTagName("use");
    for (let d of dirs) {
      let path = d.id.split(ID_SEP);
      if (path[0] === ID_PREFIX) {
        subdirs[d.id] = [];
        let subdir, i = 0;
        while (subdir = svgObject.getElementById([d.id, i].join(ID_SEP))) {
           subdirs[d.id].push(subdir);
           i++;
        }
        d.addEventListener("click", function(){
          let qty_parents = 0;
          let parent_id = this.id.split(ID_SEP).slice(0,-1).join(ID_SEP);
          for (let d of dirs) {
            let color = COL_DEFAULT;
            if (d.id === parent_id) {
              color = COL_PARENT;
              qty_parents++;
            } else if (d.id === this.id) {
              color = COL_CURRENT;
            }
            d.setAttributeNS(null, 'style',  "--dirfill:" + color);
          }
          for (let d of subdirs[this.id]) {
            d.setAttributeNS(null, 'style',  "--dirfill:"+COL_SUBDIR);
          }
          quantities["current"].innerHTML = "&nbsp;×&nbsp;1";
          quantities["parent"].innerHTML = "&nbsp;×&nbsp;" + qty_parents;
          quantities["subdir"].innerHTML = "&nbsp;×&nbsp;" + subdirs[this.id].length;
        })
      } // else ignore: doesn't start with expected prefix
    }
  });
</script>