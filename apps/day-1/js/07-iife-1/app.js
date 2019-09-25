// function statement
// function greet(name) {
//     console.log('Hello ' + name);   
// }
// greet('John');

// using a function expression
// var greetFunc = function(name) {
//     console.log('Hello ' + name);
// };
// greetFunc('John');



// using an Immediately Invoked Function Expression (IIFE)
var app = (function () {
    var map = function () {
        console.log('app.map() function');
    }

    var myapp = {
        map: map
    }

    // console.log( 'Hello ' + name);
    return myapp;

})();

app.map();

// // IIFE
// var firstname = 'John';

// (function(name) {

//     var greeting = 'Inside IIFE: Hello';
//     console.log(greeting + ' ' + name);

// }(firstname)); // IIFE






















