var userPasswords = ["azhar", "123"]
var userEmail = ["azharkhan@gmail.com", "naveedbhai@gmail.com"];
var usersArr = ["azhar", "naveedbhai"];
var currentUsername = "";
var currIndex;

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
        localStorage.setItem("userEmail", JSON.stringify(userEmail));
        localStorage.setItem("userPasswords", JSON.stringify(userPasswords));
        localStorage.setItem("usersArr", JSON.stringify(usersArr));
        window.location.href = "login.html"
    }

    else {
        alert("email already exists");
    }
    return false;
}





const check = () => {

    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var index = false;

    for (let i = 0; i < userEmail.length; i++) {
        if (email === userEmail[i]) {
            index = i
            localStorage.setItem("currIndex", JSON.stringify(index));
            break;
        }
    }
    if (index === false) {
        alert("password or email not found");
    }
    else if (password === userPasswords[index]) {
        alert("logged in successfully", index);
        window.location.href = "dashboard.html";

    }

    else {
        alert("password or email not found");
    }
    return false;
}


userEmail = JSON.parse(localStorage.getItem("userEmail"));
userPasswords = JSON.parse(localStorage.getItem("userPasswords"));
usersArr = JSON.parse(localStorage.getItem("usersArr"));
var index = JSON.parse(localStorage.getItem("currIndex"));

const loginSuccess = () => {
    index = parseInt(index);
    console.log(index);
    document.getElementById("loginemail").innerHTML = userEmail[index];
    document.getElementById("name").innerHTML = usersArr[index];
}

const logout = () => {
    window.location.href = "login.html";
}