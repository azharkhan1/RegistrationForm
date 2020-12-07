var userPasswords = ["azhar"]
var userEmail = ["azharkhan@gmail.com"];
var usersArr = ["azhar"];
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
        localStorage.setItem("user", JSON.stringify(usersArr));
        localStorage.setItem("userPasswords", JSON.stringify(userPasswords));
        localStorage.setItem("userEmail", JSON.stringify(userEmail));
        window.location.href = "login.html"
    }

    else {
        alert("email already exists");
    }
    return false;
}


userEmail = JSON.parse(localStorage.getItem("userEmail"));
userPasswords = JSON.parse(localStorage.getItem("userPasswords"));
usersArr = JSON.parse(localStorage.getItem("usersArr"));


const check = () => {

    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if (userPasswords.indexOf(password) === -1 || userEmail.indexOf(email) === -1) {
        alert("Wrong Password or email");
        console.log("ye wala chalrha hai");

    }
    else {
        currIndex = userEmail.indexOf(email);
        localStorage.setItem("currIndex", JSON.stringify(currIndex));
        window.location.href = "dashboard.html";
       
    }
    return false;
}



const loginSuccess = () => {
    currIndex = localStorage.getItem("currIndex");
    currIndex = parseInt(currIndex);
    console.log(currIndex);
    document.getElementById("loginemail").innerHTML = userEmail[currIndex];
    document.getElementById("name").innerHTML = usersArr[currIndex];
}

const logout = ()=>{
        window.location.href="login.html";
}