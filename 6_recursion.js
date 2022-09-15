const factorial = (num) => {
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5))


// Fibonachi numbers - 1, 1, 2, 3, 5, 8, 13, 21

const fibonachi = (num) => {
    if (num === 1 || num === 2) {
        return 1
    }
    return fibonachi(num - 1) + fibonachi(num -2)
}

console.log(fibonachi(8))