function toggle(element, button, txt) {
  if (document.getElementById(element).style.display === ""){
    document.getElementById(element).style.display="none";
    document.getElementById(button).innerHTML=txt;
  } else if (document.getElementById(element).style.display === "none") {
    document.getElementById(element).style.display="";
    document.getElementById(button).innerHTML=" "+txt;
  }
}

function readMd(file, content) {
  const reader = new FileReader();
  reader.readAsText(file);
  var showdown = new showdown.Converter(),
    text = reader.result,
    html = converter.makeHtml(text);
  document.getElementById(content).innerHtml = showdowm.html;
}
