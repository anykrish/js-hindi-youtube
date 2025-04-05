// JavaScript is a dynamically typed language 

//  1. Primitive data types : call by value 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null        // not zero
const userName = undefined      // not defined
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// 2. Reference (Non primitive) : call by reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];     // array
let myObj = {                                       // object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){            // function   
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3