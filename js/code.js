document.getElementsByTagName("body")[0].classList.add("js");

// enable "sticky" display of character codes on text file display:
// necessary in case device doesn't have mouseover
// Only highlight char divs within .text-file, which _always_ contain a span
// (each row of text is also a div, so igore clicks on those)
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
  })
}

