
addButtonEvent()

function addButtonEvent() {
    document.getElementById ( "submitBtn" )
        .addEventListener ( "click", addPost )
}

function addPost() {
    let textBox = document.getElementById ('blog-container')
    let textInput = document.getElementById ('user-input')
    let paragraph = document.createElement("p")
        textBox.appendChild(paragraph)
            paragraph.innerText = textInput.value
}
 c



