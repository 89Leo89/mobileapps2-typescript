function reverseArray(array) {
    var _a;
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var opposite = array.length - i - 1;
        var temp = array[i];
        _a = [array[opposite], temp], array[i] = _a[0], array[opposite] = _a[1];
    }
    return array;
}

module.exports = reverseArray;
