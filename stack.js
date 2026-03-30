class Stack {
    constructor(){
        this.item = [];
    }

    push(val){
        this.item.push(val);
        return this.item.length;
    }

    pop(){
        if (this.item.length == 0)return null;
        return this.item.pop();
    }

    peek(){
        if (this.item.length == 0) return "Stack is empty";
        return this.item[this.item.length - 1];
    }

    isEmpty(){
        return this.item.length ===  0;
    }

    size(){
        return this.item.length;
    }

    print(){
        console.log(this.item.join(" <- "));
    }
}

const element = new Stack();
element.push ('Daniel'); 
element.push('John');
element.push('Smith');
console.log(element);

element.pop();
console.log(element);
console.log("Top element", element.peek());
console.log("Is Empty:", element.isEmpty());
console.log("Size:", element.size());
element.print();