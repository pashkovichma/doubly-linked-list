const Node = require('./node');

class LinkedList {
    constructor() {
  this.tail = null;
  this.head = null;
  this.length = 0;}

    append(data) {
          var node = {
            data: data,
            next: null,
            prev: null,
        }
         
        if (this.length == 0) {
            this.tail = node;
            this.head = this.tail;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        var node = this.tail;
        while (node.prev) {
            node = node.prev;
        }   
        return node.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        var node = this.tail;
        for (var i = this.length - 1; i > -1; i--) {
          if (i === index ) {
               return node.data;
               break;
          }
            else {node = node.prev;}
        }
    }

    insertAt(index, data) {
        var node = this.tail;
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
        return trye;
      } else {
        return false;}
    }

    clear() {
        head=null;
        tail=null;
        lengtn=0;
    }

    deleteAt(index) {
         if (index < this.length && index > -1) {

            var node = this.head;
            var i = 0;
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.data = node.next.data;
                this.tail = node;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            this.length--;
            return this;
        } 
    }

    reverse() {
         var nodeReverse = this.tail;
        this.tail = null;
        for (var i = this.length - 1; i > -1; i--) {
            var node = {
              data: nodeReverse.data,
              next: null,
              prev: null,
            };

            if (i === this.length - 1) {
              this.tail = node;
              nodeReverse = nodeReverse.prev;
            }
            else {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
                nodeReverse = nodeReverse.prev;
           }
        }
        return this;
    }

    indexOf(data) {
        var node = this.tail;
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
}

module.exports = LinkedList;