let n1 = 12; // typescript implicitlly declares the type
n1 = "some string";

let n2; // deafault any
n2 =12;
n2 = false;

// declaring all types
let a : number;
let b : boolean;
let c : string;
let d : any;

// declaring and initialing
let e : number = 13;
let f : boolean = true;
//arrys
let g : number[] = [1,2,4];
let h : any[] = [1,true,"string"];
// tuples
let tupple : [number, boolean] = [1,false];
tupple = [0,true];

// const and enum
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Color{Red = 0,Blue = 1, Greem = 2};
let blue = Color.Blue;

// type assertions
let message; // type any
message = 'abc'; //we dont get intellisense (autocompletion) in visual code

let endsWithC = (<string>message).endsWith('c'); // does not change the type of the variable
let alternative = (message as string).endsWith('x'); // does not change the type of the variable

let j : number | string; // j can be either number OR string 

