const akshay = {                                        //this is first variable and values
    firstName: "Akshay",
    lastName: "Kaveeshwar",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },

};

const dj = {                                //this is second variable and values
    firstName: "Rock",
    lastName: "DJ",
    role: "sub-Admin",
    courseCount: 4,
}

akshay.getInfo();   // this first variables output

//binding:
//here, we want result from second variable's output without giving "getInfo". at that time we use "binding".
//binding is nothing but, copy that first variable and when we put "akshay.getInfo.bind(dj)" the getInfo will copy
//from the akshay. so we need not give getInfo again into the dj.

var djInfo = akshay.getInfo.bind(dj);  //it will just refer from akshay to dj
djInfo();                              //it will print i.e, second variable output.


//here we use "call": because if we want direct call and print the second variable output is given below
akshay.getInfo.call(dj);