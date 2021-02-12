//before this please visit concurrency model and the event loop in developer.mozilla.org website

const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(() => {
        console.log("wooohooooo");
    }, 3000)
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
dos(); //here in dos() function, although there is "woohooo" is there but because of setTimeOut() it will print after tres() will print. 
tres();