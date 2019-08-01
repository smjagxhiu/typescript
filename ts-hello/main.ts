function log(message) {
    console.log(message);
}

var message = "Hello World";

log(message);


function doSomething(){
    // var scope is to the neaerst funstion
    for (var i = 0; i < 5; i++)
        console.log(i);
    console.log("Finally "+i);
}

function doSomething2(){
    for (let i = 0; i < 5; i++)
        console.log(i);
   // console.log("Finally "+i); compilation error
}

doSomething();
doSomething2();