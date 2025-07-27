function reverseArray(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const opposite = array.length - 1 - i;
        const temp = array[i];
        [array[i], array[opposite]] = [array[opposite], array[i]];
    }
}

module.exports = reverseArray;













// function reverseArray(array) {
//     let even = true;
//     if(array.length % 2 === 1){
//         even = false
//     }

//     for (let i = 0; i < array.length; i++) {

//         if (array.length === 0 || array.length === 1) return array;
//         if (i * 2 === array.length) return array; //even length
//         if (even === false && i * 2 === array.length - 1) return array; // odd length
//         let x = array[array.length - 1 - i];
//         let y = array[i];

//         array[i] = x;
//         array[array.length - 1 - i] = y;
//     }
// }

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(reverseArray(array));
// let array1 = [1, 2, 3, 4, 5, 6];
// console.log(array1);
// console.log(reverseArray(array1));


