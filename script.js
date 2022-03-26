console.log("This is a traffic light cheat sheet")

// function firstLight(){
let red = document.getElementById('red')
red.style.backgroundColor = "red";
setTimeout(() => {
    red.style.backgroundColor = "black";
    secondLight()
}, 1000);



function firstLight(){
    let red = document.getElementById('red')
    red.style.backgroundColor = "red";
    setTimeout(() => {
        red.style.backgroundColor = "black";
        secondLight()
    }, 1000);
}

function secondLight(){
    let yellow = document.getElementById('yellow')
    yellow.style.backgroundColor = "yellow";
    setTimeout(() => {
        yellow.style.backgroundColor = "black";
        thirdLight()
    }, 1000);
}


function thirdLight(){
    let green = document.getElementById('green')
    green.style.backgroundColor = "green";
    setTimeout(() => {
        green.style.backgroundColor = "black";
        firstLight()
    }, 1000);
}
