var Point = /** @class */ (function () {
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
    // getter
    Point.prototype.getX = function () {
        return this.x;
    };
    // seter
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error("value must not be less that 10.");
        this.x = value;
    };
    return Point;
}());
var point1 = new Point(12, 10); //we need to allocate memory to it
point1.draw();
var point2 = new Point();
point2.draw();
