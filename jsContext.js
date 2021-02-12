// sayHello();                          //global context

// function sayHello() {
//     console.log("Hello");
// }

// var myName = "Akshay";
// if (myName === myName) {
//     console.log("This is true statement");
// }

var myName = "Akshay";
if (myName === window.myName) {                         //It shows window is not defined error because of global context
    console.log("This is true statement");
}