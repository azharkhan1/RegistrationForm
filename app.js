var userPasswords = ["azhar"]
var userEmail = ["azharkhan@gmail.com"];
var usersArr = ["azhar"];
var currentUsername = "";


const signup = () => {

    var user = document.getElementById("name").value;
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value;
    // var male = document.getElementById("male").value;
    // var female = document.getElementById("female").value;

    if (userEmail.indexOf(email) === -1) {
        userEmail.push(email);
        userPasswords.push(password);
        usersArr.push(user);
        console.log(usersArr);
        localStorage.setItem("userPasswords", JSON.stringify(userPasswords));
        localStorage.setItem("userEmail", JSON.stringify(userEmail));
        window.location.href = "login.html"
    }

    else {
        alert("email already exists");
    }
    return false;
}

   


const check = () => {


    var passsword = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if (userPasswords.indexOf(passsword) === -1 || userEmail.indexOf(email) === -1) {
        alert("Wrong Password or email");
        console.log("ye wala chalrha hai");
        var i = indexOf(password);
        console.log(i);
    }
    else {
        alert("logged in succesfully")
        window.location.href = "index.html";
    }
    return false;
}

