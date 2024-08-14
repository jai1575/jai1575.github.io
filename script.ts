function toggle(element, button, txt) {
  var x = document;
  if (x.getElementById(element).style.display === "") {
    x.getElementById(element).style.display="none";
    x.getElementById(button).innerHTML=txt;
  } else if (x.getElementById(element).style.display === "none") {
    x.getElementById(element).style.display="";
    x.getElementById(button).innerHTML=" "+txt;
  }
  if (x.getElementById("csjournal").style.display==="none" &&
      document.getElementById("engjournal").style.display==="none" &&
      document.getElementById("projects").style.display==="none") {
    x.getElementById("select").style.display="block";
  } else { x.getElementById("select").style.display="none"; }
}
