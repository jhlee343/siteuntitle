function login(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    if(id.value==""||pw.value==""){
        alert("로그인 할 수 없습니다.")
    }
    else {
        location.href='home.html';
    }
}
function back(){
    location.href='login.html'
}
function createID(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    var r_pw = document.querySelector('#r_pw');

    if(id.value==""||pw.value==""||r_pw ==""){
        alert("회원가입 불가")
    }
    else {
        if(pw.value !== r_pw.value){
            alert("비밀번호 입력 오류")
        }
        else{
            location.href='login.html'
        }
    }
}
function moveJoin(){
    location.href='join.html';
}
function btnAlert(){
    alert("Login First Plz")
}

function moveSearch(){
    location.href='Search.html';
}