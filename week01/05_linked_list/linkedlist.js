"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.next = null;
        this.value = value;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.root = null;
        this.root = null;
    }
    LinkedList.prototype.retrieveRoot = function () {
        return this.root;
    };
    /**
     * Retrieves an object within the list
     * @param {number} index -
     * 	Logical location of a node
     * @return {number} obj -
     * 	Object found at location or null
     */
    LinkedList.prototype.retrieve = function (index) {
        if (!this.root)
            return null;
        if (index < 0)
            return null;
        var current = this.root;
        var currentIndex = 0;
        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current ? current.value : null;
    };
    LinkedList.prototype.append = function (obj) {
        var newNode = new LinkedListNode(obj);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        var current = this.root;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    /**
     * Removes an element from the linkedlist, returns it
     * @param {number} index -
     * 	Location of object to be removed
     * @return {Object} obj -
     * 	Object to be removed or null
     *
     */
    LinkedList.prototype.remove = function (index) {
        if (!this.root || index < 0)
            return null;
        // remove head if index 0
        if (index === 0) {
            var deletedData = this.root.value;
            this.root = this.root.next;
            return deletedData;
        }
        var current = this.root;
        var previous = null;
        var currentIndex = 0;
        while (current !== null && currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }
        if (current && previous) {
            previous.next = current.next;
            return current.value;
        }
        return null;
    };
    LinkedList.prototype.prepend = function (obj) {
        var newNode = new LinkedListNode(obj);
        //links new node to current head node
        newNode.next = this.root;
        //new node becomes head of the list
        this.root = newNode;
    };
    LinkedList.prototype.size = function () {
        var count = 0;
        var current = this.root;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
