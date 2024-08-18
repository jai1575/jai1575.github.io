const home: string = "home";
const csjo: string = "csjournal";
const devb: string = "devblog";
const proj: string = "projects";

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
  } else if (window.innerWidth >= 0 && window.innerWidth < 480){
    if (document.getElementById("menu-button-mob").innerHTML==="") {
      document.getElementById("mobile-menu-items").style.display = "flex";
    } else {
      document.getElementById("mobile-menu-items").style.display = "none";
    }
  }
}

window.onresize = menuResize;
menuResize();

/*TODO: add url handler for SPA!!!!
    const urlHandler = async () => {
    var location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"]
    const html = await fetch(route.file).then((response) => response.text());
    document.getElementById("container").innerHTML = html
    document.title = route.title;
    document.querySelector("meta[name='description']").setAttribute("content", route.description);
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlHandler();
}

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("div a")) {
        return;
    }
    e.preventDefault();
    route();
});

window.onpopstate = urlHandler;
window.route = route;
urlHandler();
*/


/*TODO: add urlHash for section jumping
window.addEventListener("hashchange", urlHandler);
urlHandler();

function csjoHash() {
  if (window.location.hash) {
    var hash = location.hash.substr(1);

    if (hash === "top") {
      window.scrollTo(0,0);
      window.history.pushState({}, null, window.location.href.substr(-4););
    }
  }
}*/

/*
    const routes = {
    404: {
        file: "",
        title: "Jai @404",
        deets: "Page Not Found",
    },
    "/": {
        file: "",
        title: "Jai @home",
        deets: "Home",
    },
    "/home": {
        file: "",
        title: "Jai @home",
        deets: "Also Home",
    },
    "/about-me": {
        file: "",
        title: "Jai @abtme",
        deets: "About Me",
    },
    "/cs-journal": {
        file: "",
        title: "Jai @csjo",
        deets: "CompSci Journal",
    },
    "/dev-blog": {
        file: "",
        title: "Jai @devb",
        deets: "Development Blog",
    },
    "/projects": {
        file: "",
        title: "Jai @proj",
        deets: "Projects",
    }
}
*/
