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

const routes = {
  "/": { title: "Jai @home", render: home },
  "/home": { title: "Jai @home", render: home },
  "/blog": { title: "Jai @blog", render: blog },
  "/journal": { title: "Jai @journal", render: journal },
  "/projects": { title: "Jai @projects", render: projects },
};

function router() {
  let page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.getElementById().innerHTML = page.render();
    switch (page.render){
      case home:
        toggle(1);
        break;
      case journal:
        toggle(2);
        break;
      case blog:
        toggle(3);
        break;
      case projects:
        toggle(4);
        break;
    }
  } else {
    history.replaceState("", "", "/");
    router();
  }
};

window.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

/*
function urlHandler() {
    var location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }
    switch (location) {
        case "home":
            toggle(1);
            break;
        case "journal":
            toggle(2);
            break;
        case "blog":
            toggle(3);
            break;
        case "projects":
            toggle(4);
            break;
    }
    const route = routes[location] || routes["404"]
    document.title = route.title;
}

const route = (event) => { 
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlHandler();
}

window.onpopstate = urlHandler;
urlHandler();

const routes = {
  404: {
    file: "",
    title: "Jai @404",
    html: "select",
    deets: "Page Not Found",
  },
  "/": {
    file: "",
    title: "Jai @home",
    html: "home",
    deets: "Home",
  },
  "/home": {
    file: "",
    title: "Jai @home",
    html: "home",
    deets: "Home",
  },
  "/journal": {
    file: "",
    title: "Jai @cs",
    html: "csjournal",
    deets: "CompSci Journal"
  },
  "/blog": {
    file: "",
    title: "Jai @blog",
    html: "devblog",
    deets: "Development Blog",
  },
  "/projects": {
    file: "",
    title: "Jai @projects",
    html: "projects",
    deets: "Projects",
  }
}
*/
