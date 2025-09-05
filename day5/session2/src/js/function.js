// function is building block of js
// function is a group of statements that performs a task or calculates a value
// function is a reusable code block
// function is a way to organize code into smaller, manageable pieces
// function is a way to avoid code duplication
// function is a way to improve code readability and maintainability
// function is enclosed in a curly braces {}
// function is defined using the function keyword
// function can take parameters (inputs) and return a value (output)
// function can be called (invoked) using its name followed by parentheses ()
// function can be defined using function declaration or function expression or arrow function

// function declaration
function add(a, b) {
  console.log(a + b);
}
add(2, 3);

function fun(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
fun(5);

function greet(name) {
  console.log("good morning" + " " + name);
}
greet("neha");

function subString() {
  let str = "good";
  for (let i = 0; i < str.length; i++) {
    let bag = "";
    for (let j = i; j < str.length; j++) {
      bag += str[j];
      console.log(bag);
    }
  }
}
subString();

function reverseStr() {
  let str = "happy";
  let bag = "";
  for (let j = str.length - 1; j >= 0; j--) {
    bag += str[j];
  }
  console.log(bag);
}
reverseStr();

//function expression
//function expression can be anonymous or named

const factorial = function fact(n) {
  return n < 2 ? 1 : n * fact(n - 1);
};
console.log(factorial(3));

let readMe = function(z,w){
    return z-w;
}
console.log(readMe(5,3));

// function declaration can be hoisted
console.log(square(5));
function square(n) {
  return n * n;
}

//Functions form a scope for variables—this means variables 
// defined inside a function cannot be accessed from anywhere outside the function. 
// The function scope inherits from all the upper scopes. 
// For example, a function defined in the global scope can access all variables defined in the global scope. 
// A function defined inside another function can also access all variables defined in its 
// parent function, and any other variables to which the parent function has access. On the other hand, the parent function (and any other parent scope) does not have access to the variables and functions defined inside the inner function.

//Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
//Block scope: The scope created with a pair of curly braces (a block).

let y = 'outside of the function';
function logicScopes(){
    const x = "inside function";
    console.log(x);
}
logicScopes();
console.log(y);

{
    var a = "block scope"
}
console.log(a);

{
    let b = "how let react"
}
//console.log(b); // referance error

function test(){
    let x = "Hey there!";
    function inner(){
        console.log(x);
    }
    inner();
}
test();