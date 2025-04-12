function Login()
{
    let username =  document.getElementById("username-value").value;
    let password = document.getElementById("password-value").value;
    console.log(username + " " + password);


    if (username.lenght && password.lenght > 5) 
    {
        window.location.href = "docs.html";
    }

}
