

class ShoppingList {

	constructor() {
		this.items = [];
	}

	/**
	 * Adds an item, item is a name, will add it to the end of the list
	 * @param {string} item - itemName
	 */
	addItem(item) {
		this.items.push({ name: item, completed: false });
	}

	/**
	 * Removes an item based on an index
	 * @param {number} index - index within the list
	 */
	removeItem(index) {
		this.items.splice(index, 1);
	}

	/**
	 * Sets an item as complete, your items should be objects
	 * @param {number} index - index within the list
	 */
	markItemAsComplete(index) {
		this.items[index].completed = true;
	}

	/**
	 * Uses the index to retrieve the item
	 * @param {number} index - index within the list
	 * @return {Object} item - Object that contains name and completed fields
	 */
	getItem(index) {
		let item = this.items[index];
		return item;
	}

	/**
	 * Returns the array of the shopping list
	 * @return {Array} list - It will return the array containing the objects
	 * 	that have the fields name and completed.
	 */
	list() {

		return this.items;
	}

}

module.exports = ShoppingList;
