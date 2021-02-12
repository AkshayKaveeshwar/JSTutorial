function init() {
    var firstName = "Akshay";
    console.log("I am init");

    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();

value();

///////////////////////////////////

function addAddition(x) {
    return function (y) {
        return x + y;
    };
};

var add1 = addAddition(4);
console.log(add1(2));          //ans: 6

console.log(addAddition(5)(5));  //ans: 10

// addAddition()()() //curring

