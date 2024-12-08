import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, update, get, child, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyA3g3GdkmO2ohA3C5Jp3vzrb8z3JGBmNOE",
    authDomain: "class-1-3-try-best.firebaseapp.com",
    databaseURL: "https://class-1-3-try-best-default-rtdb.firebaseio.com",
    projectId: "class-1-3-try-best",
    storageBucket: "class-1-3-try-best.firebasestorage.app",
    messagingSenderId: "146094700059",
    appId: "1:146094700059:web:0a531564a66224ff0caabe"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let btn = document.getElementById("project")
let name = document.getElementById("projectname")
let projectlink = document.getElementById("projectlink")


let email = document.getElementById("email")
let username = document.getElementById("name")
let btnnew = document.getElementById("about")

btn.addEventListener("click", async function () {
    let key = push(ref(database, "Projects"))
    let object = {
        projectname: name.value,
        projectlink: projectlink.value,
        key: key.key

    }
    await set(ref(database, `Projects/${key.key}`), object)
    console.log("Add Firebase")
})


btnnew.addEventListener("click", async function () {
    // let key = push(ref(database, "About"))
    let object = {
        projectname: name.value,
        projectlink: projectlink.value,
        key: key.key

    }

    await push(ref(database, `Projects/${key.key}`), object)
    console.log("Add Firebase")
})



