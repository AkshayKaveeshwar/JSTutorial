//This file is linked with the 01classObjects.js file
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];
    //actually it is private variable 
    //#courseList is you have to refer courseList variable throuhout with the class using #

    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList() {
        return this.#courseList;

    }
    login() {
        return "You are logged in";
    }
}

//inheritance operation: line from 27-35 and also refer "inheritance below code" 
class SubAdmin extends User {
    constructor(name, email) {
        super(name, email);  //here we are using super keyword.
    }
    getAdminInfo() {
        return "I am subadmin";
    }
}

module.exports = User;

const rock = new User("krish", "Krish@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList); //it shows undefined because we gave it as private i.e, #courseList

//inheritance below code
const tom = new SubAdmin("tom", "tom@gmail.com"); //here we sould give value otherwise in getInfo() it shows undefined.
console.log(tom.getAdminInfo()); //output: I am subadmin
console.log(tom.login()); //output: You are logged in
console.log(tom.getInfo()); //output: { name: 'tom', email: 'tom@gmail.com' }
