let contest;
let gradeMenu;


window.addEventListener("load", function()
{
    gradeMenu = document.getElementsByClassName("gradeselector")[0];

})

function changeGrade(number)
{
    console.log(number);
    console.log(contest);

    if(contest == undefined)
    {

        document.getElementsByClassName("contest-main-null")[0].classList.add("none-display");

        contest = document.getElementsByClassName("Grade-page")[number];
        contest.classList.remove("none-display");
        contest.classList.add("fadeIn");
        document.getElementById('exsentence').scrollIntoView();
    }
    else if(contest != undefined)
    {
        // 기존 contest에서 fadeIn 삭제, none-display 추가
        contest.classList.remove("fadeIn");
        contest.classList.add("none-display");

        // 신규 contest에서 fadeIn 추가, none-display 삭제
        contest = document.getElementsByClassName("Grade-page")[number];
        contest.classList.remove("none-display");
        contest.classList.add("fadeIn");
        document.getElementById('exsentence').scrollIntoView();
    }
}
