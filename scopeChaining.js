var myName = "Akshay";                        //Parent

console.log("Line number 3", myName);

sayName();
function sayName() {
    //var myName = "Mr. A";
    console.log("Line number 8", myName);     //child

    sayNameTwo();
    function sayNameTwo() {
        // var myName = "Mr. AK";
        console.log("Line number 13", myName);    //super child 
    }

}