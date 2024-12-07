import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, push, ref, set,get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3g3GdkmO2ohA3C5Jp3vzrb8z3JGBmNOE",
  authDomain: "class-1-3-try-best.firebaseapp.com",
  databaseURL: "https://class-1-3-try-best-default-rtdb.firebaseio.com",
  projectId: "class-1-3-try-best",
  storageBucket: "class-1-3-try-best.firebasestorage.app",
  messagingSenderId: "146094700059",
  appId: "1:146094700059:web:0a531564a66224ff0caabe"
};

let id =document.getElementById("btn")
console.log(id)
let showdata = document.getElementById("data")
console.log(showdata)

id.addEventListener("click",function(){
  addData()}
)

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
console.log(database)


export const addData = async () => {
  const coursekey = push(ref(database, "courses"))
  let object = {
    name: "smit",
    course: " react course",
    coursekey: coursekey.key
  }
  console.log(object)

  await set(ref(database,`courses/${coursekey.key}`),object)
  console.log("data add")

}

const getData=()=>{
  const coursesRef = ref(database, 'courses');

  get(coursesRef).then((snap)=>{
    console.log(snap.val())
    let values = Object.values(snap.val())
    console.log(values)
    values.map((v,i)=>{
      console.log(v)
      showdata.innerHTML+=`
      <h1>${v.course}</h1>
      `

    })
  })
}

getData()