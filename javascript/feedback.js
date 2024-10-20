//javascript for feedback 
var submitBtn = document.getElementById("f-submit");

var submitFeedback = function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    

    console.log("services", service)
}

submitBtn.onclick = submitFeedback;