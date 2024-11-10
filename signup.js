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
var file =  imageUpload.files[0]
if(!file){
   alert("please select image")

}
else{
   console.log(file)
   const CLOUDNAME = "didpi5wyv";
   const UNSIGNEDUPOLOAD = "hvBDVBASVDBAVS";
   const URL= 'https://api.cloudinary.com/v1_1/'+CLOUDNAME+"/upload"
   const formData = new FormData()
   formData.append("upload_preset",UNSIGNEDUPOLOAD)
   formData.append("file",file)

   try{
      fetch(URL,{
         method:"POST",
         body:formData,
         


      })
      .then((resp)=>resp.json())
      .then((data)=>{
         console.log(data.secure_url)
      })
   }
   catch(e){

   }


   




}



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

// gsignin.addEventListener("click", function () {
//    console.log("test")
//    provider.setCustomParameters({
//       prompt: 'select_account' // Forces the account chooser to show
//    });
//    firebase.auth()
//       .signInWithPopup(provider)
//       .then((result) => {

//          var credential = result.credential;
//          var token = credential.accessToken;
//          var user = result.user;
//          console.log(user.photoURL)

//       }).catch((error) => {
//          console.log(error)

//          var errorCode = error.code;
//          var errorMessage = error.message;

//          var email = error.email;

//          var credential = error.credential;

//       });
// })



// firebase.auth().onAuthStateChanged((user) => {
//    if (user) {
//       console.log("User is signed in:", user);
//    } else {
//       console.log("No user is signed in.");
//    }
// });

async function Googlesignin(){
   var provider = new  firebase.auth.GoogleAuthProvider()
   provider.setCustomParameters({
      prompt: 'select_account' // Forces the account chooser to show
    });
   await firebase.auth().signInWithPopup(provider)
   .then(async (result)=>{
      console.log(result)
      var user = result.user
      var obj = {
         email:user.email,
         "name":user.displayName,
         "photo":user.photoURL,
         "userId":user.uid

      }
      console.log(obj)
      await firebase.database().ref("users").child(user.uid).set(obj)
      localStorage.setItem("userId",user.uid)
      window.location.replace("mainpage.html")


   })
   .catch((e)=>{
      console.log(e)

   })
   // provider.setCustomParamater()
}

