let body = document.body;
body.style.cssText =
  " box-sizing = border- box; background-color :#EEEDEE; padding: 0; marging: 0;   display: flex; height: 100vh; flex-direction : column";

let header = document.createElement("header");
header.style.cssText =
  "display : flex; flex-direction : row;   width : 100%; height : 10%; font-size : 22px; background-color :  #7fffd4	; justify-content : space-between;";
let logo = document.createElement("div"); // for creating owr logo
let textLogo = document.createTextNode("AGhiles");
logo.appendChild(textLogo);
logo.style.cssText = "padding : 15px ; font-weight: 700; letter-spacing: 1px";

let navBare = document.createElement("div"); // owr navigtion barre
let navListe = document.createElement("ul");
navListe.style.cssText =
  "display : flex; gap : 12px;   list-style-type: none; padding-right : 10px ";
let navItem1 = document.createElement("li");
navItem1.style.cssText = "";
let home = document.createTextNode("Home");
navItem1.appendChild(home);

let navItem2 = document.createElement("li");
let about = document.createTextNode("About");
navItem2.appendChild(about);

let navItem3 = document.createElement("li");
let services = document.createTextNode("Services");
navItem3.appendChild(services);

let navItem4 = document.createElement("li");
let contact = document.createTextNode("Contact");
navItem4.appendChild(contact);

navListe.appendChild(navItem1);
navListe.appendChild(navItem2);
navListe.appendChild(navItem3);
navListe.appendChild(navItem4);
navBare.appendChild(navListe);

header.appendChild(logo);
header.appendChild(navBare);

body.appendChild(header);

//  creating the main section
let mainSecton = document.createElement("main");
mainSecton.style.cssText =
  " width: 100%; height : 68%; padding-top : 15px ; background-color: #EEEDEE;  ; display: grid; grid-gap:15px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 20% 20% 20% 20% 20%;";

for (let i = 1; i < 16; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "background-color : #FFFFFF; display :flex ;flex-direction : column ; justify-content :center; align-items : center ; border-radius : 10px;";
  let title = document.createElement("h2");
  let titleText = document.createTextNode(` ${i}`);
  title.style.cssText = "margin : 0; padding :4px; font-size : 30px;";
  title.appendChild(titleText);
  let descr = document.createElement("p");
  let descrtext = document.createTextNode("Description for the Product");
  descr.appendChild(descrtext);
  product.append(title);
  product.appendChild(descr);
  mainSecton.appendChild(product);
}
body.appendChild(mainSecton);
///  creating the footer

let footer = document.createElement("footer");
let footerText = document.createTextNode("Footer");
footer.appendChild(footerText);
footer.style.cssText =
  'background-color: #0F5B42;position : fixed; bottom : 0; ; marging-top : 10px grid-area : "footer" ;height : 8% ;width:100%; display: flex; justify-content : center; align-items : center; font-weight: bold; font-size: 25px';
body.appendChild(footer);
