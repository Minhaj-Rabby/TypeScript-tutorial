const bangladesh = 'bangladesh';
console.log(bangladesh);
const handle = () => {
    console.log("Hi");
};
//union with explicit
let a;
a = 5;
a = false;
a = "False";
let b = [];
b.push(a);
console.log(b);
// object type
let c;
c = {
    name: 'Minhaj'
};
let d;
d = {
    name: "stri",
    age: 5,
    status: false
};
// any tpe
let e;
e = 6;
e = "anty";
let s = [];
s.push(1);
s.push("2");
let ob;
const userDetails = (id, user) => {
    console.log(`${id} with ${user.name}  and ${user.age}`);
};
const sayHello = (user) => {
    console.log(`say hello ${user.name}  and ${user.age}`);
};
// Function Signatures
let myFunc;
let add;
add = (x, y) => {
    console.log(x + y);
    return x + y;
};
let calculate;
calculate = (x, y, c) => {
    if (c === "add") {
        return x + y;
    }
    else
        return x + y;
};
import { Player } from './Classes/Player.js';
const sakib = new Player("sakib", 34, "Bangladesh");
const Mash = new Player("mash", 50, "Bangladesh");
let player = [];
player.push(Mash);
function drawRectangle(options) {
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
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: 'Bangladesh'
});
addID(user);
const responsei = {
    status: 200,
    type: 'good',
    data: { l: 'test' }
};
const responsei1 = {
    status: 200,
    type: 'good',
    data: 'test'
};
const responsei2 = {
    status: 200,
    type: 'good',
    data: 'test'
};
// ENUMS
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.FAILURE,
    data: "test",
};
console.log(response1);
// TUPLES
let att = [3, 'hello', { p: 3 }];
let btt = [4, 'world', { t: 1 }];
b.push();
