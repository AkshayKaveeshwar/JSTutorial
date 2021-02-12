//Promise:
//It is a state that is, either it is fulfilled nor it wont be fulfilled.

const uno = () => {
    return "I am One";
};

// const dos = () => {
//     setTimeout(() => {
//         return "I am Two";
//     }, 3000)
// };

const dos = () => {
    return new Promise((resolve, reject) => {  //resolve and reject are methods.
        setTimeout(() => {
            resolve("I am Two");  //here if we gave "reject" then, only print "I am One", rest other two things will not print and it gives error.
        }, 3000)
    })
};

const tres = () => {
    return "I am Three";
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();