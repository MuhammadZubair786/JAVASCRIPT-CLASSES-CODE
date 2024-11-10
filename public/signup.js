console.log(firebase)

var email = document.getElementById("email")
var password = document.getElementById("password")
var nameuser = document.getElementById("name")
var age = document.getElementById("age")
var gsignin = document.getElementById("gsignin")



var signup = document.getElementById("signup")
var signIn = document.getElementById("signIn")

signup.addEventListener("click", async function () {
   await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(async (user) => {
         console.log(user.user.uid)

         var userObject = {
            name: nameuser.value,
            email: email.value,
            password: password.value,
            userId: user.user.uid,
            age: age.value
         }
         await firebase.database().ref("users").child(user.user.uid).set(userObject)
         alert("user save database")
         window.location.href = "loginPage.html"


      })
      .catch((error) => {
         alert(error.message)
      })

})

// signIn.addEventListener("click", async function asyn() {
//    await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//       .then((user) => {
//          console.log(user.user.uid)
//       })
//       .catch((error) => {
//          alert(error.message)
//       })

// })

gsignin.addEventListener("click", function () {
   console.log("test")
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {

         var credential = result.credential;
         var token = credential.accessToken;
         var user = result.user;
         console.log(user.photoURL)

      }).catch((error) => {
         console.log(error)

         var errorCode = error.code;
         var errorMessage = error.message;

         var email = error.email;

         var credential = error.credential;

      });
})

async function signoutfun() {
   try {
     await firebase.auth().signOut();
     console.log("Successfully logged out");
     firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in:", user);
      } else {
        console.log("No user is signed in.");
      }
    });
   } catch (error) {
     console.error("Error during logout:", error);
   }
 }
 
