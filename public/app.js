var maincontent = document.getElementById("maincontent")
var input = document.getElementById("input")
var addbtn = document.getElementById("addbtn")
var deletebtn = document.getElementById("deletebtn")
var updatebtn = document.getElementById("updatebtn")
// var changetheme = document.getElementById("changetheme")
var selectedItem = "";

var checkbox = document.getElementById("checkbox")
var checkBoxSelected = false;
//add 
addbtn.addEventListener("click", function () {
    if (input.value) {
        var li = document.createElement("li")

        var checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.style.margin = "10px"

        var b = document.createElement("b")
        b.innerText = input.value
        b.style.display = "inline-block"
        b.style.margin = "10px"
        b.style.width = "400px"
        b.style.overflow = "hidden"



        var editbtn = document.createElement("button")

        var editicon = document.createElement("i")
        editicon.classList.add("fa-pen")
        editicon.classList.add("fa-solid")

        editbtn.appendChild(editicon)
        editbtn.setAttribute("onclick", 'edittext(this)')


        var deletebtn = document.createElement("button")
        var deleteicon = document.createElement("i")
        deleteicon.classList.add("fa-trash-can")
        deleteicon.classList.add("fa-solid")
        deletebtn.appendChild(deleteicon)
        deletebtn.setAttribute("onclick", 'deletetext(this)')



        li.appendChild(checkBox)
        li.appendChild(b)
        li.appendChild(editbtn)
        li.appendChild(deletebtn)
        maincontent.appendChild(li)
        input.value = ""
        setItem()







    }
})

function deletetext(e) {
    console.log(e.parentNode)
    e.parentNode.remove()
    setItem()

}
//edit 
function edittext(e) {

    input.value = e.parentNode.childNodes[1].innerText
    addbtn.style.display = "none"
    deletebtn.style.display = "none"
    updatebtn.style.display = "inline"
    input.focus()
    selectedItem = e.parentNode.childNodes[1]
    console.log(selectedItem)

    // var inputfield  = document.createElement("input")
    // e.parentNode.childNodes[1].remove()
    // e.parentNode.childNodes[1].appendChild(inputfield)



}
//update
updatebtn.addEventListener("click", function () {
    if (input.value) {
        selectedItem.innerText = input.value
        input.value = ""
        addbtn.style.display = "inline"
        deletebtn.style.display = "inline"
        updatebtn.style.display = "none"
        setItem()
    }
})

//checkbopx
checkbox.addEventListener("click", function () {
    for (var item of maincontent.children) {
        console.log(item.children[0].checked)
        item.children[0].checked =!checkBoxSelected

    }
    checkBoxSelected =!checkBoxSelected
})


deletebtn.addEventListener("click", function () {
    for(var i=0;i<maincontent.children.length;i++){

        if(maincontent.children[i].children[0].checked){
            maincontent.children[i].remove()
            i = i-1

        }

    }
    checkBoxSelected = false;
    checkbox.checked = false;
    setItem()
})

//local storage data store 
function setItem(){
    var todoItem =[]

    for(var item of maincontent.children){

        todoItem.push(item.children[1].innerText)
    }
    console.log(todoItem)
    localStorage.setItem("TODO",JSON.stringify(todoItem))

}

function SetFirstTime(value){
    var li = document.createElement("li")

    var checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.style.margin = "10px"

    var b = document.createElement("b")
    b.innerText = value
    b.style.display = "inline-block"
    b.style.margin = "10px"
    b.style.width = "400px"
    b.style.overflow = "hidden"



    var editbtn = document.createElement("button")

    var editicon = document.createElement("i")
    editicon.classList.add("fa-pen")
    editicon.classList.add("fa-solid")

    editbtn.appendChild(editicon)
    editbtn.setAttribute("onclick", 'edittext(this)')


    var deletebtn = document.createElement("button")
    var deleteicon = document.createElement("i")
    deleteicon.classList.add("fa-trash-can")
    deleteicon.classList.add("fa-solid")
    deletebtn.appendChild(deleteicon)
    deletebtn.setAttribute("onclick", 'deletetext(this)')



    li.appendChild(checkBox)
    li.appendChild(b)
    li.appendChild(editbtn)
    li.appendChild(deletebtn)
    maincontent.appendChild(li)

}

function getItem(){
    var todo = JSON.parse(localStorage.getItem("TODO"))
    console.log(todo)

    for(var item of todo){
        SetFirstTime(item)

    }



}


// // localStorage.setItem("hello","test")
// // localStorage.getItem("hello")
// localStorage.clear()
getItem()

// var setItem = document.getElementById("setItem")
// var email = document.getElementById("email")
// var username = document.getElementById("name")

// setItem.addEventListener("click", function () {
//     localStorage.setItem("email", email.value)
//     localStorage.setItem("username", username.value)
//     window.location.href = "userLogin.html"

// })

// window.onload = function () {
//     var email = localStorage.getItem("email")
//     if (email) {
//         window.location.href = "userLogin.html"


//     }
// }
console.log(firebase)


