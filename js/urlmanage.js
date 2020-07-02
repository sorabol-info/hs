function url_confirm_road()
{
    var confirm_move = confirm("360도 파노라마 뷰어입니다. 데이터 소진량이 많을 수 있습니다.\n이동하시겠습니까?");
    if(confirm_move == true)
    {
       window.open('https://look360.kr/vr/sorabolhs/sorabol_hs/8388', '_blank');
    }
}

function alertMessage(message)
{
    alert(message);
}