class Point {

    constructor(private _x? : number, private _y? : number){
    }

    draw(): void {
       console.log("Drawing "+ this._x + "....");
       console.log("Drawing "+ this._y + "....");
    }

    // x is now a property
    get x() {
        return this._x;
    }
    set x(value:number) {
        if (value < 0)
            throw new Error("value must not be less that 10.");
        this._x = value;
    }

}


let point1 = new Point(12, 10); //we need to allocate memory to it
point1.x = 30;
point1.draw();

