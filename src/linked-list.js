const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
    
        if (this.length === 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;

            this._tail = newNode;
        }
    
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current = this._head;
        let ind = 0;
    
        while (ind < index) {
            current = current.next;
            ind++;
        }
    
        return current.data || -1;
    }

    insertAt(index, data) {
        if (index < 0 || this.length < index) {
            return false;
        }
    
        let node = new Node(data);

        if (index === 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;

        }else if (index === this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        }else {
            let current = this._head;
            let prev = null;
            let ind = 0;

            while (ind < index) {
                prev = current;
                current = current.next;
                ind++;
            }

            prev.next = node;
            node.prev = prev;

            node.next = current;
            current.prev = node;
        }

        this.length++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index ) {
            return null;
        }
      
        let current;

        if (index === 0) {
            current = this._head;

            this._head = this._head.next;
            this._head.prev = null;
        } else if(index === this.length - 1) {
            current = this._tail;

            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            current = this._head;

            let prev = null;
            let ind = 0;
    
            while (ind < index) {
                prev = current;
                current = current.next;
                ind++;
            }
    
            prev.next = current.next;
            current.next.prev = prev;
        }
    
        this.length--;
        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;

        while(current){
            current.prev = current.next;
            current.next = prev;
            prev = current;
            current = current.prev;
        }

        this._tail = this._head
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let index = 0;
    
        while (current) {
            if (current.data === data) {
                return index;
            }
    
            current = current.next;
            index++;
        }
    
        return -1;
    }
}

module.exports = LinkedList;
