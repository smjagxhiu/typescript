var FooClass = /** @class */ (function () {
    function FooClass() {
    }
    FooClass.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return FooClass;
}());
var aPerson1 = new FooClass();
console.log(aPerson1.getFullname());
// you dont ave to strictly implement an interface
var someObj1 = {
    firstName: "john",
    lastName: "doe",
    foo: "bar",
    getFullname: function () { return "john doe"; }
};
aPerson1 = someObj1; //duck typing, you cant access foo from aPerson
console.log(aPerson1.getFullname());
