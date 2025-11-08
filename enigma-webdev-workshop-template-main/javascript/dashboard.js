const username = localStorage.getItem("username");


const welcome = document.getElementById("welcome");
welcome.textContent = "Welcome, " + username + "!";