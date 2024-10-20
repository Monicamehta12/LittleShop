//javascript for registration 
var regBtn = document.getElementById("reg-submit");

var userDetails = [];

var submitRegistration = function (e) {
    e.preventDefault();
    var fname = document.getElementById("r-username").value;
    var email = document.getElementById("r-email").value;
    var passwd = document.getElementById("r-pswd").value;
    var cpswd = document.getElementById("confirm-pswd").value;

    console.log(fname, email, passwd);

    if (fname == "" || email == "" || passwd == "" || cpswd == "") {
        swal("Opps!", "All input fields are required", "error");
    }
    else if (passwd !== cpswd) {
        swal("Opps!", "Password not matching", "error");
    }
    else {
        var user = {
            "firstname": fname,
            "email": email,
            "password": passwd,
            "confirmpswd": cpswd
        }

        userDetails.push(user);

        //sets all data on local storage
        localStorage.setItem("Users", JSON.stringify(userDetails));
        swal("Good job!", "Registration Successful!", "success");
    }

    fname = "";
    email = "";
    passwd = "";
    cpswd = "";
}

regBtn.onclick = submitRegistration;

