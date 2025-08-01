function selectionSortNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var temp = numbers[i];
            numbers[i] = numbers[minIndex];
            numbers[minIndex] = temp;
        }
    }
    return numbers;
}

module.exports = selectionSortNumbers;
