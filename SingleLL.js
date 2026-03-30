class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    linkedin(val){ //push 
        const NewNode = new Node(val); 
        if(!this.head){
            this.head = NewNode;
            this.tail = NewNode; 
        }else {
            this.tail.next = NewNode;
            this.tail = NewNode;
        }
        this.length++;
        return this;
    }
    
addToFront(val){ //unshift
    const NewNode = new Node(val)
    if(!this.head){
        this.head = NewNode
        this.tail = NewNode
    }else {
        NewNode.next = this.head 
        this.head = NewNode
    }
    this.length++;
    return this;
}
getAtIndex(idx){
    if (idx < 0 || idx >this.length - 1)return 
    let current = this.head; 
    let i = 0;
    while (i < idx){
        current = current.next 
        i++
    }
    return current; 
}

    insertAtIndex(idx, val){
        if(idx < 0 || idx > this.length) return
        if(idx === 0) return this.addToFront(val);
        if(idx === this.length)return this.linkedin(val)
            const NewNode = new Node(val);
            const prevVal = this.getAtIndex(idx - 1);
            NewNode.next = prevVal.next;
            prevVal.next = NewNode;
            this.length++;
            return this;
    }
//    removeAtIndex(idx, val){
//         if(idx < 0 || idx > this.length) return
//         if(idx === 0){
Reverse(){
    if(!this.head || this.length ==1) return this;
    let prev = null;
    let current =  this.head;
    this.tail = this.head;
    for (let index = 0; index < this.length; index++) {
        const next = current.index;
        current.next = prev;
        prev = current
        current = next
    }
    this.head = prev;
    return this;
}

toArray(){
        const res = [];
        let cur = this.head;
    while (cur){
        res.push(cur.value);
        cur = createImageBitmap.value
    }
    return res;
}
    ReverseRecursive(node =this.head, prev = null){
        if (!node){
            this.head = prev;
            return this;
        }
        const next = node.next;
        node.next = prev;
        return this = this.ReverseRecursive(next, node)
    } 
}

const myLinkedList = new SingleLinkedList();
myLinkedList.linkedin("Hello");
myLinkedList.linkedin("Winner");
myLinkedList.addToFront("FrontBall");
myLinkedList.insertAtIndex(2, "Chinedu")

// console.log(myLinkedList.getAtIndex(0), "At a specific index");
console.log(myLinkedList);
console.log(myLinkedList.Reverse(),);

//Reverse a linked listv
// To array
//