

// dday 종료일자 설정 <중간고사, 기말고사 1,2 학기 변수 따로 만들기>
const countDownDate = new Date("February 16, 2019 06:00:00").getTime();


// 1초마다 갱신
const x = setInterval(function()
{

    // 오늘 날짜 등록
    const now =  new Date().getTime();

    // 종료일자에서 현재일자를 뺀 시간
    const distance = countDownDate - now;
    
    // 각 변수에 일, 시, 분, 초를 등록
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    // const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("exam-day")[0].innerHTML = "제작 마감까지 " + d + "일 남았습니다."
})