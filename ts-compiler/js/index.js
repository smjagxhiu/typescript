"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person.");
var _ = __importStar(require("lodash"));
var p1 = new person_1.Person("selman", "jagxhiu");
console.log("Hello testting...");
console.log(p1);
// use lodash library
var arr = [1, 2, 3, 4];
console.log(_.reverse(arr));
