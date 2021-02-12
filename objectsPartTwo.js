var user = {
    firstName: "Akshay",       //fisrt one is Key : Second one is Value. and only value shoulb be in quotes if it is string. key should not have quotes.
    lastName: "Kaveeshwar",    //fisrt one is Key : Second one is Value.
    role: "Admin",             //fisrt one is Key : Second one is Value.
    loginCount: 32,           //fisrt one is Key : Second one is Value.
    facebookSignedIn: true,     //fisrt one is Key : Second one is Value.
    courseList: [],
    buyCourse: function (courseName) {       //function
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);   //displaying firstName
console.log(user.getCourseCount());  //displaying getCourseCount
user.buyCourse("React JS Course");    //adding first course to the buyCourse 
user.buyCourse("data Science Course");   //adding second course to the buyCourse
console.log(user.getCourseCount());    //diplaying getCourseCount


// console.table(user.firstName);
// console.table(user.lastName);
// console.table(user.role);
// console.table(user.loginCount);
// console.table(user.facebookSignedIn);
// console.table(user.courseList);
