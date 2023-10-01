// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20);//first
Object.is(0, -0);//first
Object.is(NaN, 100);//first
Object.is("one", "two");//first
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });//true
Object.is(null, undefined);//first

10 === 20;//false
10 === "10"//false
3.14 !== 3.14;//false
"TechUp" !== "TechUp";//true
NaN === NaN;//false
0 !== -0;

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB;
