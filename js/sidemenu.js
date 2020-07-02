let content;
let sideMenu;

window.onload = function()
{
    sideMenu = document.getElementsByClassName("side-menu")[0];
}

window.addEventListener("scroll", function(e)
{
    if(window.pageYOffset >= 300)
    {
        sideMenu.classList.add("fadeIn");
    }
    else if(window.pageYOffset < 300)
    {
        sideMenu.classList.remove("fadeIn");  
    }
})

function changeContent(number)
{
    console.log(number);  
    console.log(content);



    if(content == undefined)
    {
        // rulepage 기준
        document.getElementsByClassName("rule-main-box")[0].classList.add("none-display");

        content = document.getElementsByClassName("content-box")[number];
        content.classList.remove("none-display");
        content.classList.add("fadeIn");
    }
    else if(content != undefined)
    {
        // 기존 content에서 fadeIn 삭제, none-display 추가
        content.classList.remove("fadeIn");
        content.classList.add("none-display");

        // 신규 content에서 fadeIn 추가, none-display 삭제 
        content = document.getElementsByClassName("content-box")[number];
        content.classList.remove("none-display");
        content.classList.add("fadeIn");
    }   
}
