const Node = require('./node');

class LinkedList {
    constructor() {
  this._tail = null;
  this._head = null;
  this.length = 0;}

    append(data) {
        var node = new Node(data);
        
            if (this.length == 0) {
            this._tail = node;
            this._head = this._tail;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        var node = this._tail;
        while (node.prev) {
            node = node.prev;
        }   
        return node.data;
    }

    tail() {
        return this._tail.data;
    }

     at(index) {
        var node = this._tail;
        for (var i = this.length - 1; i > -1; i--) {
          if (i === index ) {
               return node.data;
               break;
          }
            else {node = node.prev;}
        }
     }

    insertAt(index, data) {
        var newNode = new Node(data);
        var node = this._tail;
        for (var i = this.length - 1; i > -1; i--) {
          if (i === index - 1 ) {
            newNode.next = node.next;
            newNode.prev = node;
            node.next.prev = newNode;
            node.next = newNode;
            break;
          }
            else {node = node.prev;}
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length==0) {
        return true;
      } else {
        return false;}
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    indexOf(data) {
        var node = this._tail;
        while (node.prev) {
            node = node.prev;
        }   
        var help = 0;
        for (var i = 0; i < this.length; i++) {
          if (node.data === data ) {
               return i;
               help = 1;
               break;
          }
            else {node = node.next;}
        }
        if (help === 0) {
           return -1;
        }    
    }

    reverse() {
         var nodeReverse = this._tail;
        this._tail = null;
        for (var i = this.length - 1; i > -1; i--) {
            var node = {
              data: nodeReverse.data,
              next: null,
              prev: null,
            };

            if (i === this.length - 1) {
              this._tail = node;
              nodeReverse = nodeReverse.prev;
            }
            else {
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
                nodeReverse = nodeReverse.prev;
           }
        }
        return this;
    }

    deleteAt(index) {
         if (index < this.length && index > -1) {

            var node = this._head;
            var i = 0;
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.data = node.next.data;
                this._tail = node;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            this.length--;
            return this;
        } 
    }
}

module.exports = LinkedList;