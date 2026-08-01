window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.55)";
nav.style.backdropFilter="blur(25px)";

}
else{

nav.style.background="rgba(255,255,255,.08)";

}

});
