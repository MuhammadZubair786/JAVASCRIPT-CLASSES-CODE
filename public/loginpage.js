console.log(firebase)

var email = document.getElementById("email")
var password = document.getElementById("password")
var signIn = document.getElementById("signIn")


signIn.addEventListener("click", async function asyn(){
   await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
   .then((user)=>{
    console.log(user.user.uid)
    localStorage.setItem("userId",user.user.uid)
    window.location.replace("mainpage.html")

   })
   .catch((error)=>{
      localStorage.clear()


    alert(error.message)
   })
   
})
