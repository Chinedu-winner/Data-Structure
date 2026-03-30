const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

    const odd = arr.slice(0, 3, 6, 8, 2, 4, 6);    
    console.log(odd);

    const even = arr.filter(num => num % 2 === 0);
    console.log(even);

    for (let i = 0; i <=50; i++) {
    if (i%3 === 0 && i %5 === 0) {
        console.log("FizzBuzz");
    }else if(i%3 === 0) {
        console.log("Fizz");
    }else if(i%5 === 0) {
        console.log("Buzz");
    }else{
        console.log(i);
    }
    }

const people = ["Daniel", "Samuel", "Kum", "Grey", "Tom", "Dapo", "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Karl", "Leo"];
function come(array, index) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
    result.push(array.slice(i, i + 2 ))      
    }
    return result;
}
console.log(come(people, 2));
console.log(come(people, 4));
    