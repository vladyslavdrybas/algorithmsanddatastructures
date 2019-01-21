//recursion

function factorial(num) {
    return num === 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5));

console.assert(120 === factorial(5), 'wrong factorial function result');
