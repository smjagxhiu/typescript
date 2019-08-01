"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
// access modifers: private, public (default), protected and readonly
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName, faveLang) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.faveLang = faveLang;
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log("hello world with " + this.faveLang);
    };
    Programmer.prototype.greetLikeNormalPerson = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var programmer = new Programmer("selman", "jagxhiu", "JAVA");
programmer.greet();
programmer.greetLikeNormalPerson();
var personrProgramer = new Programmer("xxx", "yyy", "C#");
personrProgramer.greet();
var programmer2 = personrProgramer;
programmer2.greetLikeNormalPerson();
