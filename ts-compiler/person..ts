export class Person {

    constructor (public firstName:string, public lastName:string){
    }
    greet(){
        console.log("hey there "+ this.firstName + " "+this.lastName);
    }

}

