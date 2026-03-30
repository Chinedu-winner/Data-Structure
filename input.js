class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Push element to the end
    myPush(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    // Pop element from the end
    myPop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Unshift: add element to the front
    myUnshift(element) {
        // Reindexing 
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = element;
        this.length++;
        return this.length;
    }

    // Shift: [remove element from the front]
    myShift() {
        if (this.length === 0) return undefined;
        const firstItem = this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            console.log("This is the data", this.data[i]);
            console.log("This is the index", i);
            
            this.data[i] = this.data[i + 1];
            console.log("This is the data after reassigning", this.data[i], " => ", i);
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    // Get element at index
    myGet(index) {
        return this.data[index] !== undefined ? this.data[index] : "Not found";
    }

    // Add a digit to all elements (assumes numeric elements)
    addDigit(digit) {
        let newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.myPush(this.data[i] + digit);
        }
        return newArray;
    }

    // Print a right-angle triangle of stars
    rightAngleTriangle() {
        let tri = ""
        for (let i = 1; i <= this.length; i++) {
            tri += "*"
            console.log(tri);
        }
    }

    // Display the internal array nicely
    print() {
        console.log(this.data);
    }
}


let names = new MyArray();
names.myPush("Daniel");
names.myPush("Samuel");
names.myPush("Kum");
names.myPush("Grey");
names.myPush("Tom");
names.myPush("Dapo");
console.log(names);
// names.print();

// console.log(names.myPop(), "(popped name)");
// console.log(names, "(After pop)");

// console.log(names.myGet(0), "(get index 0 after)");

// names.myUnshift("Alice");
// console.log(names, "(Using unshift adds Alice to index 0 on the array)");    
console.log(names.myShift()); 
console.log(names, "(Using shift remove Alice the first element of the array)");    


// let numbers = new MyArray();
// [2, 4, 3, 7, 5, 9, 1, 6, 4].forEach(n => numbers.myPush(n));

// console.log("Original array:");
// numbers.print();  

// console.log("Add 5 to each element:");
// let newNumbers = numbers.addDigit(5);
// newNumbers.print();  

// console.log("Right-angle triangle:");
// numbers.rightAngleTriangle();