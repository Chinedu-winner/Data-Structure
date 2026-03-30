let hobbies = ["Sporty Bet", "Traading", "K drama"];

let favourite = new Array("hobbies", "food", "movies");
console.log(favourite);

// JAVASCRIPT CLASSES=> OOP (OBJECT ORIENTED PROGRAMMING)=> Object Blueprint => How yout  object is expected to look 

class Person {
    constructor(name, age, skin_colour){
        this.name = name
        this.age = age 
        this.skin = skin_colour
    }
}

let Daniel = new Person("Daniel", 24, "Dark");
let Samuel = new Person("samuel", 56, "Dark");

const people =[Daniel, Samuel];
const male = people.map((person) => {
    return {
        skin: person.skin,
        name: person.name
    }
})

console.log(male);