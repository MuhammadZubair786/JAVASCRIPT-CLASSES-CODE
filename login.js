var email = document.getElementById("email")
var username = document.getElementById("name")
var btn1 = document.getElementById("logout")


window.onload = function () {
    // function completeSignIn(url) {
        // Check if the URL contains the sign-in link
        if (auth.isSignInWithEmailLink(url)) {
            const email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                alert('No email found!');
                return;
            }
            
            auth.signInWithEmailLink(email, url)
                .then((result) => {
                    // User signed in successfully
                    console.log('User signed in:', result.user);
                    // Clear email from local storage
                    window.localStorage.removeItem('emailForSignIn');
                })
                .catch((error) => {
                    console.error('Error completing sign-in:', error);
                });
        }
    // }
    
}

btn1.addEventListener("click", function () {
    localStorage.clear()
    window.location.href = "index.html"
})



