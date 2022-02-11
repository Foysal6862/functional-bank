document.getElementById('login-submit').addEventListener('click', function () {
    //    get user email
    const emailField = document.getElementById('user-email');
    let userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    let userPassword = passwordField.value;   
    // check email and password
    if (userEmail = "foysal@gmail.com" && userPassword == "1234"){
        window.location.href = "banking.html";
    }
})

