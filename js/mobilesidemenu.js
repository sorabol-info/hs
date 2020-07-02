let mobileNav;
let mainContainer;


window.addEventListener("load", function(){
    mobileNav = document.getElementsByClassName("menu-side")[0];
    mainContainer = document.getElementsByClassName("main-container")[0];
})

function openNav()
{

    console.log(mainContainer);
    mobileNav.style.width = "100%";
}

function closeNav()
{
    mobileNav.style.width = "0";
}