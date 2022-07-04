'use strict'

//Task #1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user)

//Task #2
const users = {
    name: "John"
};

// это будет работать?
users.name = "Pete";
//Это будет работать, так как const users хранит ссылку на объект,
// которую изменить нельзя. Но то что находится в объекте мы можем изменять.

//Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum)