var user = {
    firstName: "Akshay",       //fisrt one is Key : Second one is Value. and only value shoulb be in quotes if it is string. key should not have quotes.
    lastName: "Kaveeshwar",    //fisrt one is Key : Second one is Value.
    role: "Admin",             //fisrt one is Key : Second one is Value.
    loginCount: 32,           //fisrt one is Key : Second one is Value.
    facebookSignedIn: true,     //fisrt one is Key : Second one is Value.
};

console.log(user.firstName);  //here we are displaying value. ans: Akshay

console.log(user["lastName"]);  // here we are displaying key, although key should not use quotes but while we are fetching that time we use quotes.
//ans: Kaveeshwar


user.loginCount = 50;
console.log(user.loginCount); //update the loginCount value. 
console.log(user);  //display entire things in user object.
console.table(user);  //displays in the form of table.
