function signUp() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let homeTown = document.getElementById("homeTown");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordRepeat = document.getElementById("passwordRepeat");
    let welcome = `${firstName.value}, welcome!`;

document.getElementById("false").innerHTML="";
if (firstName.value == "") {
    document.getElementById("false").innerHTML += "Please enter your first name";
} else if (lastName.value == "") {
    document.getElementById("false").innerHTML += "Please enter your last name";
} else if (homeTown.value == "") {
    document.getElementById("false").innerHTML += "Please enter your hometown";
} else if (email.value == "") {
    document.getElementById("false").innerHTML += "Please enter your email";
} else if (password.value == "") {
    document.getElementById("false").innerHTML += "Please enter the password";
} else if (passwordRepeat.value != password.value) {
    document.getElementById("false").innerHTML += "Passwords are not matching";
} else {
    document.getElementById("welcome").innerHTML = welcome;
}
}
