interface PersonInterface {
    firstName:string;
    lastName:string;
    getFullname():string;
}

class FooClass implements PersonInterface {
    firstName: string;    
    lastName: string;
    getFullname(): string {
        return this.firstName + " " + this.lastName;
    }

    
}

let aPerson1 : PersonInterface = new FooClass();
console.log(aPerson1.getFullname());
// you dont ave to strictly implement an interface
let someObj1 = {
    firstName: "john",
    lastName: "doe",
    foo: "bar", //extra property
    getFullname :() => "john doe"
}
aPerson1 = someObj1; //duck typing, you cant access foo from aPerson
console.log(aPerson1.getFullname());
