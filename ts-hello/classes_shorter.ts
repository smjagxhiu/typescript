class Point {

    constructor(private x? : number, private y? : number){
    }

    draw():void {
       console.log("Drawing "+ this.x + "....");
       console.log("Drawing "+ this.y + "....");
    }

    distance(anotherPoint: Point) {
        //...
    }

    // getter
    getX():number {
        return this.x;
    }

    // seter
    setX(value:number) : void {
        if (value < 0)
            throw new Error("value must not be less that 10.");
        this.x = value;
    }

}


let point1 = new Point(12, 10); //we need to allocate memory to it
point1.draw();

let point2 = new Point(); 
point2.draw();