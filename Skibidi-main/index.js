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


function Settings()
{
    document.getElementById("Terminarz").style.display = "none";
    document.getElementById("notes").style.display = "none";
    document.getElementById("settings").style.display = "flex";

}

function Notes()
{
    document.getElementById("Terminarz").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("notes").style.display = "block";
    document.getElementById("menu-note").style.display = "none";

}

function Terminarz()
{
    document.getElementById("notes").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("Terminarz").style.display = "flex";
}

function CreateNote()
{
    document.getElementById("notatka").style.display = "none";
    document.getElementById("notes-created").style.display = "none";
    document.getElementById("menu-note").style.display = "flex";
    document.getElementById('editor').reset();
}