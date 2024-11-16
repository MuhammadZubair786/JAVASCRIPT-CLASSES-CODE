console.log(firebase)
var email = document.getElementById("email")
var password = document.getElementById("password")
var nameuser = document.getElementById("name")
var age = document.getElementById("age")
var gsignin = document.getElementById("gsignin")
var imageUpload = document.getElementById("imageUpload")

var signup = document.getElementById("signup")
var signIn = document.getElementById("signIn")

signup.addEventListener("click", async function () {
   var file = imageUpload.files[0]
   if (!file) {
      alert("please select image")

   }
   else if (email.value == "") {
      alert("please enter email")
   }
   else {
      var check = false;
      await firebase.database().ref("users").get().then((snap) => {

         var users = Object.values(snap.val())
         console.log(users)
         for (var i = 0; i < users.length; i++) {
            console.log(users[i].email)
            if (users[i].email == email.value) {
               check = true;
               break;

            }

         }

      })
      if (check == true) {
         alert("already register with this email")

      }
      else {
         console.log(file)
         const CLOUDNAME = "didpi5wyv";
         const UNSIGNEDUPOLOAD = "hvBDVBASVDBAVS";
         const URL = 'https://api.cloudinary.com/v1_1/' + CLOUDNAME + "/upload"
         const formData = new FormData()
         formData.append("upload_preset", UNSIGNEDUPOLOAD)
         formData.append("file", file)

         try {
            fetch(URL, {
               method: "POST",
               body: formData,

            })
               .then((resp) => resp.json())
               .then(async (data) => {
                  console.log(data.secure_url)
                  await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
                     .then(async (user) => {
                        console.log(user.user.uid)

                        var object = {
                           email: email.value,
                           "name": nameuser.value,
                           "photo": data.secure_url,
                           "userId": user.user.uid
                        }
                        await firebase.database().ref("users").child(user.user.uid).set(object)
                        localStorage.setItem("userId", user.user.uid)
                        window.location.replace("mainpage.html")
                     })
                     .catch((error) => {
                        alert(error.message)
                     })

               })
         }
         catch (e) {

         }
      }











   }



})

async function Googlesignin() {
   var provider = new firebase.auth.GoogleAuthProvider()
   provider.setCustomParameters({
      prompt: 'select_account' // Forces the account chooser to show
   });
   await firebase.auth().signInWithPopup(provider)
      .then(async (result) => {
         console.log(result)
         var user = result.user
         var obj = {
            email: user.email,
            "name": user.displayName,
            "photo": user.photoURL,
            "userId": user.uid

         }
         console.log(obj)
         await firebase.database().ref("users").child(user.uid).set(obj)
         localStorage.setItem("userId", user.uid)
         window.location.replace("mainpage.html")


      })
      .catch((e) => {
         console.log(e)

      })
   // provider.setCustomParamater()
}

