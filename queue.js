class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class ArrayQueue {
    constructor() {
    this.first = null;
    this.last = null
    this.length = 0;
}

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.first){
            this.first = this.last = newNode
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length ++
}

    dequeue() {
    if (!this.first) return "The queue is empty";
    const removed = this.first.value;
    this.first = this.first.next;
    if(!this.first){
        this.last = null;
    }
    this.length--
    return removed 
}

    print(){
        let curr = this.first, result = [];
        while (curr){
            result.push (curr.value);
            curr = curr.next;
        }
        console.log(result.join(" <- "));
    }

    reverse(k){
        if(k > this.length) return;
        let prev = null;
        let curr = this.first;
        this.last = curr
        for (let i = 0; i < k; i++) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        } 
        this.length = k;
        this.first = prev
        return  this;
    }
}


const queue = new ArrayQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); 
queue.dequeue(); 
queue.print();   
console.log(queue); 

