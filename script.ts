function toggle(element, button, txt) {
  if (document.getElementById(element).style.display === "") {
    document.getElementById(element).style.display="none";
    document.getElementById(button).innerHTML=txt;
  } else if (document.getElementById(element).style.display === "none") {
    document.getElementById(element).style.display="";
    document.getElementById(button).innerHTML=" "+txt;
  }
}
