document.getElementsByTagName("body")[0].classList.add("js");

const DIRS = [ // must match what's in the SVG
  {"id":"0", "name": "/", "subdirs": [
    {"id":"0-0", "name": "ada", "subdirs": [
      {"id":"0-0-0", "name": "mail"},
      {"id":"0-0-1", "name": "data", "subdirs": [
        {"id":"0-0-1-0", "name": "raw"},
        {"id":"0-0-1-1", "name": "clean"},
        {"id":"0-0-1-2", "name": "plots"}
      ]}
    ]},
    {"id":"0-1", "name": "chaz", "subdirs": [
      {"id":"0-1-0", "name": "gifs"},
      {"id":"0-1-1", "name": "mail"},
      {"id":"0-1-2", "name": "data", "subdirs": [
        {"id":"0-1-2-0", "name": "tmp"}
      ]}
    ]}
  ]}
];
const INITIAL_DIR = "dir-0-0-1";

// if attrStartVal is null, use existing value and attrEndVal is relative
const SvgTween = function(node, attrName, attrStartVal, attrEndVal, duration, callback) {
  this.node = node;
  this.attrName = attrName;
  this.attrStartVal = attrStartVal;
  if (attrStartVal === null) {
    this.attrStartVal = parseInt(this.node.x.baseVal.value); // hmm
    this.attrEndVal = this.attrStartVal + attrEndVal;
  } else {
    this.attrEndVal = attrEndVal;
  }
  this.duration = duration;
  this.isStarted = false;
  this.isDone = false;
  this.startTime = null;
  this.callback = callback;
};
SvgTween.prototype.start = function() {
  if (this.isStarted || this.isDone) return;
  this.isStarted = true;
  const animateStep = (timestamp) => {
    if (this.isDone) return;
    if (!this.startTime) this.startTime = timestamp;
    const progress = (timestamp - this.startTime) / this.duration;
    if (progress < 1) {
      const currentVal = (this.attrEndVal - this.attrStartVal) * progress + this.attrStartVal;
      this.node.setAttributeNS(null, this.attrName, currentVal);
      window.requestAnimationFrame(animateStep);
    } else {
      this.node.setAttributeNS(null, this.attrName, this.attrEndVal);
      this.isDone = true;
      if (this.callback && this.callback instanceof Function) {
        this.callback.call(this);
      }
    }
  }
  window.requestAnimationFrame(animateStep);
};
SvgTween.prototype.cancel = function() {
  this.isDone = true;
};


//---------------------------------------------------------------------------
// enable "sticky" display of character codes on text file display:
// necessary in case device doesn't have mouseover
// Only highlight char divs within .text-file, which _always_ contain a span
// (each row of text is also a div, so ignore clicks on those)
//---------------------------------------------------------------------------
let textfiles = document.getElementsByClassName("text-file");
for (let i=0; i<textfiles.length; i++) {
  textfiles[i].addEventListener("click", function(e){
    let char_div;
    if (e.target.tagName === "SPAN") {
      char_div = e.target.parentElement;
    } else if (e.target.children.length === 1 && e.target.children[0].tagName === "SPAN") {
      char_div = e.target;
    }
    if (char_div) {
      char_div.classList.toggle("show-code");
    }
  });
}


//---------------------------------------------------------------------------
// highlight footnote clicks — jumping to the footnote is not enough, since
// it's at the bottom of the page: highlight it to draw reader's attention
//---------------------------------------------------------------------------
let FOOTNOTE_HILIGHT_DURATION = 2000; // milliseconds (NB: 1s transition in CSS)
let FOOTNOTE_HILIGHT_CSS = "hilight";
let footnote_links = document.getElementsByTagName("SUP");
let footnote_tid;
for (let link of footnote_links){
  if (link.parentElement.tagName==="A") {
    let href = link.parentElement.getAttribute("href");
    if (href && href.indexOf("#") === 0) {
      let target = document.getElementById(href.substr(1));
      link.parentElement.addEventListener("click", function(e){
        let footnote = document.getElementById(href.substring(1));
        clearTimeout(footnote_tid);
        if (footnote) {
          footnote = footnote.parentElement;
        }
        footnote.classList.add(FOOTNOTE_HILIGHT_CSS);
        footnote_tid = setTimeout(
          function(){ footnote.classList.remove(FOOTNOTE_HILIGHT_CSS) },
          FOOTNOTE_HILIGHT_DURATION
        );
      });
    }
  }
}

//---------------------------------------------------------------------------
// interactive directory diagrams
// check settings here match with SVG contents
// must be called only when SVG image has loaded
//---------------------------------------------------------------------------
function dir_interaction(svgElement){
  const 
        // values of data-superbasics (which of the diagrams is it?)
        TYPE_RELATIVE = "relative",
        TYPE_ABSOLUTE = "absolute",
        TYPE_PARENT   = "parent",
        TYPE_CD       = "cd",
  
        ID_PREFIX     = "dir",
        PATH_PREFIX   = "path",
        TEXT_PREFIX   = "text",
        ID_SEP        = "-",
  
        HOP_PREFIX    = "hop" + ID_SEP, 
  
        // colours used in the diagrams
        COL_TEXT_DEFAULT  = "#000",
        COL_TEXT_ON_PATH  = "#fff",
        COL_DEFAULT       = "#ffb",
        COL_ON_PATH       = "#b00",
        COL_CURRENT       = "#b00",
        COL_FROM          = "#0b0",
        COL_PARENT        = "#fff",
        COL_SUBDIR        = "#ffee00",
        COL_STROKE_MAJOR  = "#000",
        COL_STROKE_MINOR  = "#828282",
  
        FROM_DISPLAY_NAME = "from-abs-display",
        TO_DISPLAY_NAME   = "to-abs-display",
        PATH_DISPLAY_NAME = "path-display",
  
        DELAY_EN_ROUTE    = 500,  // (ms) pause at directories en route
        DELAY_AT_END      = 1500; // (ms) pause on completion

  let is_busy = false;
  let interaction_type = svgElement.dataset.superbasics;
  let dirs, paths, texts, path_display;
  let dir_elements = {};
  
  let from_dir_id = INITIAL_DIR;
  let want_new_from_dir = true;


  // strip prefix from SVG dir id ("dir-0-1" => "0-1")
  function get_dir_id(id_str) {
    if (id_str.indexOf(ID_PREFIX + ID_SEP) === 0) {
      id_str = id_str.substring(ID_PREFIX.length + ID_SEP.length);
    }
    return id_str;
  }
  // add prefix to SVG dir id ("0-1" => "dir-0-1")
  function get_svg_dir_id(id_str) {
    if (id_str.indexOf(ID_PREFIX + ID_SEP) != 0) {
      id_str = ID_PREFIX + ID_SEP + id_str;
    }
    return id_str;
  }
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
  function populate_dir_quantities(qty_parent, qty_current, qty_subdir){
    dir_elements["key-parent-path" ].setAttributeNS(null, 'style', "--dirfill:" + COL_PARENT + ";--dirstroke:" + (qty_parent? COL_STROKE_MAJOR:COL_STROKE_MINOR));
    dir_elements["key-current-path"].setAttributeNS(null, 'style', "--dirfill:" + COL_FROM + ";--dirstroke:" + (qty_current? COL_STROKE_MAJOR:COL_STROKE_MINOR));
    dir_elements["key-subdir-path" ].setAttributeNS(null, 'style', "--dirfill:" + COL_SUBDIR + ";--dirstroke:" + (qty_subdir? COL_STROKE_MAJOR:COL_STROKE_MINOR));
    dir_elements["qty-parent" ].innerHTML = "&nbsp;×&nbsp;" + qty_parent;
    dir_elements["qty-current"].innerHTML = "&nbsp;×&nbsp;" + qty_current;
    dir_elements["qty-subdir" ].innerHTML = "&nbsp;×&nbsp;" + qty_subdir;
  }

  let svgObject = svgElement.contentDocument;
  dirs  = svgObject.getElementsByTagName("use");
  paths = svgObject.getElementsByClassName("path");
  texts = svgObject.getElementsByClassName("text");
  // may be undefined if not used:
  path_display = document.getElementById(PATH_DISPLAY_NAME);
  from_display = document.getElementById(FROM_DISPLAY_NAME);
  to_display = document.getElementById(TO_DISPLAY_NAME);
  
  if (interaction_type === TYPE_PARENT){
    dir_elements = {
      "key-parent-path": document.getElementById("key-dir-parent").contentDocument.getElementsByTagName("path")[0],
      "key-current-path": document.getElementById("key-dir-current").contentDocument.getElementsByTagName("path")[0],
      "key-subdir-path": document.getElementById("key-dir-subdir").contentDocument.getElementsByTagName("path")[0],
      "qty-parent": document.getElementById("qty-dir-parent"),
      "qty-current": document.getElementById("qty-dir-current"),
      "qty-subdir": document.getElementById("qty-dir-subdir")
    }
    populate_dir_quantities(0,0,0);
    let subdirs = {};
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
            let fill_color = COL_DEFAULT;
            let stroke_color = COL_STROKE_MINOR;
            if (d.id === parent_id) {
              stroke_color = COL_STROKE_MAJOR;
              fill_color = COL_PARENT;
              qty_parents++;
            } else if (d.id === this.id) {
              stroke_color = COL_STROKE_MAJOR;
              fill_color = COL_FROM;
            }
            d.setAttributeNS(null, 'style', "--dirfill:" + fill_color + "; --dirstroke:" + stroke_color);
          }
          for (let d of subdirs[this.id]) {
            d.setAttributeNS(null, 'style',  "--dirfill:"+COL_SUBDIR + ";--dirstroke:" + COL_STROKE_MAJOR);
          }
          populate_dir_quantities(qty_parents, 1, subdirs[this.id].length);
        })
      } // else ignore: doesn't start with expected prefix
    }
    return; // end of parental set-up
  } else if (interaction_type === TYPE_CD){

    const MIN_Y_VALUE = 5.5;  // y less than this crops the ball off the frame
    let cd_button = document.getElementById("cd-button");

    // ids: 0 0 1
    function get_dir_info(dir_tree, ids) {
      if (ids.length === 1) { // no depth
        return dir_tree[ids[0]]
      } else {
        return get_dir_info(dir_tree[ids[0]].subdirs, ids.slice(1))
      }
    }

    let paths_from_here = {};
    let ids_from_here = [];
    // items are: path:  ../../chaz
    //            id:    0-1
    //            route: 0-0 0 0-1 (space separted ids)
    
    function is_new(id) {
      return paths_from_here[id] == undefined;
    }
    function add_to_paths(id, path, route) {
      paths_from_here[id] = {"path": path, "route": route};
      ids_from_here.push(id);
    }
    function get_new_paths_below(dir, path, route) {
      if (is_new(dir.id)) {
        add_to_paths(dir.id, path, route);
        if (dir.subdirs) {
          for (let subdir of dir.subdirs) {
            let tidy_path = path + "/" + subdir.name;
            if (tidy_path.indexOf("./") === 0) { // a little fix for simplicity
              tidy_path = tidy_path.substring(2);
            }
            let next_route = subdir.id;
            if (route != "") {
              next_route = route+" "+next_route;
            }
            get_new_paths_below(subdir, tidy_path, next_route)
          }
        }
      }
    }

    // loads up paths_from_here (and ids_from_here with the keys)
    function get_cd_paths(current_id) { // id: "dir-X" ... "dir-X-X-X-X"
      paths_from_here = {};
      ids_from_here = [];
      let ids = get_dir_id(current_id).split("-");
      let id;
      let current_dir_info = get_dir_info(DIRS, ids);
      get_new_paths_below(current_dir_info, ".", ""); // empty route: no move
      let parent_hops = "..";
      let parent_route = "";
      while (ids.length > 1) { // looping up through the parents
        id = ids.pop();
        let parent_dir_info = get_dir_info(DIRS, ids);
        parent_route += parent_dir_info.id;
        get_new_paths_below(parent_dir_info, parent_hops, parent_route);
        parent_hops += "/..";
        parent_route += " ";
      }
    }

    function get_dir_position(id)  {
      let dir = svgObject.getElementById(id);
      let t = dir.getAttribute("transform");
      let x = parseInt(dir.getAttribute("x")) + parseInt(dir.getAttribute("width"))/2;
      let y = parseInt(dir.getAttribute("y")) + parseInt(dir.getAttribute("height"))/5;
      return { "x": x, "y": Math.max(y, 5.5) }  // as high as ball can go
    }

    function show_hop(block) {
      document.getElementById(HOP_PREFIX + get_dir_id(block.end_id)).classList.add("then");
    }
    // highlight flashes the dir for DELAY_EN_ROUTE (or forever, if overridden)
    function highlight_hop(block, want_forever) {
      document.getElementById(HOP_PREFIX + get_dir_id(block.end_id)).classList.add("now");
      let dir = svgObject.getElementById(block.end_id);
      dir.setAttributeNS(null, 'style', "--dirfill:" + COL_ON_PATH);
      svgObject.getElementById(dir.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style', "--textfill:" + COL_TEXT_ON_PATH);
      setTimeout(
        function(){
          document.getElementById(HOP_PREFIX + get_dir_id(block.end_id)).classList.remove("now");
          if (! want_forever) {
            dir.setAttributeNS(null, 'style', "--dirfill:" + COL_SUBDIR);
            svgObject.getElementById(dir.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style', "--textfill:" + COL_TEXT_DEFAULT);
          }
        },
        DELAY_EN_ROUTE
      )
    }

    let circleTween;
    let reference_dir = "dir-0-0"; // used to calculate difference between Ys
    let reference_pos = get_dir_position(reference_dir);
    let current_dir = INITIAL_DIR;
    const MOVE_SPEED = 20;
    const Y_RISER_RATIO = 1/3;
    let current_pos = get_dir_position(current_dir);
    const Y_RISER = (current_pos.y - reference_pos.y) * Y_RISER_RATIO;

    get_cd_paths(current_dir);

    let here = svgObject.getElementById("you-are-here");
    here.setAttribute("transform", "translate(0,0)");
    here.setAttribute("x", current_pos.x);
    here.setAttribute("y", current_pos.y);

    cd_button.addEventListener("click", function(){
      // event listener turns the route into blocks:
      // each block has a start dir and an end dir, with steps the move there
      let target_id = cd_button.dataset.to; // store target in the button
      let route = paths_from_here[target_id].route.split(" ");
      if (route.length === 1 && route[0] === "") {
        return; // no move: this is "moving to here" (.)
      }
      is_busy = true;
      cd_button.classList.add("hidden");
      let blocks = []; // blocks: {start_id, end_id, steps: []}
      let start_id = current_dir;
      for (let step_id of route) {
        if (step_id === "") { // we've already checked for no move
          continue; // ignore empty blocks (better: don't make them!)
        }
        let end_id = "dir-" + step_id;
        let current_pos = get_dir_position(start_id);
        let steps = [];
      
        let next_pos = get_dir_position(end_id);
        let delta_x = next_pos.x-current_pos.x;
        let delta_y = next_pos.y-current_pos.y;
        if (delta_x === 0) {
          steps.push({
            "name": "y", "from": current_pos.y, "to": next_pos.y, 
            "duration": Math.abs(delta_y * MOVE_SPEED)
          });
        } else {
          let y_delta_riser = delta_y * (delta_y > 0? 1-Y_RISER_RATIO : Y_RISER_RATIO);
          if (delta_y === 0) { // hop down -- not expected: should go via parent
            steps.push({
              "name": "y", 
              "from": next_pos.y-Y_RISER, "to": next_pos.y, 
              "duration": Math.abs(Y_RISER) * MOVE_SPEED
            });
          } else {
            steps.push({
              "name": "y", 
              "from": current_pos.y+y_delta_riser, "to": next_pos.y, 
              "duration": Math.abs(next_pos.y-(current_pos.y+y_delta_riser)) * MOVE_SPEED
            });
          }
          steps.push({
            "name": "x", "from": current_pos.x, "to": next_pos.x, 
            "duration": Math.abs(current_pos.x-next_pos.x) * MOVE_SPEED
          });
          if (delta_y === 0) {  // hop up -- not expected: should go via parent
            steps.push({
              "name": "y", "from": next_pos.y, "to": next_pos.y-Y_RISER, 
              "duration": Y_RISER * MOVE_SPEED
            });
          } else {
            steps.push({
              "name": "y", 
              "from": current_pos.y, "to": current_pos.y+y_delta_riser, 
              "duration": Math.abs(y_delta_riser) * MOVE_SPEED
            });
          }
        }
        blocks.push({"steps": steps, "start_id": start_id, "end_id": end_id});
        start_id = end_id;
      }

      let block = blocks.shift();
      show_hop(block);

      const movePosition = () => {
        if (
          circleTween){circleTween.cancel()
        };
        let step;
        if (block.steps.length > 0) {
          step  = block.steps.pop();
        }
        circleTween = new SvgTween(here, step.name, step.from, step.to, step.duration, function(){
          if (block.steps.length > 0) {
            movePosition();
          } else { // end of a block
            step = null;
            highlight_hop(block, blocks.length==0);
            if (blocks.length > 0) {
              block = blocks.shift();
              setTimeout(function(){
                 movePosition();
                 show_hop(block);
               }, DELAY_EN_ROUTE);
            } else { // cd is complete: tidy up: repaint dirs, clear display
              //  after a pause for reflection
              setTimeout(function(){
                for (let dir of dirs) {
                  let path = dir.id.split(ID_SEP);
                  if (path[0] === ID_PREFIX) {
                    dir.setAttributeNS(null, 'style', "--dirfill:" + COL_DEFAULT);
                    svgObject.getElementById(dir.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style', "--textfill:" + COL_TEXT_DEFAULT);
                  }
                }
                path_display.innerHTML = '&nbsp;';
                current_dir = block.end_id;
                get_cd_paths(current_dir); // recalculates the paths from here
                from_display.innerHTML =  get_abs_dir_name(svgObject, svgObject.getElementById(current_dir));
                to_display.innerHTML = "...?";
                is_busy = false;
              }, DELAY_AT_END);
            }
          }
        });
        circleTween.start();
      }
      movePosition();
    })
    
    for (let d of dirs) {
      let path = d.id.split(ID_SEP);
      if (path[0] === ID_PREFIX) {
        d.addEventListener("click", function(){
          if (is_busy) {
            return;
          }
          for (let dir of dirs) {
            let path = dir.id.split(ID_SEP);
            if (path[0] === ID_PREFIX) {
              let fill_color = COL_DEFAULT;
              let text_color = COL_TEXT_DEFAULT;
              if (dir.id === this.id) {
                fill_color = COL_ON_PATH; // target 
                text_color = COL_TEXT_ON_PATH;
              }
              dir.setAttributeNS(null, 'style', "--dirfill:" + fill_color);
              svgObject.getElementById(dir.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style', "--textfill:" + text_color);
            }
          }
          let to_id = get_dir_id(this.id);
          let path_html = "";
          let en_route = paths_from_here[to_id].route.split(" ");
          let path_hops = paths_from_here[to_id].path.split("/");
          for (let i=0; i<path_hops.length; i++) {
            path_hops[i] ='<span id="' + HOP_PREFIX + en_route[i] + '">' + path_hops[i] + "</span>";
          }
          path_display.innerHTML = "cd " + path_hops.join("/");
          cd_button.setAttribute("data-to", to_id);
          cd_button.classList.remove("hidden");
          for (let i=0; i<en_route.length - 1; i++) {
            if (en_route[i] != "") { // some empty strings in there whoops
              svgObject.getElementById(get_svg_dir_id(en_route[i])).setAttributeNS(null, 'style', "--dirfill:" + COL_SUBDIR);
            }
          }
          to_display.innerHTML = get_abs_dir_name(svgObject, this);
        })
      }
    }
    cd_button.classList.remove("hidden"); // set-up done: reveal the button
    
  } else { // interaction type is relative or absolute path demo
    let final_path = "&nbsp;";
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
        let from_dir, from_route, to_route;

        if (interaction_type === TYPE_RELATIVE) {
          if (want_new_from_dir) { // this is setting a new input directory
            from_dir_id = this.id;
          }
          want_new_from_dir = !want_new_from_dir; // toggle
          from_dir = svgObject.getElementById(from_dir_id);
          from_route = get_dir_array(svgObject, from_dir_id);
          to_route = get_dir_array(svgObject, this.id);
        
          // run down from the two absolute paths, finding the first
          // place where the paths deviate

          let route_nodes = [];
          let route_paths = [];
          let route_names = ["."];
          let i = 0;
          done = from_dir_id === this.id;
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
            d.setAttributeNS(null, 'style', "--dirfill:" + COL_ON_PATH);
            svgObject.getElementById(d.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style', "--textfill:" + COL_TEXT_ON_PATH);
          }
          for (let p of route_paths) {
            p.setAttributeNS(null, 'style', "opacity:1");
          }
          from_dir.setAttributeNS(null, 'style', "--dirfill:" + COL_FROM);
          svgObject.getElementById(from_dir.id.replace(ID_PREFIX, TEXT_PREFIX)).setAttributeNS(null, 'style', "--textfill:" + COL_TEXT_ON_PATH);
          from_display.innerHTML = get_abs_dir_name(svgObject, from_dir);
          to_display.innerHTML = get_abs_dir_name(svgObject, this);
          final_path = route_names.length? route_names.join("/") : "&nbsp;";
        } else if (interaction_type === TYPE_ABSOLUTE) {
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
          final_path = "/"+dir_names.reverse().join("/");
        }
        path_display.innerHTML = final_path;
      })
    }
  }
};

window.addEventListener("load", function() {
  let svgElement = document.getElementById('svg-dir-diagram');
  if (svgElement) { // only one interactive diagram per page, currently
    dir_interaction(svgElement);
  }
});
