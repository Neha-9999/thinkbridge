//Object is a collection of key value pairs
//Object can be created using object literal or object constructor or class
//Object can have properties and methods
//Object properties can be accessed using dot notation or bracket notation
//Object methods can be invoked using dot notation followed by parentheses

let fruit ={
    name : "Grapes",
    color : "Green",
    famousFor : "wine",
    types : {
        dryfruit : "rains",
        seeds : "skin"
    }
}
console.log(fruit);

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
console.log(person);
console.log(person.introduceSelf());
console.log(person.bio());
console.log(person.age);

console.log(person.name[0]);

const lastName = {
    sirname : ['kumar','sharma']
}
lastName.sirname.push('verma');
console.log(lastName);