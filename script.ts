const home: string = "home";
const abtm: string = "abtme";
const csjo: string = "csjournal";
const devb: string = "devblog";
const proj: string = "projects";

const home_txt: string = "Home";
const abtm_txt: string = "About Me";
const csjo_txt: string = "CS Journal";
const devb_txt: string = "Dev Blog";
const proj_txt: string = "Projects";

const home_ico: string = "";
const abtm_ico: string = "";
const csjo_ico: string = "󰂾";
const devb_ico: string = "󱃖";
const proj_ico: string = "";

function toggle(page, button) {
  const elements: string[] = [ home,abtm,csjo,devb,proj ];
  const elements_ico: string[] = [ home_ico,abtm_ico,csjo_ico,devb_ico,proj_ico ];
  const elements_txt: string[] = [ home_txt,abtm_txt,csjo_txt,devb_txt,proj_txt ];
  var elm = document.getElementById(elements[page-1]);
  
  for (let i = 0; i < elements.length; i++) {
    if (i !== page-1) {
      document.getElementById(elements[i]).style.display = "none";
      document.getElementById(elements[i]+"-button").innerHTML = elements_txt[i]
      document.getElementById(elements[i]+"-button-mob").innerHTML = elements_ico[i]
    } else {
      document.getElementById(elements[i]).style.display = "";
      document.getElementById(elements[page-1]+"-button").innerHTML = "Close";
      document.getElementById(elements[page-1]+"-button-mob").innerHTML = "";
    }
  }
}
