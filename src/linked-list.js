const Node = require('./node');

class LinkedList {
   function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}


    Double.prototype.append = function (data) {
  var node = {
            value: data,
            next: null,
            prev: null,
        }
         
        if (this.length == 0) {
            this.tailOfList = node;
            this.headOfList = this.tailOfList;
        }
        else {
            this.tailOfList.next = node;
            node.prev = this.tailOfList;
            this.tailOfList = node;
        }
        this.length++;
        return this;
};

   Double.prototype.head = function () {
        var node = this.tailOfList;
        while (node.prev) {
            node = node.prev;
        }   
        return node.value;   
};

   Double.prototype.tail = function () {
        return this.tailOfList.value;  
};

    Double.prototype.at = function (index) {
        var node = this.tailOfList;
        for (var i = this.length - 1; i > -1; i--) {
          if (i === index ) {
               return node.value;
               break;
          }
            else {node = node.prev;}
        }
};

    Double.prototype.insertAt = function  (index, data) {
        var newNode = {
            value: data,
            next: null,
            prev: null,
        }

        var node = this.tailOfList;
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
};

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    Double.prototype.reverse = function () {
        var nodeReverse = this.tailOfList;
        this.tailOfList = null;
        for (var i = this.length - 1; i > -1; i--) {
            var node = {
              value: nodeReverse.value,
              next: null,
              prev: null,
            };

            if (i === this.length - 1) {
              this.tailOfList = node;
              // console.log(node.value);
              nodeReverse = nodeReverse.prev;
            }
            else {
                this.tailOfList.next = node;
                node.prev = this.tailOfList;
                this.tailOfList = node;
                // console.log(node.value);
                nodeReverse = nodeReverse.prev;
           }
        }
        return this;
};

    Double.prototype.indexOf = function (data) {
        var node = this.tailOfList;
        while (node.prev) {
            node = node.prev;
        }   
        var help = 0;
        for (var i = 0; i < this.length; i++) {
          if (node.value === data ) {
               return i;
               help = 1;
               break;
          }
            else {node = node.next;}
        }
        if (help === 0) {
           return -1;
        }    
};

}

module.exports = LinkedList;
