
const submit = document.querySelector(".submit");


function signUp() {
    const uid = document.querySelector("#suid").value.trim();
    const email = document.querySelector("#semailid").value.trim();
    const pswd = document.querySelector("#spswd").value.trim();
    const cpswd = document.querySelector("#scpswd").value.trim();


    if (!uid || !email || !pswd || !cpswd) {
        alert("Please fill the form.");
        return;
    }
    if (pswd !== cpswd) {
        alert("Password doesn't match.");
        return;
    }

    const user = {
        uid, email, pswd
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert('Sign up successful! Redirecting to login...');
    window.location.href = "login.html";
}

submit.addEventListener("click", signUp);


// const eye = document.querySelector(".eye");



