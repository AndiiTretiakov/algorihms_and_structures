const myArray = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]

// function linearSearch(arr, item) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === item)
//         return i;
//     }
//     return null
// }


// Same as above with number of iterations
let count = 0

function linearSearch(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        count += 1
        if(arr[i] === item)
        return i;
    }
    return null
}


console.log(linearSearch(myArray, 122))
console.log('count =', count)
