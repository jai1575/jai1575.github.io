function toggle(element, button, txt, ico) {
    var x = document;
    if (x.getElementById(element).style.display === "") {
        x.getElementById(element).style.display = "none";
        x.getElementById(button).innerHTML = txt;
        x.getElementById(button + "-mob").innerHTML = ico;
    }
    else if (x.getElementById(element).style.display === "none") {
        x.getElementById(element).style.display = "";
        x.getElementById(button).innerHTML = " " + txt;
        x.getElementById(button + "-mob").innerHTML = " " + ico;
    }
    if (x.getElementById("csjournal").style.display === "none" &&
        x.getElementById("devblog").style.display === "none" &&
        x.getElementById("abtme").style.display === "none" &&
        x.getElementById("projects").style.display === "none") {
        x.getElementById("select").style.display = "block";
    }
    else {
        x.getElementById("select").style.display = "none";
    }
}
