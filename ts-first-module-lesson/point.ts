// If you want to use Point object in other files you need to export it
// you can export multiple objects, functions and variables from the same file

export class Point {

    constructor(private _x? : number, private _y? : number){
    }

    draw(): void {
       console.log("Drawing "+ this._x + "....");
       console.log("Drawing "+ this._y + "....");
    }


}

//// when you use export  on top of the file, it becomes a module
