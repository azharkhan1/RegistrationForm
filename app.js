var userPasswords = ["haha"]
var userEmail = ["azharpathan@gmail.com"];
var currentUsername = "";


const signup = () => {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;

    if (userEmail.indexOf(email) === -1) {
        currentUsername += name;
        userEmail.push(email);
        userPasswords.push(password);
        console.log(userEmail);
        console.log(userPasswords);
        window.location.href="login.html";
    }

    else {
     alert("email already exists");
    }
    return false;


}

const check = () => {
    for (let i = 0; i < userEmail.length; i++) {
        userEmail[i] = userEmail[i].toLowerCase()
        console.log("current user===>", userEmail[i]);
    }

    var passsword = document.getElementById("password").value;
    var email = document.getElementById("email").value;

 if (userPasswords.indexOf(passsword)===-1 || userEmail.indexOf(email)===-1)
 {
    alert("Wrong Password or email");
    console.log("ye wala chalrha hai");
 }

        else {
           alert("logged in succesfully")
           window.location.href = "index.html";
        }
        return false;
    }
