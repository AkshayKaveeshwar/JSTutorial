// import User from "./01classjs";

//This file is taken from 01classjs.js
const User = require("./01classjs.js");

const akshay = new User("Akshay", "akki@gmail.com");

console.log(akshay.getInfo());

akshay.enrollCourse("React JS");
akshay.enrollCourse("Data Science");

console.log(akshay.getCourseList());