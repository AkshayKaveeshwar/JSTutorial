var countries = ["India", "USA", "Japan", "Brazil"];

var states = new Array("Karnataka", "Delhi", "Mumbai", "Assam");

//console.log(states);

//console.log(states[1]);

//console.log(states.length);

states[1] = "Kerala";
//console.log(states);

var user = ["Akshay", "akki@gmail.com", 5, 54, true];
//console.log(user);

user.pop();       //delete last element
user.pop();
//console.log(user);

user.unshift("New Value");  //it comes first and other elements comes next
//console.log(user);

user.push("abc");        //it comes last. it means, after all elements it will come
//console.log(user);

user.shift();            //it removes first element
console.log(user);

console.log(user.indexOf("Akshay"));   //it shows the index position

console.log(user.indexOf("kle"));  // it is wrong element so it will display -1

console.log(Array.from("hitesh"));  // it display whole element as single element.


