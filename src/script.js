var home = "home";
var abtm = "abtme";
var csjo = "csjournal";
var devb = "devblog";
var proj = "projects";
var home_txt = "Home";
var abtm_txt = "About Me";
var csjo_txt = "CS Journal";
var devb_txt = "Dev Blog";
var proj_txt = "Projects";
var home_ico = "";
var abtm_ico = "";
var csjo_ico = "󰂾";
var devb_ico = "󱃖";
var proj_ico = "";
function toggleMenu() {
    var menu = document.getElementById("mobile-menu-items");
    var menubtn = document.getElementById("menu-button-mob");
    var projects = document.getElementById(proj + "-button");
    var projectsmob = document.getElementById(proj + "-button-mob");
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
function toggle(page) {
    var elements = [home, abtm, csjo, devb, proj];
    var elements_ico = [home_ico, abtm_ico, csjo_ico, devb_ico, proj_ico];
    var elements_txt = [home_txt, abtm_txt, csjo_txt, devb_txt, proj_txt];
    var elm = document.getElementById(elements[page - 1]);
    for (var i = 0; i < elements.length; i++) {
        if (i !== page - 1) {
            document.getElementById(elements[i]).style.display = "none";
            document.getElementById(elements[i] + "-button").innerHTML = elements_txt[i];
            if (document.getElementById(elements[i] + "-button-mob")) {
                document.getElementById(elements[i] + "-button-mob").innerHTML = elements_ico[i];
            }
            if (document.getElementById(elements[i] + "-button-men")) {
                document.getElementById(elements[i] + "-button-men").innerHTML = elements_ico[i];
            }
        }
        else {
            document.getElementById(elements[i]).style.display = "";
            document.getElementById(elements[page - 1] + "-button").innerHTML = "*" + elements_txt[page - 1];
            if (document.getElementById(elements[page - 1] + "-button-mob")) {
                document.getElementById(elements[page - 1] + "-button-mob").innerHTML = "";
            }
            if (document.getElementById(elements[page - 1] + "-button-men")) {
                document.getElementById(elements[page - 1] + "-button-men").innerHTML = "";
            }
        }
    }
}
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
