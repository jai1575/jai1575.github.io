var home = "home";
var csjo = "csjournal";
var devb = "devblog";
var proj = "projects";
var blogone = "keyboard-blog";
var blogtwo = "tui-blog";
var home_txt = "Home";
var csjo_txt = "CS Journal";
var devb_txt = "Blog";
var proj_txt = "Projects";
var home_ico = "";
var csjo_ico = "󰂾";
var devb_ico = "󱃖";
var proj_ico = "";
function toggle(page) {
    var elements = [home, csjo, devb, proj];
    var elements_ico = [home_ico, csjo_ico, devb_ico, proj_ico];
    var elements_txt = [home_txt, csjo_txt, devb_txt, proj_txt];
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
function toggleOnlyElement(element, parent_element, on_txt, off_txt) {
    var elm = document.getElementById(element);
    var parElm = document.getElementById(parent_element);
    var elms = [blogone, blogtwo];
    if (parElm.innerHTML === on_txt) {
        parElm.innerHTML = off_txt;
        elm.style.display = "none";
    }
    else if (parElm.innerHTML === off_txt) {
        parElm.innerHTML = on_txt;
        elm.style.display = "flex";
    }
    for (var i = 0; i <= elms.length; i++) {
        if (elms[i] !== element) {
            if (parElm.innerHTML === on_txt) {
                document.getElementById(elms[i]).style.display = "none";
                document.getElementById("index-" + elms[i]).style.display = "none";
            }
            else if (parElm.innerHTML === off_txt) {
                document.getElementById(elms[i]).style.display = "none";
                document.getElementById("index-" + elms[i]).style.display = "";
            }
        }
    }
}
function toggleElement(element, parent_element, on_txt, off_txt) {
    var elm = document.getElementById(element);
    var parElm = document.getElementById(parent_element);
    if (elm.style.display === "none") {
        elm.style.display = "";
        if (on_txt) {
            parElm.innerHTML = on_txt;
        }
    }
    else {
        elm.style.display = "none";
        if (off_txt) {
            parElm.innerHTML = off_txt;
        }
    }
}
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
function menuResize() {
    if (window.innerWidth >= 0 && window.innerWidth > 480) {
        document.getElementById("mobile-menu-items").style.display = "none";
    }
    else if (window.innerWidth >= 0 && window.innerWidth <= 480) {
        if (document.getElementById("menu-button-mob").innerHTML === "") {
            document.getElementById("mobile-menu-items").style.display = "flex";
        }
        else {
            document.getElementById("mobile-menu-items").style.display = "none";
        }
    }
}
window.onresize = menuResize;
menuResize();
function bcgColor(div, color) {
    document.getElementById(div).style.backgroundColor = "#ddd";
    document.getElementById(div).style.boxShadow = "0 0 5px 10px #ddd";
    setTimeout(function () {
        if (color) {
            document.getElementById(div).style.backgroundColor = color;
        }
        else {
            document.getElementById(div).style.backgroundColor = null;
        }
        document.getElementById(div).style.boxShadow = null;
    }, 500);
}
function scrollToDiv(div, color) {
    if (color) {
        bcgColor(div, color);
    }
    else {
        bcgColor(div);
    }
    document.getElementById(div).scrollIntoView({ behavior: 'smooth' });
}
function urlHandler() {
    var location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }
    switch (location) {
        case "/home":
            toggle(1);
            break;
        case "/journal":
            toggle(2);
            break;
        case "/blog":
            toggle(3);
            break;
        case "/projects":
            toggle(4);
            break;
    }
    var route = routes[location] || routes["404"];
    document.title = route.title;
}
var route = function (event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlHandler();
};
window.onpopstate = urlHandler;
urlHandler();
var routes = {
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
};
