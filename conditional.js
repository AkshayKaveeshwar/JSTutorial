//Condtional Operators
var temperature;

temperature = 39;

if (temperature < 20) {
    console.log("it's very cold");
}

if (temperature < 30) {
    console.log("It's moderate");
}

else {
    console.log("It's Hot outside");
}


//Logical Operators
var email = true;
var gmail = false;
var facebook = false;

if (email || gmail || facebook) {
    console.log("Logged in Sucess");
}

//Ternary Operator
var authenticated = false;

//this is one type without using ternary operator
// if (authenticated) {
//     console.log("sign out button");
// }
// else {
//     console.log("Login");
// }

//This is another type using ternary operator
authenticated ? console.log("Sign out Button") : console.log("Login");  //before colon it is true part and after colon it is false part


