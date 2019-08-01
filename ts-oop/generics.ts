// when you import a file you also excecute that script
import {Person} from "./person";

function echo<T>(arg : T) : T{
    return arg;
}

let a = echo(3);
let b = echo("string");



class Admin extends Person {

}


class Manager extends Person{

}

let admin = new Admin("aa","bbb");
let manager = new Manager("mmm","sss");

function personEcho<T extends Person>(person : T) : T {
    return person;
}

var foo = personEcho(admin);


