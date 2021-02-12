// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const myStates = [
    "Karnataka",
    "Assam",
    "Kerala",
    1947,
    "Jammu And Kashmir",
    "Andhra Pradesh"
];

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== "string") continue;   //it skips the integer value then continue with next elements.
//     console.log(myStates[i]);  //display myState elements
// }

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== "string") break;   //it breaks when the integer value comes and come outof the loop.
//     console.log(myStates[i]);  //display myState elements
// }

let i = 0;

while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
}