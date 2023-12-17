const bangladesh = 'bangladesh';

console.log(bangladesh);

const handle = () => {
    console.log("Hi");
}

//union with explicit

let a: (number | string);

a = 5;
a = false;
a = "False";

let b: (number | string)[] = [];

b.push(a);
console.log(b);

// object type

let c: object;

c = {
    name: 'Minhaj'
}

let d: {
    name: string,
    age: number,
    status: boolean
}

d = {
    name: "stri",
    age: 5,
    status: false
}


// any tpe
let e: any;


e = 6;
e = "anty"
let s: any[] = [];

s.push(1)
s.push("2");
let ob: {
    name: any,
    hi: any
}

// Type Aliases

type numberOrString = number | string;
type userType = { name: string, age: number };

const userDetails = (id: numberOrString, user: userType) => {
    console.log(`${id} with ${user.name}  and ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`say hello ${user.name}  and ${user.age}`);
}

// Function Signatures

let myFunc: (x: string, y: string) => void;

let add: (x: number, y: number) => number;

add = (x: number, y: number) => {
    console.log(x + y);

    return x + y;
}


let calculate: (x: number, y: number, c: string) => number;

calculate = (x: number, y: number, c: string) => {
    if (c === "add") {
        return x + y;
    }
    else
        return x + y;
}

import { Player } from './Classes/Player.js'

const sakib = new Player("sakib", 34, "Bangladesh")
const Mash = new Player("mash", 50, "Bangladesh")

let player: Player[] = [];

player.push(Mash);



interface RectangleOptions {
    width: number;
    length: number;
}
function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}
let threeDdoptions = {
    width: 30,
    length: 20,
    height: 10,
};
// not Error?
drawRectangle(threeDdoptions);
// Error?
drawRectangle({
    width: 30,
    length: 20,
    height: 10,
});


// GENERICS
const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({
    name: "Mashrafi",
    age: 40,
    country: 'Bangladesh'
});
addID(user);


// GENERICS
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}
const responsei: APIResponse<object> = {
    status: 200,
    type: 'good',
    data: { l: 'test' }
}

const responsei1: APIResponse<string> = {
    status: 200,
    type: 'good',
    data: 'test'
}
const responsei2: APIResponse<object> = {
    status: 200,
    type: 'good',
    data: 'test'
}


// ENUMS
enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN,
}

interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;
}
const response1: APIResponse<string> = {
    status: 200,
    type: RType.FAILURE,
    data: "test",
};


console.log(response1);


// TUPLES
let att = [3, 'hello', {p: 3}];
let btt: [number, string, object] = [4, 'world', {t: 1}];
b.push();