var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;  //time starts from 1

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }

}, 1);
//This is TimeInterval                                    
//(function, millisecond)
//in function the count++ will be given and millisecond for time interval.


setTimeout(() => {
    followers.innerText = "Followers in Instagram";
}, 6000)
//This is Timeout
//here after 6000ms gets over the "Followers in Instagram" will print.

