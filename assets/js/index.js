let supportPage = document.getElementById("support-page");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");

let platform = document.getElementById("platform");
let not1 = document.getElementById("not-1");
let not2 = document.getElementById("not-2");
let not3 = document.getElementById("not-3");
let not4 = document.getElementById("not-4");
let not5 = document.getElementById("not-5");
let not6 = document.getElementById("not-6");
let not7 = document.getElementById("not-7");
let not8 = document.getElementById("not-8");

let pricing = document.getElementById("pricing");
let h1 = document.getElementById("h1");
let h4 = document.getElementById("h4");
let p = document.getElementById("p");
let pb1 = document.getElementById("pricing-box-1");
let pb2 = document.getElementById("pricing-box-2");


window.onscroll = function () {
    if (window.scrollY >= supportPage.offsetTop - 200) {
        card1.style.opacity = "1";
        card2.style.opacity = "1";
        card3.style.opacity = "1";
    }
    if (window.scrollY >= platform.offsetTop - 200) {
        not1.style.transform = "translate(0)";
        not2.style.transform = "translate(0)";
        not3.style.transform = "translate(0)";
        not4.style.transform = "translate(0)";
        not5.style.transform = "translate(0)";
        not6.style.transform = "translate(0)";
        not7.style.transform = "translate(0)";
        not8.style.transform = "translate(0)";
    }
    if (window.scrollY >= pricing.offsetTop - 200) {
        h1.style.opacity = "1";
        h4.style.opacity = "1";
        p.style.opacity = "1";
        pb1.style.transform = "translate(0)";
        pb2.style.transform = "translate(0)";
        
    }
 }