1.
var imgUrl = null
var degree = null

do {
    imgUrl = prompt('Give me image url')
} while (!imgUrl.startsWith('http'))

do {
    degree = prompt('Give me degree')
} while (isNaN(degree))


var startDegree = 0

for (let i = 1; i <= 5; i++) {
    var img = document.createElement('img')
    img.src = imgUrl
    document.body.appendChild(img)
    startDegree += +degree
    img.style.transform = `rotate(${startDegree}deg)`
}

// <
// !DOCTYPE html >
//     <
//     html lang = "en" >

//     <
//     head >
//     <
//     meta charset = "UTF-8" >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" >
//     <
//     meta http - equiv = "X-UA-Compatible"
// content = "ie=edge" >
//     <
//     title > Document < /title> < /
//     head >

//     <
//     body >
//     <
//     img id = 'myimg'
// src = ""
// alt = "" >
//     <
//     /body> <
// script src = "js/main.js" > < /script>

// <
// /html>


2.

var createAndAppend = tag => document.body.appendChild(document.createElement(tag))


4.

function removeById(id) {
    var elementToDelete = document.getElementById(id)
    return elementToDelete.parentNode.removeChild(elementToDelete)
}

function deleteElement(id) {
    if (document.getElementById(id))
        return removeById(id)
    else {
        alert('Tut net takogo tega')
    }

}

5.

function getInnerTextOfElement(tag) {
    return document.getElementById(tag).innerText
}

6.

function getInnerTextOfElement(name) {
    var element = null
    switch (name[0]) {
        case '#':
            element = document.getElementById(name.slice(1))
            if (element) return element.innerText
            console.log('ID not found')
            return null
        case '-':
            element = document.getElementsByClassName(name.slice(1))[0]
            if (element) return element.innerText
            console.log('Class not found')
            return null
        default:
            alert('Worng input data')
            return null
    }
}