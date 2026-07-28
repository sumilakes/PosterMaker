function createPoster(){


let title =
document.getElementById("title").value;


let subtitle =
document.getElementById("subtitle").value;


let theme =
document.getElementById("theme").value;



document.getElementById("posterTitle")
.innerText =
title || "NEW TITLE";


document.getElementById("posterSubtitle")
.innerText =
subtitle || "YOUR MESSAGE";



let poster =
document.getElementById("poster");


poster.className="";


if(theme==="dark"){

poster.classList.add("dark");

}


if(theme==="future"){

poster.classList.add("future");

}


}