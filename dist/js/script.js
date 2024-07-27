const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
});

window.addEventListener('scroll', ()=>{
    hamburger.classList.remove("is-active");
    menu.classList.remove("menu-active");
})

const loader = document.querySelector(".loader");

function loaderActive(){
    loader.classList.add("loader-active");
}

function loaderActiveTime(){
    setInterval(loaderActive, 1000);
}
window.onload = loaderActiveTime();






























// SOURCE VIDEO
// YT : NGODING MASTERI
// PORTFOLIO WEBSITE MENGGUNAKAN HTML CSS JS
// MENIT : 1:32:46
// 3 JUlI 2024