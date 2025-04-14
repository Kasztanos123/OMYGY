let nick = null;
let password = null;

let EditorMode = false;

function Login() {
    let username = document.getElementById("username-value").value;
    let password = document.getElementById("password-value").value;
    console.log("Logowanie: " + username + " " + password);

    let storedPassword = localStorage.getItem(username);

    if (!storedPassword || storedPassword !== password) {
        document.getElementById("error-message").style.display = "block";
    } else {
        window.location.href = "main.html";
    }
}

function SettingsUpdate()
{
    let storedPassword = localStorage.getItem(username);
  
}



function Register() {
    let username = document.getElementById("username-value").value;
    let password = document.getElementById("password-value").value;
    console.log("Rejestracja: " + username + " " + password);

    if (localStorage.getItem(username)) {
        alert("Użytkownik już istnieje!");
        return;
    }

    localStorage.setItem(username, password);

    window.location.href = "login.html";
}


function Notes()
{
    window.location.href = "notesMenu.html";
}

function Terminarz()
{
    document.getElementById("Terminarz").style.display = "flex";
}

function CreateNote()
{
    window.location.href = "notesMenu.html";
}