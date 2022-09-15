const myArray = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] /*
                [0, 1, 1, 2, 3........] */
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
            count += 1
        }
        let temporary = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temporary
    }
    return array;
}



console.log(selectionSort(myArray))
console.log('count = ', count)
console.log(myArray.length) // O(n*n)