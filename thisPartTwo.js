console.log(this);

var user = {
    firstName: "Akshay",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 7", this);
    },
};

user.getCourseCount();  //function call