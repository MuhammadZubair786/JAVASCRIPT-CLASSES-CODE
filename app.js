// var arr =[
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRSXkT2FbW1h_M85PegX9u8XF3NLivq4dag&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FcQBtQ8NkNu2EHmEHUqa_uPdeqF5QXkwMA&s",
//     "https://res.cloudinary.com/saylani-welfare/image/upload/v1647252901/website-images/static/58.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnR2pFvapJfV_WTf9xd7brwdxAwDVkHpAoeA&s",
//     "https://i.ytimg.com/vi/iZEN5qHUWao/maxresdefault.jpg"
// ]
// var imageshow = document.getElementById("imageshow")
// var nextbtn = document.getElementById("next")
// var prebtn = document.getElementById("previous")

// var count=0;

// function Next(){
//     if(count<=3){
//         count+=1
//         imageshow.src=arr[count]
//         prebtn.disabled=false
//         if(count==4){
//             nextbtn.disabled=true
//         }

//     }
//     else{
//         previous()
//     }
// }

// function previous(){
//     if(count>0){
//         count-=1
//         imageshow.src=arr[count]
//         nextbtn.disabled=false
//         if(count==0){
//             prebtn.disabled=true

//         }
//     }
//     else{
//         Next()
//     }


// }

// setInterval => riders  
// settimeout
// var time=  setTimeout(function(){
//     console.log("test")
//     if(count<=3){
//         Next()
//     }
//     else{
//         clearInterval(time)
//     }

// },1000)
// setTimeout(()=>{
//     var randnum = ((Math.random()*1)+1).toFixed()
//     if(randnum=="1"){
//         previous()
//     }
//     else{

//         Next()
//     }


// },1000)
//form validation error show

// var email = document.getElementById("email")
// var password = document.getElementById("password")

// var emailerror = document.getElementById("emailerror")
// var passworderror = document.getElementById("passworderror")

// function submit(){

//     if(email.value=="" && password.value){
//         emailerror.innerText = "please eneter email address";
//         passworderror.innerText = "please eneter password";
//     }
//     else{
//         if(email.value==""){
//             emailerror.innerText = "please eneter email address";
//         }
//         if(password.value==""){

//             passworderror.innerText="please eneter password address"
//         }
//     }


// }


// function checkdata(e,fieldName) {
//    if(fieldName=="email"){
//     if (e.value != "") {
//         emailerror.innerText = ""

//     }
//     else if (e.value == "") {
//         emailerror.innerText = "please eneter email address";

//     }
//    }
//    else if(fieldName=="password"){
//     if (e.value != "") {
//         passworderror.innerText = ""

//     }
//     else {
//         passworderror.innerText = "please eneter password"  
//     }

//    }

// }
var colorName = ["red", "blue", "green", "purple", "yellow"]
var heading = document.getElementById("heading")
var styleDropdown = document.getElementById("font-style")

var oldNumber;
var array =[
    "Haettenschweiler",
    "Times New Roman",
    "Courier"
]

for(var i=0;i<array.length;i++){
    styleDropdown.innerHTML+=`<option>${array[i]}</option>`

}
var input = document.getElementById("input")
function setFamily(){
    console.log(styleDropdown.value)
    heading.style.fontFamily=styleDropdown.value
    input.style.fontFamily=styleDropdown.value

}

function change() {
    var rand = (Math.random() * 4).toFixed()
    console.log("new numnber",rand)
    console.log("old number",oldNumber)

    if (oldNumber == rand) {
        change()
    }
    else {
        heading.style.color = colorName[rand]
        oldNumber = rand
    }

}
var fontSize = 30;
function fontIncreaseDecreases(op){
    console.log(op)
    if(op=="+"){
        heading.style.fontSize=(fontSize+5)+"px"
        input.style.fontSize=(fontSize+5)+"px"
        
        fontSize =fontSize+5
        // input=

    }
    else{
        heading.style.fontSize=(fontSize-5)+"px"
        fontSize =fontSize-5
    }

}

function settext(){
   
   const selection = window.getSelection();
   const selectedText = selection.toString();
   console.log(selectedText)
}

function getValue(e){

    if(e.value){
        heading.style.display="block"
        heading.innerText=e.value

    }
    else{
        heading.style.display="none"
        heading.innerText=""
    }

}
// var para = document.getElementById("para")

// var width=100;
// var height = 30; 

// function Showpara(){
//     para.style.width=width+"px"
//     para.style.height=height+"px"
//     para.style.display="block"
//     para.style.overflow="hidden"
//     width=width+100
//     height=height+30

// }

// var para1 = document.getElementById("para1")
// function showorHide(){
//     if(para1.style.display=="none"){
//         para1.style.display="block"
//     }
//     else{
//         para1.style.display="none"
//     }

// }
