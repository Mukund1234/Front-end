function myFunction() {
    const loginForm = document.getElementById("login");

    const username = loginForm.uid.value;
    const password = loginForm.pwd.value;

    var storedId = localStorage.getItem('email');
    var storedPwd = localStorage.getItem('pwd');

    if (username === storedId && password === storedPwd) {
        alert("You have successfully logged in.");
        // window.open.("http://www.google.com" ,"_self");
        window.open("https://www.google.com");
        // window.open("https://google.com");
    } else {
        alert("User Id or Passward is Invalid");
    }


    // window.open("https://www.google.com");
    // alert("Hello! I am an alert box!" + username + password );

}


// var storedName = localStorage.getItem('name');
// var storedPw = localStorage.getItem('pw');

// // entered data from the login-form
// var userName = document.getElementById('userName');
// var userPw = document.getElementById('userPw');

// // check if stored data from register-form is equal to data from login form
// if (userName.value !== storedName || userPw.value !== storedPw) {
//     alert('ERROR');
// } else {
//     alert('You are loged in.');
// }