"use strict";
// If you want to use Point object in other files you need to export it
// you can export multiple objects, functions and variables from the same file
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("Drawing " + this._x + "....");
        console.log("Drawing " + this._y + "....");
    };
    return Point;
}());
exports.Point = Point;
