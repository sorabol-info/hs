var stickymenu;


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
window.onload = function()
{
    // 왜 여기에 초기화를 시키면 적용이 안되는 것일까? 자료형이 let이라서? 블럭단위라서?
}
 

window.addEventListener("scroll", function(e)
{
    stickymenu = document.getElementsByClassName("menu-bar")[0];


    if(window.pageYOffset >= /*stickymenuOffset*/ 300)
    {
        stickymenu.classList.add("sticky");
        stickymenu.classList.add("fadeIn");
        // sideMenu.classList.add("fadeIn");

    }
    else if(window.pageYOffset /*< stickymenuOffset*/ < 300)
    {
        stickymenu.classList.remove("sticky");
        stickymenu.classList.remove("fadeIn");
        // sideMenu.classList.remove("fadeIn");       

    }

});

function yesorno(){

	msg = "본 페이지 이용시, 데이터 사용량이 많습니다. 되도록 WIFI를 이용해주세요. 이동하시겠습니까?";

	if(confirm(msg)!=0){
        window.open("https://look360.kr/vr/sorabolhs/sorabol_hs/8383","_blank")
		// Yes시 동작하는 기능

	} else{
        return;
		// No시 동작하는 기능
	}
}

///*----------------------new ver. slide code---------*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}