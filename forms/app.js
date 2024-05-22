function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var valid = true;

    if (firstName === "") {
        document.getElementById('firstNameError').style.visibility = "visible";
        document.getElementById('firstName').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('firstNameError').style.visibility = "hidden";
        document.getElementById('firstName').style.borderColor = "green";
    }

    if (lastName === "") {
        document.getElementById('lastNameError').style.visibility = "visible";
        document.getElementById('lastName').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('lastNameError').style.visibility = "hidden";
        document.getElementById('lastName').style.borderColor = "green";
    }

    if (phoneNumber.length !== 10 || !['6', '7', '8', '9'].includes(phoneNumber.charAt(0))) {
        document.getElementById('phoneNumberError').style.visibility = "visible";
        document.getElementById('phoneNumber').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('phoneNumberError').style.visibility = "hidden";
        document.getElementById('phoneNumber').style.borderColor = "green";
    }

    if (password.length < 8 || password.length > 15) {
        document.getElementById('passwordError').style.visibility = "visible";
        document.getElementById('password').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('passwordError').style.visibility = "hidden";
        document.getElementById('password').style.borderColor = "green";
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.visibility = "visible";
        document.getElementById('confirmPassword').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').style.visibility = "hidden";
        document.getElementById('confirmPassword').style.borderColor = "green";
    }

    if (valid) {
        window.location.href = 'result.html';
    }

    return false;
}
