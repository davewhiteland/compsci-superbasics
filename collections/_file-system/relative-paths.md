---
title: Relative paths
layout: topic
order: 108
---

Relative file paths start at the
[current directory]({{ site.baseurl }}/files/current-directory).

<object id="svg-dir-diagram" data="{{ site.baseurl }}/images/dir-with-paths-relative.svg" type="image/svg+xml">
</object>

<pre id="path-display" class="language-plaintext highlighter-rouge">
../../chaz
</pre>

<p>
  This is the relative path from <code id="from-abs-display" class="language-plaintext highlighter-rouge">/ada/data</code> to
  <code id="to-abs-display" class="language-plaintext highlighter-rouge">/chaz</code>
</p>

<p class="js-only">
  Click or tap on a directory to see the path from the current directory.
</p>

There's no way to just hop across between siblings. You must go up to the
parent and then down again.

### Using the "current directory" `./`

You don't always _need_ to use the dot to indicate "current directory" at the
start of a relative path. It's redundant, because it means "start where I am",
which is what a relative path means anyway. However, it does indicate that
you're _deliberately_ using relative addressing. So some operations on the
command line (such as autocomplete, or running an executable file) work best if
you use it.

<script type="text/javascript">
  // check settings here match with SVG contents

  const ID_PREFIX = "dir",
        PATH_PREFIX = "path",
        TEXT_PREFIX = "text",
        ID_SEP = "-",
        COL_TEXT_DEFAULT = "#000",
        COL_TEXT_ON_PATH = "#fff",
        COL_ON_PATH = "#b00",
        COL_DEFAULT = "#ffb",
        COL_CURRENT = "#0b0",
        FROM_DISPLAY_NAME = "from-abs-display",
        TO_DISPLAY_NAME = "to-abs-display",
        PATH_DISPLAY_NAME = "path-display";
  const from_dir_id = "dir-0-0-1";

  // array of dirs from root to dir_id
  function get_dir_array(svg_obj, dir_id) {
    let dirs = [];
    let steps = dir_id.split(ID_SEP);
    for (let i=1; i<steps.length; i++) { // start at 1 to skip prefix
      dirs.push(svg_obj.getElementById(steps.slice(0, i+1).join(ID_SEP)));
    }
    return dirs;
  }
  function get_dir_name(svg_obj, dir) {
    return svg_obj.getElementById(dir.id.replace(ID_PREFIX, TEXT_PREFIX)).dataset['text'];
  }
  function get_abs_dir_name(svg_obj, dir) {
    let path = dir.id.split(ID_SEP);
    let route = [];
    for (let i=1; i<path.length; i++) {
      let d_id = path.slice(0,i+1).join(ID_SEP);
      route.push(get_dir_name(svg_obj, svg_obj.getElementById(d_id)));
    }
    return route.join("/").replace("//", "/");
  }
  function get_path_from_dir(svg_obj, dir) {
    return svg_obj.getElementById(dir.id.replace(ID_PREFIX, PATH_PREFIX));
  }

  let dirs, paths, texts, path_display, from_display, to_display;
  window.addEventListener("load", function() {
    let svgObject = document.getElementById('svg-dir-diagram').contentDocument;
    dirs  = svgObject.getElementsByTagName("use");
    paths = svgObject.getElementsByClassName("path");
    texts = svgObject.getElementsByClassName("text");
    from_display = document.getElementById(FROM_DISPLAY_NAME);
    to_display = document.getElementById(TO_DISPLAY_NAME);
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
        let from_dir = svgObject.getElementById(from_dir_id);
        let from_route = get_dir_array(svgObject, from_dir_id);
        let to_route = get_dir_array(svgObject, this.id);

        // run down from the two absolute paths, finding the first
        // place where the paths deviate

        let route_nodes = [];
        let route_paths = [];
        let route_names = ["."];
        let done = false;
        let i = 0;
        if (from_dir_id === this.id) {
          done = true;
        }
        while (! done) {
          done = true;
          if (i >= from_route.length) { // to is below from
            for (let d of to_route.slice(i)) {
              route_nodes.push(d);
              route_paths.push(get_path_from_dir(svgObject, d));
              route_names.push(get_dir_name(svgObject, d));
            }
          } else if (
             (i >= to_route.length) // to is above from
             || (from_route[i] != to_route[i]) // diverges at i
            ) { 
            route_nodes = from_route.slice(i-1).slice(0, -1);
            route_paths.push(get_path_from_dir(svgObject, from_dir));
            for (let d of route_nodes.slice(1)){
              route_paths.push(get_path_from_dir(svgObject, d));
            }
            route_names = new Array(route_nodes.length);
            route_names.fill("..");
            if (from_route[i] != to_route[i]) {
              for (let d of to_route.slice(i)) {
                route_nodes.push(d);
                route_paths.push(get_path_from_dir(svgObject, d));
                route_names.push(get_dir_name(svgObject, d));
              }
            }
          } else {
            i++;
            done = false;
          }
        }
        for (let d of route_nodes) {
          d.setAttributeNS(null, 'style',  "--dirfill:" + COL_ON_PATH);
          svgObject.getElementById(d.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style',  "--textfill:" + COL_TEXT_ON_PATH);
        }
        for (let p of route_paths) {
          p.setAttributeNS(null, 'style',  "opacity:1");
        }
        from_dir.setAttributeNS(null, 'style',  "--dirfill:" + COL_CURRENT);
        svgObject.getElementById(from_dir.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style',  "--textfill:" + COL_TEXT_ON_PATH);
        path_display.innerHTML = route_names.length? route_names.join("/") : "&nbsp;";
        from_display.innerHTML = get_abs_dir_name(svgObject, from_dir);
        to_display.innerHTML = get_abs_dir_name(svgObject, this);
      })
    }
  });
</script>