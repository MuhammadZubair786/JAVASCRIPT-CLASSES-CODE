console.log(firebase)

var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signIn = document.getElementById("signIn")

signup.addEventListener("click", async function (){
   await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
   .then(async (user)=>{
    console.log(user.user.uid)

    var userObject = {
      "name":"asad",
      email:email.value,
      password:password.value,
      age:23,
      userId : user.user.uid
    }
  await   firebase.database().ref("users").child(user.user.uid).set(userObject)
  alert("user save database")


   })
   .catch((error)=>{
    alert(error.message)
   })
   
})

signIn.addEventListener("click", async function asyn(){
   await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
   .then((user)=>{
    console.log(user.user.uid)
   })
   .catch((error)=>{
    alert(error.message)
   })
   
})
