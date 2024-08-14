"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var showdown = require("https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js");
function toggle(element, button, txt) {
    if (document.getElementById(element).style.display === "") {
        document.getElementById(element).style.display = "none";
        document.getElementById(button).innerHTML = txt;
    }
    else if (document.getElementById(element).style.display === "none") {
        document.getElementById(element).style.display = "";
        document.getElementById(button).innerHTML = " " + txt;
    }
}
function readMd(file, content) {
    var reader = new FileReader();
    reader.readAsText(file);
    var converter = new showdown.Converter(), text = reader.result, html = converter.makeHtml(text);
    document.getElementById(content).innerHTML = converter.html;
}
