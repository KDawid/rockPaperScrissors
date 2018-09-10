//source of the pictures:   https://www.racedepartment.com/attachments/rock-paper-scissors-png.260552/
//                          https://www.shareicon.net

function $(id) {
    return document.getElementById(id)
}

window.onload = () => {
    pic = $("pic")
}

const COUNTDOWN = 3
const MS = 750

var pic
var interval
var images = ["rock", "paper", "scrissors"]
var steps = ["Rock", "Paper", "Scrissors"]

function nextStep() {
    countDown(COUNTDOWN)
}

function countDown(n) {
    clearInterval(interval)
    if(n > 0) {
        pic.src = getPngSrc(n)
        interval = setInterval(() => {
            countDown(n-1)
        }, MS)
    }
    else {
        pic.src = getPngSrc(images[nextIndex()])
    }

}

function nextIndex() {
    return Math.floor(Math.random() * images.length)
}

function tenSteps() {
    $("steplist").innerHTML = ""
    for(var i=0; i<10; i++) {
        var node=document.createElement("LI")
        var textnode=document.createTextNode(steps[nextIndex()])
        node.appendChild(textnode)
        $("steplist").appendChild(node)
    }
}

function getPngSrc(name) {
    return "img/" + name + ".png"
}