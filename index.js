
// Use as callback arguments
function receivesAFunction(func) {
    return func();
  }
  receivesAFunction (function () { return 42 });


//Return a named function with no arguments
function returnsANamedFunction () {
    return returnsANamedFunction;
}


// Return a anonymous function with no argument
const returnsAnAnonymousFunction = function() {
    return function() {
        console.log("Hello from the inner function!");
    };
};
const innerFunction = returnsAnAnonymousFunction ();
innerFunction(); 