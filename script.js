document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("nameError");
    if (!/^[a-zA-Z ]+$/.test(name)) {
        nameError.textContent = "Only alphabets and spaces allowed.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    
    let age = document.getElementById("age").value;
    let ageError = document.getElementById("ageError");
    if (age < 18 || age > 60) {
        ageError.textContent = "Age must be between 18 and 60.";
        isValid = false;
    } else {
        ageError.textContent = "";
    }
    
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    
    let pincode = document.getElementById("pincode").value;
    let pincodeError = document.getElementById("pincodeError");
    if (!/^[0-9]{6}$/.test(pincode)) {
        pincodeError.textContent = "PIN Code must be 6 digits.";
        isValid = false;
    } else {
        pincodeError.textContent = "";
    }
    
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    
    if (isValid) {
        alert("Registration successful!");
    }
});
