var myFunction = function (message) {
    console.log(message);
};
// the same with arrow functions
var arrow1 = function (message) { return console.log(message); };
var arrow2 = function (a, b) { return console.log(a + b); };
var arrow3 = function () { return console.log("No arguments"); };
var arrow4 = function (message) {
    console.log(message);
    console.log(message);
};
var sum = function (x, y) {
    return x + y;
};
myFunction('hello world');
arrow1("hello arrow 1");
arrow2(5, 12);
arrow3();
arrow4("Hello twice");
console.log(sum(10, 20)); //returns 30
// with cunstom objects
var drawPoint = function (point) {
    console.log("Drawing " + point.x + "....");
    console.log("Drawing " + point.y + "....");
};
drawPoint({
    x: 12.5,
    y: 10
});
