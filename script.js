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



document
.getElementById("imageUpload")
.addEventListener(
"change",
function(event){


let file =
event.target.files[0];


if(file){


let reader =
new FileReader();


reader.onload =
function(e){


document
.getElementById("poster")
.style.backgroundImage =
`url(${e.target.result})`;


};


reader.readAsDataURL(file);


}


});
