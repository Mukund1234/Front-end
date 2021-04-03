function myFunction() {
    const loginForm = document.getElementById("login");

    const username = loginForm.uid.value;
    const password = loginForm.pwd.value;

    if (username === "shalini@gym.begusarai" && password === "123") {
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