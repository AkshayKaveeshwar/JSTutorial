//Undefined
//null
//0
//''
//NaN
//////////////////////////////////////////////////

var user = null;

if (user) {
    console.log("Condition is true");
}
/////////////////////////////////////////////////

var user = "2";

// if (2 == user) {
//     console.log("Condition is true"); // it will display output because js may think 2 == user
// }

//that is why === we will use in this type of synario
if (2 === user) {
    console.log("Condition is true");
}