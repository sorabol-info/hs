let content;
let sideMenu;


window.addEventListener("load", function()
{
    sideMenu = document.getElementsByClassName("side-menu-a")[0]; //사이드메뉴로 사용할 div

})


function changecontent(number)
{
    console.log(number);
    console.log(content);



    if(content == undefined)
    {
        // rulepage 기준
        document.getElementsByClassName("nullbox")[0].classList.add("none-display");

        content = document.getElementsByClassName("content-boxA")[number];
        content.classList.remove("none-display");
        content.classList.add("fadeIn");
    }

    else if(content != undefined)
    {
        // 기존 content에서 fadeIn 삭제, none-display 추가
        content.classList.remove("fadeIn");
        content.classList.add("none-display");

        // 신규 content에서 fadeIn 추가, none-display 삭제
        content = document.getElementsByClassName("content-boxA")[number];
        content.classList.remove("none-display");
        content.classList.add("fadeIn");
    }
}
