// console.log("This is a javascript section");

// let thename = "JSon ";
// let thename1 = "aSon ";
// let thename2 = "bSon ";
// let thename3 = "cSon ";
// let thename4 = "gSon ";

// console.log(thename + "is good");
// console.log(thename1 + "is good");
// console.log(thename2 + "is good");
// console.log(thename3 + "is good");
// console.log(thename4 + "is good");

// Instead of doing the above long codes, we can create a function which can do the task when called 
// function greet(anyname, greeting) {
//     console.log(anyname + " is a good man");
//     console.log(greeting + " " + anyname);
// }
// let greeting = "Good Morning";
// let thename = "JSon";
// let thename1 = "nSon";
// let thename2 = "fSon";
// let thename3 = "rSon";
// let thename4 = "hSon";

// greet(thename, greeting);
// greet(thename3, greeting);


function employees(name)
 {
    let name1 = "inFirst";
    console.log(name + " is a string")
}
let name2 = "OutFirst";
employees(name2);

// the element outfirst can be accessed globally whereas the infirst can be accessed within the block {}

// We can create the default value for the parameters of the function which looks like this ...
function greet(anyname, greeting="No greet to you mister") {
    console.log(anyname + " is a good man");
    console.log(greeting + " " + anyname);
}
let greeting = "Good Morning";
let thename = "JSon";
let thename1 = "nSon";
let thename2 = "fSon";
let thename3 = "rSon";
let thename4 = "hSon";

greet(thename, greeting);
greet(thename3, greeting);
greet(thename4); // In the name4 the default value of greeting will be applied which is defined in the parameter of the main function.. 



// functions do its task when called but don't return value normally and it will be declared as undefined..
let return1 = sum(thename1,greeting,thename2);
console.log(return1); // doesn't print the value which is obtained from the greet(thename1,greeting);


// But if we want to get the return value from the function, we need to add the return to the function as programmed below.

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // anything written hereafter return will not be executed and it has no value of being here, if its not a comment note.
}

let first = 20;
let second = 30;
let third = 40;
let addition = sum(first, second, third);

console.log(addition);









