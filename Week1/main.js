//modules
import {halfOf,multiply} from './lib.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

import doSomething from './doSomething.js';
doSomething();

import { flag, touch } from './validator.js';
console.log(flag);
touch();
console.log(flag);

//classes
class Vehicle {
    constructor(wheels) {
       this.wheels = wheels;
    }
    toString() {
       return '(' + this.wheels + ')';
    }
 }
 
 class Car extends Vehicle {
    constructor(color) {
       super(4);
       this.color = color;
    }
    toString() {
       return super.toString() + ' colored: ' + this.color;
    }
 }
 
 let car = new Car('blue');
 car.toString();
 
 console.log(car instanceof Car);
 console.log(car instanceof Vehicle);

 //Arrow
const sum1 = (a, b) => {
    return a + b;
}
let result1 = sum1(1, 2);
console.log(result1);

const sum2 = (a, b) => a + b;
let result2 = sum2(1, 2);
console.log(result2);

//Let and Var
function reinitConst(){
    const me = 1;
    console.log(me);
    //me = 2; //ERROR - cannot assign a value to a const
    //console.log(me);
 }
 
 reinitConst();

 function reinitConst2(){
    let me = 1;
    console.log(me);
    me = 2; 
    console.log(me);
 }
 
 reinitConst2();

function iterateVar() {
    for(var i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);
 }
 iterateVar();
 
function iterateLet() {
    for(let i = 0; i < 10; i++) {
       console.log(i);
    }
    //console.log(i); //ERROR - variable is not defined
 }
 iterateLet();
 
 //default
 function add(x, y = 0) {
    console.log(x + y);
 }
 add(1);
 add(1,2);

 //Rest
 function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
 }
 userFriends('User', 'Bob', 'Alice');

 //Spread
 function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
 }
 
 userTopFriends(...['Alice', 'Bob', 'Michelle']);


 //Closure
 function parent() {
    const message = 'Hello World';
 
    function child() {
       alert (message);
    }
 
    child();
 }
 parent();
