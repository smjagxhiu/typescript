class Point {
     private x: number; // default access modiifier is public
     private y: number;

     // we cant have multiple constructors
     // ? means optional
     constructor(x? : number, y? : number){
         this.x = x;
         this.y = y;
     }

     draw() {
        console.log("Drawing "+ this.x + "....");
        console.log("Drawing "+ this.y + "....");
     }

     distance(anotherPoint: Point) {
         //...
     }

}


let point1 = new Point(12, 10); //we need to allocate memory to it
point1.draw();

let point2 = new Point(); 
point2.draw();