// Javascript for menu toggle
const menuItems = document.getElementById("menu");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "250px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}

//Javascript for acccount page
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var indicator = document.getElementById("indicator");
var loginBtn = document.getElementById("loginbtn");
var registerBtn = document.getElementById("registerbtn");

var login = () => {
    loginForm.style.transform = "translateX(430px)";
    registerForm.style.transform = "translateX(430px)";
    indicator.style.transform = "translateX(0px)";
}

var register = () => {
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(120px)";
}



