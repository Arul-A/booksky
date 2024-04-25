var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup")
var addpopup = document.getElementById("add-btn")
addpopup.addEventListener('click', function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})


var removepopup = document.getElementById("cancel")
removepopup.addEventListener('click', function () {
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})


function save() {
    var content = document.querySelector(".container")
    var booktitle = document.getElementById("book-title").value
    var authorname = document.getElementById("author").value
    var booksummary = document.getElementById("description").value

    var addbook = document.getElementById("add")

    var bookcontainer = document.createElement("div")
    bookcontainer.setAttribute("class", "book-container")
   
    bookcontainer.innerHTML = `<h2>${booktitle}<h2>
    <h5>${authorname}</h5>
    <p>${booksummary}</p>
    <button id='del' onclick='deletebook(event)'>Delete</button>`
    content.append(bookcontainer)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}

function deletebook(event){
    event.target.parentElement.remove()
}

