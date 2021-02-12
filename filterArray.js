var testArray = [2, 4, 6, 2, 1, 3, 7, 8];

//console.log(testArray.fill("A"));   //string A is filled in all the elements. ans: all elemets A

//console.log(testArray.fill("A", 2));  // here 2 indidcates start position from 2 (note: array index starts from 0).
// ans: 2,4

//console.log(testArray.fill("A", 2, 5));  //here 5 indicates, 5 it is exclusive. ans: 3,7,8

// const myNumber = [23, 24, 25, 55, 64, 20, 52];
// const result = myNumber.filter((num) => num != 55);   //here 55 will be delete. ans: 23,24,25,64,20,52.
// console.log(result);

const myNumber = [23, 24, 25, 55, 64, 20, 52];
const result = myNumber.filter((num) => num > 55);   //here only prints greater than 55. ans: 64.
console.log(result);


//slice value
var users = ["ted", "tim", "ton", "sam", "sor", "sod"];
console.log(users.slice(1, 3));        //here index starts from 0 and slice(1,3) means, index 1 will be included and index 3 will be excluded.
//ans: ['tim', 'ton']


var users = ["a", "b", "c", "d", "e", "f"];
console.log(users.slice(1)); //here from index 1 it will start and prints further all elemets. ans: b,c,d,e,f.


//splice value
var users = ["ted", "tim", "ton", "sam", "sor", "sod"];
users.splice(1, 3, "HI");  //here 1 is from index 1 it will start, 3 means 0-3index it will delete,
//and "HI" means that deleted value is filled up with "HI"
console.log(users);