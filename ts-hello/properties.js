var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("Drawing " + this._x + "....");
        console.log("Drawing " + this._y + "....");
    };
    Object.defineProperty(Point.prototype, "x", {
        // x is now a property
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("value must not be less that 10.");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point1 = new Point(12, 10); //we need to allocate memory to it
point1.x = 18;
point1.draw();
