
// function add(a = 1 ,b =4){
//     console.log(a)
//     console.log(b)

//     return a+b

// }

// console.log(add())
// console.log(add(4))
// console.log(add(6,7))

// template literany
// let a=5;
// let b =10
// console.log("value of a is "+ a+"\n vALUE OF B is "+b+"\n result is :"+(a+b))
// console.log(`
// value of a is ${a}
// value of b is ${b}
// result is ${a+b}
//  `)


// let object = {
//     name : "ali",
//     course : {
//         marks :"100",
//         subject: {
//             name :"english"
//         }
//     }
// }
// let a =5


// console.log(object?.course?.subject?.name2)



// var a = [1,2,3,4,5]
// a.map((val,index)=>{
//     console.log(index)
//     console.log(val)
// })

// var arr = ["asad","ali","omer"]
// arr.keys(),arr.values(),arr.entries()
// for(var [key,value] of arr.entries() ){
// console.log(key,value)
// }

// var students = [
//     {
//         name: "ali",
//         age: 20
//     },
//     {
//         name: "omer",
//         age: 21
//     },
// ]

// students.map((value,index)=>{
//     console.log(value)
//     console.log(index)
// })

// for(var [index,value] of students.entries()){
//     console.log(index,value)
// }

// import { add } from "./add.js"

// const add =(var1,var2)=>{
//     return var1+var2
// }
// let a =10
// let b =20
// let result = add(a,b)
// console.log(result)

import {hellouser} from './add.js'

let ussername = "omer"
let uaserage = 20

console.log(hellouser(ussername,uaserage))


