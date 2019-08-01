var n1 = 12;
n1 = "some string";
var n2; // deafault any
n2 = 12;
n2 = false;
// declaring all types
var a;
var b;
var c;
var d;
// declaring and initialing
var e = 13;
var f = true;
// arrays
var g = [1, 2, 4];
var h = [1, true, "string"];
// const and enum
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Greem"] = 2] = "Greem";
})(Color || (Color = {}));
;
var blue = Color.Blue;
