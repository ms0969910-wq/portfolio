/* TYPING ANIMATION */

const words=[
".NET Developer",
"ASP.NET Core Developer",
"SQL Server Expert"
];

let i=0;
let timer;

function typingEffect(){

let word=words[i].split("");

var loopTyping=function(){

if(word.length>0){
document.querySelector(".typing").innerHTML+=word.shift();
}
else{
deletingEffect();
return;
}

timer=setTimeout(loopTyping,100);

};

loopTyping();

}

function deletingEffect(){

let word=words[i].split("");

var loopDeleting=function(){

if(word.length>0){
word.pop();
document.querySelector(".typing").innerHTML=word.join("");
}
else{
i++;
if(i>=words.length){i=0;}
typingEffect();
return;
}

timer=setTimeout(loopDeleting,50);

};

loopDeleting();

}

typingEffect();



/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

navbar.classList.toggle("scrolled",window.scrollY>50);

});


/* ACTIVE MENU HIGHLIGHT */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){
current=section.getAttribute("id");
}

});

navLinks.forEach(a=>{

a.classList.remove("active");

if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}

});

});


/* MOBILE NAVBAR */

const menuToggle=document.getElementById("menuToggle");
const navLinksMenu=document.getElementById("navLinks");

menuToggle.addEventListener("click",()=>{

navLinksMenu.classList.toggle("active");

});
