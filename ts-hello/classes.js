var Point = /** @class */ (function () {
    // we cant have multiple constructors
    // ? means optional
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("Drawing " + this.x + "....");
        console.log("Drawing " + this.y + "....");
    };
    Point.prototype.distance = function (anotherPoint) {
        //...
    };
    return Point;
}());
var point1 = new Point(12, 10); //we need to allocate memory to it
point1.draw();
var point2 = new Point();
point2.draw();
