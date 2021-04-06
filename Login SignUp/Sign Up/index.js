function Signup() {

    const Form = document.getElementById("signup");
    const fname = Form.fname.value;
    const mname = Form.mname.value;
    const lname = Form.lname.value;
    const dob = Form.dob.value;
    const male = Form.male.value;
    const female = Form.female.value;
    const other = Form.other.value;
    const Mobile = Form.Mobile.value;
    const email = Form.email.value;
    const pwd = Form.pwd.value;
    const cpwd = Form.cpwd.value;



    if (pwd.value === cpwd.value) {
        alert("Registration Sucessful");
        localStorage.setItem('name', fname);
        localStorage.setItem('mname', mname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('dob', dob);
        localStorage.setItem('male', document.getElementById("male").checked);
        localStorage.setItem('female', document.getElementById("female").checked);
        localStorage.setItem('other', document.getElementById("other").checked);
        localStorage.setItem('Mobile', Mobile);
        localStorage.setItem('email', email);
        //localStorage.setItem('cpwd', cpwd);
        localStorage.setItem('pwd', pwd);
        window.open("http://127.0.0.1:5500/Login/Login.html");
        // window.location.href = "http://127.0.0.1:5500/Login/Login.html";
        // window.location.href = "/Login/Login.html";
    } else {
        alert("User Id or Passward is Invalid");
    }
    // window.open("https://www.google.com");
}