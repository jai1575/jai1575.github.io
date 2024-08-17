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
function toggle(page, button) {
    var elements = [home, abtm, csjo, devb, proj];
    var elements_ico = [home_ico, abtm_ico, csjo_ico, devb_ico, proj_ico];
    var elements_txt = [home_txt, abtm_txt, csjo_txt, devb_txt, proj_txt];
    var elm = document.getElementById(elements[page - 1]);
    for (var i = 0; i < elements.length; i++) {
        if (i !== page - 1) {
            document.getElementById(elements[i]).style.display = "none";
            document.getElementById(elements[i] + "-button").innerHTML = elements_txt[i];
            document.getElementById(elements[i] + "-button-mob").innerHTML = elements_ico[i];
        }
        else {
            document.getElementById(elements[i]).style.display = "";
            document.getElementById(elements[page - 1] + "-button").innerHTML = "Close";
            document.getElementById(elements[page - 1] + "-button-mob").innerHTML = "";
        }
    }
    //if (elm.style.display = "none") {
    //  btn.innerHTML = txt;
    //  btnmob.innerHTML = ico;
    //}
}
