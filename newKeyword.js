var User = function (firstName, courseCount) {
    this.firstName = firstName;  //creating new nobject
    this.courseCount = courseCount; //creating new nobject
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

//new Keyword:
//here new Keyword is responsible for above's code, and also it will help to create constructor.
//and craete instance every single time. that is why we give two different names.

// var akshay = new User("Akshay", 2);  //this is not regular function call
// console.log(akshay);

// var sachin = new User("Sachin", 5);  //this is not regular function call
// console.log(sachin);



User.prototype.getFirstName = function () {                //here, we come to the "prototype" it is constructor
    console.log(`Your Fisrst Name is: ${this.firstName}`); //without touching the above code we can directly 
}                                                          //give the "getFirstName" and that will be call in below code.     

var akshay = new User("Akshay", 2);
akshay.getCourseCount();
// akshay.getFirstName();  //here we are calling above's code
if (akshay.hasOwnProperty("firstName")) {  //for better code, here why we are using if condition because, in this proper "firstName"
    akshay.getFirstName();                 //only will take it, if it is "firstNameee" then it will not print,because
}                                          //it is not correct that is why we used hasOwnProperty.

var sachin = new User("Sachin", 5);
sachin.getCourseCount();
// sachin.getFirstName();  //here we are calling above's code
if (sachin.hasOwnProperty("firstName")) {  //for better code, here why we are using if condition because, in this proper "firstName"
    sachin.getFirstName();                 //only will take it, if it is "firstNameee" then it will not print,because
}                                           //it is not correct that is why we used hasOwnProperty.