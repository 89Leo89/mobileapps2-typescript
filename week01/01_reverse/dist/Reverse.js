function reverseArray(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const opposite = array.length - i - 1;
        const temp = array[i];
        [array[i], array[opposite]] = [array[opposite], temp];
    }
    return array;
}

module.exports = reverseArray;
