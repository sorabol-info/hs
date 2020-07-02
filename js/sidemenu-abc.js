//sidemenu-a
let contentA;
let sideMenuA;


window.addEventListener("load", function()
{
    sideMenuA = document.getElementsByClassName("side-menu-a")[0];

})

window.addEventListener("scroll", function(e)
{


    if(window.pageYOffset >= 100)
    {
        sideMenuA.classList.add("fadeIn");
    }
    else if(window.pageYOffset < 100)
    {
        sideMenuA.classList.remove("fadeIn");
    }
})

function changeContentA(number)
{
    console.log(number);
    console.log(contentA);



    if(contentA == undefined)
    {
        // rulepage 기준
        document.getElementsByClassName("rule-main-box-a")[0].classList.add("none-display");

        contentA = document.getElementsByClassName("content-boxA")[number];
        contentA.classList.remove("none-display");
        contentA.classList.add("fadeIn");
    }
    else if(contentA != undefined)
    {
        // 기존 contentA에서 fadeIn 삭제, none-display 추가
        contentA.classList.remove("fadeIn");
        contentA.classList.add("none-display");

        // 신규 contentA에서 fadeIn 추가, none-display 삭제
        contentA = document.getElementsByClassName("content-boxA")[number];
        contentA.classList.remove("none-display");
        contentA.classList.add("fadeIn");
    }
}
//sidemenu-b
let contentB;
let sideMenuB;


window.addEventListener("load", function()
{
    sideMenuB = document.getElementsByClassName("side-menu-b")[0];

})

window.addEventListener("scroll", function(e)
{


    if(window.pageYOffset >= 100)
    {
        sideMenuB.classList.add("fadeIn");
    }
    else if(window.pageYOffset < 100)
    {
        sideMenuB.classList.remove("fadeIn");
    }
})

function changeContentB(number)
{
    console.log(number);
    console.log(contentB);



    if(contentB == undefined)
    {
        // rulepage 기준
        document.getElementsByClassName("rule-main-box-b")[0].classList.add("none-display");

        contentB = document.getElementsByClassName("content-boxB")[number];
        contentB.classList.remove("none-display");
        contentB.classList.add("fadeIn");
    }
    else if(contentB != undefined)
    {
        // 기존 contentB에서 fadeIn 삭제, none-display 추가
        contentB.classList.remove("fadeIn");
        contentB.classList.add("none-display");

        // 신규 contentB에서 fadeIn 추가, none-display 삭제
        contentB = document.getElementsByClassName("content-boxB")[number];
        contentB.classList.remove("none-display");
        contentB.classList.add("fadeIn");
    }
}
//sidemenu-c
let contentC;
let sideMenuC;


window.addEventListener("load", function()
{
    sideMenuC = document.getElementsByClassName("side-menu-c")[0];

})

window.addEventListener("scroll", function(e)
{


    if(window.pageYOffset >= 100)
    {
        sideMenuC.classList.add("fadeIn");
    }
    else if(window.pageYOffset < 100)
    {
        sideMenuC.classList.remove("fadeIn");
    }
})

function changeContentC(number)
{
    console.log(number);
    console.log(contentC);



    if(contentC == undefined)
    {
        // rulepage 기준
        document.getElementsByClassName("rule-main-box-c")[0].classList.add("none-display");

        contentC = document.getElementsByClassName("content-boxC")[number];
        contentC.classList.remove("none-display");
        contentC.classList.add("fadeIn");
    }
    else if(contentC != undefined)
    {
        // 기존 contentC에서 fadeIn 삭제, none-display 추가
        contentC.classList.remove("fadeIn");
        contentC.classList.add("none-display");

        // 신규 contentC에서 fadeIn 추가, none-display 삭제
        contentC = document.getElementsByClassName("content-boxC")[number];
        contentC.classList.remove("none-display");
        contentC.classList.add("fadeIn");
    }
}
