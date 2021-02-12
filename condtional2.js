//create an application with following roles
//admin - gets full access
//subAdmin - gets access to create/delete courses
//testprep - gets access to create/delete tests
//user - gets access to consume content

var application;

var application = "admin";

switch (application) {
    case "admin":
        console.log("gets full access");
        break;
    case "subAdmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("Invalid Input");
        break;
}