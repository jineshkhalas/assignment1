const login = document.querySelector(".Login");

function Login() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const uid = document.querySelector("#luid").value.trim();
    const pswd = document.querySelector("#lpswd").value.trim();

    if (savedUser && uid === savedUser.uid && pswd === savedUser.pswd) {
        alert('Login successful! Redirecting to website...');
        // Correct path to your Website/index.html
        window.location.href = "./Website/index.html";
    } else {
        alert("Access Denied. Username or Password is incorrect");
    }
}

login.addEventListener("click", Login);
