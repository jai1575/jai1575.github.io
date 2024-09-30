const home: string = "home";
const csjo: string = "csjournal";
const devb: string = "devblog";
const proj: string = "projects";

const blogone: string = "keyboard-blog";
const blogtwo: string = "tui-blog";

const home_txt: string = "Home";
const csjo_txt: string = "CS Journal";
const devb_txt: string = "Blog";
const proj_txt: string = "Projects";

const home_ico: string = "";
const csjo_ico: string = "󰂾";
const devb_ico: string = "󱃖";
const proj_ico: string = "";

function toggle(page) {
  const elements: string[] = [ home,csjo,devb,proj ];
  const elements_ico: string[] = [ home_ico,csjo_ico,devb_ico,proj_ico ];
  const elements_txt: string[] = [ home_txt,csjo_txt,devb_txt,proj_txt ];
  var elm = document.getElementById(elements[page-1]);
  
  for (let i = 0; i < elements.length; i++) {
    if (i !== page-1) {
      document.getElementById(elements[i]).style.display = "none";
      document.getElementById(elements[i]+"-button").innerHTML = elements_txt[i];

      if (document.getElementById(elements[i]+"-button-mob")) {
        document.getElementById(elements[i]+"-button-mob").innerHTML = elements_ico[i];
      } if (document.getElementById(elements[i]+"-button-men")) {
        document.getElementById(elements[i]+"-button-men").innerHTML = elements_ico[i];
      }
    } else {
      document.getElementById(elements[i]).style.display = "";
      document.getElementById(elements[page-1]+"-button").innerHTML = "*"+elements_txt[page-1];

      if (document.getElementById(elements[page-1]+"-button-mob")) {
        document.getElementById(elements[page-1]+"-button-mob").innerHTML = "";
      } if (document.getElementById(elements[page-1]+"-button-men")) {
        document.getElementById(elements[page-1]+"-button-men").innerHTML = "";
      }
    }
  }
}

function toggleOnlyElement(element, parent_element, on_txt, off_txt) {
  var elm = document.getElementById(element);
  var parElm = document.getElementById(parent_element);
  const elms: string[] = [ blogone, blogtwo ];

  if (parElm.innerHTML === on_txt) {
    parElm.innerHTML = off_txt;
    elm.style.display = "none";
  } else if (parElm.innerHTML === off_txt) {
    parElm.innerHTML = on_txt;
    elm.style.display = "flex";
  }

  for (let i = 0; i <= elms.length; i++) {
    if (elms[i] !== element) {
      if (parElm.innerHTML === on_txt) {
        document.getElementById(elms[i]).style.display = "none";
        document.getElementById("index-"+elms[i]).style.display = "none";
      } else if (parElm.innerHTML === off_txt) {
        document.getElementById(elms[i]).style.display = "none";
        document.getElementById("index-"+elms[i]).style.display = "";
      }
    }
  }
}

function toggleElement(element, parent_element, on_txt?, off_txt?) {
  var elm = document.getElementById(element);
  var parElm = document.getElementById(parent_element);

  if (elm.style.display === "none") {
    elm.style.display = "";
    if (on_txt) {
      parElm.innerHTML = on_txt;
    }
  } else {
    elm.style.display = "none";
    if (off_txt) {
      parElm.innerHTML = off_txt;
    }
  }
}

function toggleMenu() {
  var menu = document.getElementById("mobile-menu-items");
  var menubtn = document.getElementById("menu-button-mob");
  var projects = document.getElementById(proj+"-button");
  var projectsmob = document.getElementById(proj+"-button-mob");

  switch (menubtn.innerHTML) {
    case "":
      menubtn.innerHTML = "";
      menu.style.display = "flex";
      break;
    case "":
      menubtn.innerHTML = "";
      menu.style.display = "none";
      break;
  }
}

function menuResize() {
  if (window.innerWidth >= 0 && window.innerWidth > 480) {
    document.getElementById("mobile-menu-items").style.display = "none";
  } else if (window.innerWidth >= 0 && window.innerWidth <= 480){
    if (document.getElementById("menu-button-mob").innerHTML==="") {
      document.getElementById("mobile-menu-items").style.display = "flex";
    } else {
      document.getElementById("mobile-menu-items").style.display = "none";
    }
  }
}

window.onresize = menuResize;
menuResize();

function bcgColor(div, color?) {
  document.getElementById(div).style.backgroundColor = "#ddd";
  document.getElementById(div).style.boxShadow = "0 0 5px 10px #ddd";
  setTimeout(function() {
    if (color) { document.getElementById(div).style.backgroundColor = color;
    } else { document.getElementById(div).style.backgroundColor = null;}
    document.getElementById(div).style.boxShadow = null;
  }, 500)
}

function scrollToDiv(div, color?) {
  if (color) {
    bcgColor(div, color);
  } else {
    bcgColor(div);
  }
  document.getElementById(div).scrollIntoView({ behavior: 'smooth' });
}
