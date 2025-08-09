
export class LinkedListNode {
	value: number
	next: LinkedListNode | null

	constructor(value: number) {
		this.next = null;
		this.value = value;
	}

}


/** LinkedList class **/
export class LinkedList {
	
	root: LinkedListNode | null = null;

	/**
	 * Creates a linkedlist
	 * Should initialise the root node of the linked list
	 * and size
	 */
	constructor() {
		//TODO: Implement fields
		this.root = null;
	}

	/**
	 * Gets the root of the linkedlist, 
	 * this would be the starting
	 * node
	 * @return {LinkedListNode} root - 
	 * 	Root of the linkedlist
	 */
	retrieveRoot(): LinkedListNode | null {
		return this.root;	
	}

	/**
	 * Retrieves an object within the list
	 * @param {number} index - 
	 * 	Logical location of a node
	 * @return {number} obj - 
	 * 	Object found at location or null
	 */
	retrieve(index: number): number | null {
		if (!this.root) return null;
		if (index < 0) return null;

		let current: LinkedListNode | null = this.root;
		let currentIndex = 0;

		while (current !== null && currentIndex < index) {
			current = current.next;
			currentIndex++;
		}

		return current ? current.value : null;
	}

	/**
	 * Appends an object to the end of the linkedlist
	 * @param {number} obj - 
	 * 	Object to be inserted into the
	 * 	linked list
	 *
	 */
	append(obj: number): void {

		const newNode = new LinkedListNode(obj)

		if (!this.root) {
			this.root = newNode;
			return;
		}

		let current = this.root;

		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	/**
	 * Removes an element from the linkedlist, returns it
	 * @param {number} index - 
	 * 	Location of object to be removed
	 * @return {Object} obj - 
	 * 	Object to be removed or null
	 *
	 */
	remove(index: number): number | null {

		if (!this.root || index < 0) return null;

		// remove head if index 0
		if (index === 0) {
			const deletedData = this.root.value;
			this.root = this.root.next;
			return deletedData;
		}

		let current: LinkedListNode | null = this.root;
		let previous: LinkedListNode | null = null;
		let currentIndex = 0;

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
	}


	/**
	 * Adding a new node to the front of the linkedlist
	 * @param {number} obj - 
	 * 	Object to be added to the front
	 */
	prepend(obj: number): void {
		const newNode = new LinkedListNode(obj)
		//links new node to current head node
		newNode.next = this.root;
		//new node becomes head of the list
		this.root = newNode;
	}


	/**
	 * Size of the list, number of elements in the list
	 * @return {number} size - 
	 * 	Number of elements in the list
	 */
	size(): number {
		let count = 0;
		let current = this.root;

		while(current){
			count ++;
			current = current.next;
		}

		// in the linked list
		return count;
	}

}


