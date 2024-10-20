
//javascript for login 
var loginBtn = document.getElementById("login-submit");

var users = [];

var submitLogin = function (event) {
    event.preventDefault();
    const loginEmail = document.getElementById("l-email").value;
    const loginPasswd = document.getElementById("l-pswd").value;

    if (loginEmail == "" || loginPasswd == "") {
        swal("Opps!", "All input fields are required", "error");
    }
    else {
        var regUsers = localStorage.getItem("Users");
        var data = JSON.parse(regUsers);
        var logindata = data.find((item) => item.email === loginEmail && item.password === loginPasswd);
        console.log("logindata", logindata);
        console.log(data);
        if (logindata == null) {
            swal("Oops!", "No such user exists", "error");
        }
        else if (logindata) {
            swal({
                title: "Welcome!",
                text: "You have successfully logged in.",
                icon: "success",
                button: "OK",
              }).then(() => {
                window.location.href = "products.html";
              });
        }
        else {
            swal("Oops!", "Incorrect email or password", "error");
        }
    }
}

loginBtn.onclick = submitLogin;