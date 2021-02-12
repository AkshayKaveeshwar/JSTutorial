// const names = ["Youtube", "Prime", "Netflix", "Signal", "Twitter"];

// for (const n of names) {
//     console.log(n);          //this is for of loop. and it is used for array 
// }

const symbols = {
    yt: "Youtube",
    az: "AmazonPrime",
    sn: "Signal",
    fb: "facebook"
}

for (const n in symbols) {   //this is for in loop. and it is used for objects
    console.log(`key is: ${n} and the value is: ${symbols[n]}`);
}