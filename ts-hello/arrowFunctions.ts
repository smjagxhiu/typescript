let myFunction = function(message) {
    console.log(message);
}

// the same with arrow functions
let arrow1 = message  => console.log(message);

let arrow2 = (a,b) => console.log(a + b);

let arrow3 = () => console.log("No arguments");

let arrow4 = (message) => {
    console.log(message);
    console.log(message);
}

let sum = (x: number, y: number): number => {
    return x + y;
}


myFunction('hello world');
arrow1("hello arrow 1");
arrow2(5,12);
arrow3();
arrow4("Hello twice");

console.log(sum(10, 20)); //returns 30



// with cunstom objects

let drawPoint = (point : {x: number, y : number} ) => { //inline annotations
    console.log("Drawing "+ point.x + "....");
    console.log("Drawing "+ point.y + "....");
}

drawPoint({
    x :12.5,
    y : 10
});



