
/**
 * Goal, you are to design and implement a class
 * that will allow packing of objects inside it
 * or represent the object itself.
 *
 * The class `Item` will contain:
 * 	* label
 * 	* description
 * 	* know if it is a box
 * 	* if a box, have other items inside it.
 *
 * Implement the methods associated
 *
 */
export class Item {

	label: string
	description: string
	isBox: boolean
	contents: Array<Item> = [];

	constructor(label: string, description: string,
		isBox: boolean) {
			this.label = label;
			this.description = description;
			this.isBox = isBox;
	}

	getLabel(): string {
		return this.label;
	}

	getDescription(): string {
		return this.description;
	}

	getContents(): Array<Item> {
		return this.contents;
	}

	addItem(item: Item): void {
		if (this.isBox) {
			this.contents.push(item);
		}
	}

	isABox(): boolean {
		if (this.isBox) {
			return true;
		}
		else return false;
	}
}
