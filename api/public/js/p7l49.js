function power(a, b) {
    if (b === 0) {
        return 1;
    }
    return a*power(a,b-1);
}

function factorial(number) {
    if (number === 1 || number === 0) {
        return 1;
    }
    return number*factorial(number-1);
}

function productOfArray(ar) {
    if (ar.length === 1) {
        return ar[0];
    }
    if (ar.length === 0) {
        return 0;
    }
    return ar[0]*productOfArray(ar.slice(1));
}

function recursiveRange(number){
    if (number === 0) {
        return 0;
    }
    return number + recursiveRange(number - 1);
}

function fib(number){
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }

    let counter = 1;

    function finder(prev, current) {
        if (counter === number) {
            return current;
        } else {
            counter++;
        }
        let nextNumber = prev + current;
        return finder(current, nextNumber);
    }
    return finder(0, 1);
}

function fib2(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}



console.assert(1 === power(2,0), 'wrong:'+power(2,0));
console.assert(4 === power(2,2), 'wrong:'+power(2,2));
console.assert(16 === power(2,4), 'wrong:'+power(2,4));

console.assert(1 === factorial(0), 'wrong:'+factorial(0));
console.assert(1 === factorial(1), 'wrong:'+factorial(1));
console.assert(2 === factorial(2), 'wrong:'+factorial(2));
console.assert(24 === factorial(4), 'wrong:'+factorial(4));
console.assert(5040 === factorial(7), 'wrong:'+factorial(7));

console.assert(6 === productOfArray([1,2,3]), 'wrong:'+productOfArray([1,2,3]));
console.assert(60 === productOfArray([1,2,3,10]), 'wrong:'+productOfArray([1,2,3,10]));


console.assert(21 === recursiveRange(6), 'wrong:'+recursiveRange(6));
console.assert(55 === recursiveRange(10), 'wrong:'+recursiveRange(10));


console.assert(0 === fib(0), 'wrong:'+fib(0));
console.assert(1 === fib(1), 'wrong:'+fib(1));
console.assert(1 === fib(2), 'wrong:'+fib(2));
console.assert(2 === fib(3), 'wrong:'+fib(3));
console.assert(3 === fib(4), 'wrong:'+fib(4));
console.assert(55 === fib(10), 'wrong:'+fib(10));
console.assert(317811 === fib(28), 'wrong:'+fib(28));
console.assert(9227465 === fib(35), 'wrong:'+fib(35));
console.assert(55 === fib2(10), 'wrong:'+fib2(10));

