tipper("5"); //Here we used string but also coming output correctly because we used parseInt().
//one more important is, here Function decalarations are scanned and made available.

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

///////////////////////////////////////////////////////////////////
//NOTE 2 THINGS(Mandatory):
//Function declartions are scanned and made available
//variable declartions are scanned and made undefined
///////////////////////////////////////////////////////////////////

// bigTipper("200");  //it is error Beacuse we mentioned above variable decalarations are scanned and made undefined                               

// var bigTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill + 10);
// }

///////////////////////////////////////////////////////////////////

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 10);
}

bigTipper("200");  //Here the correct answer for above's query beacuse we decalre variable and after that we called.

///////////////////////////////////////////////////////////////////

console.log(name1);
var name1 = "Akshay";  //synario 1

sayMe();               //synario 2
function sayMe() {
    var name1 = "Mr. A";
    console.log(name1);
}

console.log(name1);

/*
In first synario we print firstand then declare variable so it gives undefined.
In second synario we used function so it global context.
*/

///////////////////////////////////////////////////////////////////
