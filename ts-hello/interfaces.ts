interface Point {
    x : number,
    y : number
}

let drawPoint = (point:Point) => {
    console.log("Drawing "+ point.x + "....");
    console.log("Drawing "+ point.y + "....");
}

drawPoint({
    x :12.5,
    y : 10
});