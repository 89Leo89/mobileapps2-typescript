"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
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
var Item = /** @class */ (function () {
    function Item(label, description, isBox) {
        this.contents = [];
        this.label = label;
        this.description = description;
        this.isBox = isBox;
    }
    Item.prototype.getLabel = function () {
        return this.label;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    Item.prototype.getContents = function () {
        return this.contents;
    };
    Item.prototype.addItem = function (item) {
        if (this.isBox) {
            this.contents.push(item);
        }
    };
    Item.prototype.isABox = function () {
        if (this.isBox) {
            return true;
        }
        else
            return false;
    };
    return Item;
}());
exports.Item = Item;
