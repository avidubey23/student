function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {

  const studentId =
    document.getElementById("studentId").value;

  const password =
    document.getElementById("password").value;

  const message =
    document.getElementById("message");

  if (studentId === "" || password === "") {

    message.innerText =
      "Please enter Student ID and password.";

    message.style.color = "red";

    return;
  }

  message.innerText =
    "Demo login successful!";

  message.style.color = "green";

}
