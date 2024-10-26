var email = document.getElementById("email")
var username = document.getElementById("name")
var btn1 = document.getElementById("logout")


window.onload = function () {
    email.innerText = localStorage.getItem("email")
    username.innerText = localStorage.getItem("username")
    console.log("test")
    console.log(email)
    if (!localStorage.getItem("email")) {
        window.location.href = "index.html"
    }
}

btn1.addEventListener("click", function () {
    localStorage.clear()
    window.location.href = "index.html"
})



