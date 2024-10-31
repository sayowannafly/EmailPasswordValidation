var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");
var passwordField = document.getElementById("password-field");
var passwordLabel = document.getElementById("password-label");
var passwordError = document.getElementById("password-error");

function validateEmail(){
if (emailField.value === "") {
    emailLabel.style.bottom = "15px";
    emailError.innerHTML = "";
    emailField.style.borderBottomColor = ""; 
    return false;
}
        
emailLabel.style.bottom = "45px";

if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Please enter a valid email";
    emailField.style.borderBottomColor = "red";
    emailError.style.top = "120%";
    return false;
}
        
emailError.innerHTML = "";
emailField.style.borderBottomColor = "green";
emailError.style.top = "100%";
return true; 
}

function validatePassword(){
    if (passwordField.value === "") {
        passwordLabel.style.bottom = "15px";
        passwordError.innerHTML = "";
        passwordField.style.borderBottomColor = ""; 
        return false;
    }

    passwordLabel.style.bottom = "45px";

    if (!passwordField.value.match(/^[A-Za-z][A-Za-z0-9!@#$%^&*]*$/)) {
        passwordError.innerHTML = "Please enter a valid password";
        passwordField.style.borderBottomColor = "red";
        passwordError.style.top = "120%";
        return false;
    }
        
    passwordError.innerHTML = "";
    passwordField.style.borderBottomColor = "green";
    passwordError.style.top = "100%";
    return true; 
}

function checkValidate() {
    if (validateEmail() && validatePassword()) {
        alert("Verification code has been sent to " + emailField.value);
    } else {
        alert("Please make sure both fields are filled out correctly.");
    }
}