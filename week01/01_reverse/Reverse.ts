function reverseArray<T>(array: T[]): T[] {
    for(let i =0; i < Math.floor(array.length / 2); i++){
        const opposite = array.length - i -1;
        const temp = array[i];
        [array[i], array[opposite]] = [array[opposite], temp]
    }
return array; 
}

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(reverseArray(array));
// let array1 = [1, 2, 3, 4, 5, 6];
// console.log(array1);
// console.log(reverseArray(array1));

module.exports = reverseArray;
