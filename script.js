let valid = true;

// Clear previous error messages
document.getElementById("nameError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("phoneError").textContent = "";
document.getElementById("dobError").textContent = "";
document.getElementById("genderError").textContent = "";
document.getElementById("ageError").textContent = "";
document.getElementById("passwordError").textContent = "";
document.getElementById("confirmPasswordError").textContent = "";
document.getElementById("addressError").textContent = "";
document.getElementById("cityError").textContent = "";

// Name Validation
var nme = document.getElementById("name").value.trim();
if (nme === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    document.getElementById("name").focus();
    valid = false;
}

// Email Validation
var email = document.getElementById("email").value.trim();
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    if (valid) document.getElementById("email").focus();
    valid = false;
}

// Phone Number Validation
var phone = document.getElementById("phone").value.trim();
if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
    if (valid) document.getElementById("phone").focus();
    valid = false;
}

// Date of Birth Validation
var dob = document.getElementById("dob").value;
if (dob === "") {
    document.getElementById("dobError").textContent = "Date of birth is required.";
    if (valid) document.getElementById("dob").focus();
    valid = false;
}

// Gender Validation
var gender = document.getElementById("gender").value;
if (gender === "") {
    document.getElementById("genderError").textContent = "Please select a gender.";
    if (valid) document.getElementById("gender").focus();
    valid = false;
}

// Age Validation
var age = document.getElementById("age").value.trim();
if (isNaN(age) || age < 1 || age > 120) {
    document.getElementById("ageError").textContent = "Age must be between 1 and 120.";
    if (valid) document.getElementById("age").focus();
    valid = false;
}

// Password Validation
var password = document.getElementById("password").value.trim();
if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    if (valid) document.getElementById("password").focus();
    valid = false;
}

// Confirm Password Validation
var confirmPassword = document.getElementById("confirmPassword").value.trim();
if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    if (valid) document.getElementById("confirmPassword").focus();
    valid = false;
}

// Address Validation
var address = document.getElementById("address").value.trim();
if (address === "") {
    document.getElementById("addressError").textContent = "Address is required.";
    if (valid) document.getElementById("address").focus();
    valid = false;
}

// City Validation
var city = document.getElementById("city").value.trim();
if (city === "") {
    document.getElementById("cityError").textContent = "City is required.";
    if (valid) document.getElementById("city").focus();
    valid = false;
}

// Final check
if (valid) {
    alert("Registration Successful!");
}
