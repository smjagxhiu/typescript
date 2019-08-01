export class Person {

    constructor (public firstName:string, public lastName:string){
    }
    greet(){
        console.log("hey there "+ this.firstName + " "+this.lastName);
    }

}
// access modifers: private, public (default), protected and readonly

class Programmer extends Person {
    constructor (public firstName:string, public lastName:string, public faveLang : string) {
        super(firstName, lastName);
    }

    greet(){
        console.log("hello world with " + this.faveLang );
    }

    greetLikeNormalPerson(){
        super.greet();
    }
}

let programmer = new Programmer("selman","jagxhiu","JAVA");
programmer.greet();
programmer.greetLikeNormalPerson();

let personrProgramer : Person = new Programmer("xxx","yyy","C#");
personrProgramer.greet();
let programmer2 = <Programmer> personrProgramer;
programmer2.greetLikeNormalPerson();

