class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}; 
    }

    myPush (element){
        this.data[this.length] = element;
        this.length ++;
        return this.data; 
    }
    myGet(index){
        if (this.data[index]===undefined){
            return "Not found";
        }
        return this.data[index]; 
    }
    myPop(){
        delete this.data[this.length -1]
        this.length--;
        return; 
    }
}
let sss = []
let names = new MyArray(); 

names.myPush("Daniel"); 
names.myPush("Samuel");
console.log(names);
console.log(names.myGet(2));

// SPREAD OPERATOR 
let Spop = ['Sporty Beet', "trading"]

let newSop = ["Eating", "Sleeping"]
console.log(Spop, "newSpop")


function capitalize(sentence){
    let new_sentence = sentence.split(" ");
    // let newS = '';
    let hh  = []
    for (let index = 0; index < new_sentence.length; index++) {
    let element = new_sentence[index];
    // console.log(element[0].toUpperCase() + element.slice(1));
    // newS += element[0].toUpperCase() + element.slice(1) + ""; 
    hh.push(element[0].toUpperCase() + element.slice(1))
    }
    // return newS;
    return hh.join(" ");
}

console.log(capitalize("my name is daniel"));

let mn = "Mathew"
console.log(mn.slice(0, 2) + mn[2].toUpperCase() + mn.slice(3));

let wb  = "my name is winner";
let newWb= wb.split(" ")
for (let i = 0; i < newWb.length; i++) {
    console.log(newWb[2][0].toUpperCase() + newWb[2].slice(1));
}

// properties => length, data. wb
//method => get, push, pop, shift, unshift, foreach, include, slice, filter
// Create an array of numbers [2,4,3,7,5,9,1,6,4]
// create a function that adds digit to each element in the array and returns the new array.


// addDigit(5)

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// function rightAngleTriangle(num) {}

// rightAngleTriangle(5)

//function addDigit(digit){
    // write your algorithm here
// //}

//let myArr = ["Peter", "Daniel", "Samuel", "Doe", "James", "Doe"]
//Write an alogrithm that spilt the array into chuck 
// function xhunckingArr (arr, div){}
