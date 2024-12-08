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

let projects = document.getElementById("projects")


const getProjects = () => {
    const projectref = ref(database, "Projects")
    get(projectref).then((snap) => {
        console.log(snap.val())
        var values = Object.values(snap.val())
        for(var item of values){
            console.log(item)
            projects.innerHTML+=`
            <div style="width: 400px;display: inline-block;border: 1px solid grey;height:100px">
            <h1>${item.
                projectname}</h1>
            <a href=${item.
                projectlink
                }>Open link </a>
            </div>
            `
        }
    })
}

getProjects()
