/* Define a function that can answer the role of a user.
A user can be following roles:
admin - gets full access
subAdmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - gets access to consume content
other- trail user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is gets full access`;
            break; //this is not necessary

        case "subAdmin":
            return `${name} is gets access to create/delete courses`;
            break; //this is not necessary

        case "testprep":
            return `${name} is gets access to create/delete tests`;
            break; //this is not necessary

        case "user":
            return `${name} is gets access to consume content`;
            break; //this is not necessary

        default:
            return `${name} is a trial`;
            break;
    }
};

console.log(getUserRole("Akshay", "testprep")); //By using console print

var userRole = getUserRole("Sachi", "admin"); //By creating variable and then printing
console.log(userRole);