// function sumOne(a, b) {
//     return a + b;
// };

// console.log(sumOne(5, 4));  //output: 9



function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA));  //it is spread operator and output: 9



function sumTwo(a, b, ...args) {      //it is REST operator
    let multi = a * b;  //here first two arguments will be multiplication i.e, 2*3
    let sum = 0;  //here other arguments i.e, ...args will addition i.e, 1+5+5
    for (const arg of args) {
        sum += arg;
    }
    return [multi, sum]; //here first multiplication takes place and then addition takes place.
}
console.log(sumTwo(2, 3, 1, 5, 5));  //output is: [6, 11]