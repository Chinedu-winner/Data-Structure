    class Node{
        constructor(val){
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }

    class DBLL{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0; 
        }
    
    // push -> add to the last of the element
    push (val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this; 
    }

    // unshift -> add to the front of the element. 
    unshift(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getNode(idx){
        if(idx === 0)return this.head;
        if(idx === this.length) return this.tail;
        if(idx < 0 || idx >= this.length) return null;
    
        if(idx <this.length-1){
            let current = this.head
            let i = 0;
            while (i < idx){
                current = current.next;
                i ++;
            } 
        }else {
            let current = this.tail;
            let i = this.length - 1;
            while (idx  < i){
                current = current.prev;
                i --; 
            }
        } 
        return current; 
    }

    //Insert at index (0..length). Returns true if success.
    insertAt(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) { this.prepend(value); return true; }
        if (index === this.length) { this.append(value); return true; }
    
        const nextNode = this.getNode(index);
        if (!nextNode) return false;
        const prevNode = nextNode.prev;
        const newNode = new DNode(value);
    
        newNode.prev = prevNode;
        newNode.next = nextNode;
        prevNode.next = newNode;
        nextNode.prev = newNode;
    
        this.length++;
        return true;
    }
    
    //Remove node at index and return it (or null)
    removeAt(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
    
        const node = this.getNode(index);
        const { prev, next } = node;
        prev.next = next;
        next.prev = prev;
    
        node.next = node.prev = null;
        this.length--;
        return node;
    }

    toArray(){
        const res = [];
        let current = this.head;
        for (let cur = 0; cur < this.length; cur++) {
            this.push(current.value)
            current = current.next;
        }
        return current;
    }

    reverse(){
        if(!this.head || this.length === 1) return this;
        let cur = this.head;
        while (cur){
            const next = cur.next;
            cur.next = cur.prev; 
            cur.prev = next;
            cur = next;  
        }
        const tmp = this.head;
        this.head = this.tail; 
        this.tail = tmp;
        return this;
    }
}

const elementNode = new DBLL();
elementNode.push("Hey");
elementNode.unshift("Hello");
elementNode.toArray("Ayo");
console.log(elementNode);

// Do the insert at and remove at 