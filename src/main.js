function isValidEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateForm() {
    let email = document.forms["lgn_form"]["email"].value;
    let password = document.forms["lgn_form"]["pswd"].value;
    if (email === "") {
        alert("아이디를 입력해 주세요");
        return false;
    }
    else if (!isValidEmail(email)){
        alert("이메일 형식이 바르지 못합니다");
        return false;
    }
    if (password === "") {
        alert("비밀번호를 입력해 주세요");
        return false;
    }
    return true;
}


window.onload = function(){
    const email = document.getElementById('email')
    const login = document.getElementById('submit')
    let aflgn = document.getElementById('after_login')

    login.addEventListener('click', (event) => {
        event.preventDefault()

        if (validateForm()) {
            document.getElementById('login').style.display = "none"
            let emailValue = email.value
            let name = emailValue.substring(0, emailValue.indexOf('@'))
            aflgn.innerHTML = name + "님 환영합니다"
        }
    })

}