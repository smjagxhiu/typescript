"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log("hey there " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
exports.Person = Person;
