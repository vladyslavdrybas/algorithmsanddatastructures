// frequency counter
function sameFrequency(a, b) {
    a += '';
    b += '';

    if (a === b) {
        return true;
    }

    if (a.length !== b.length) {
        return false;
    }

    let frequencyA = {};
    let frequencyB = {};

    for (let val of a) {
        frequencyA[val] = ++frequencyA[val] || 1;
    }

    for (let val of b) {
        frequencyB[val] = ++frequencyB[val] || 1;
    }

    for (let key in frequencyA) {
        if (!frequencyA.hasOwnProperty(key)) {
            return false;
        }

        if (!frequencyB.hasOwnProperty(key)) {
            return false;
        }

        if (frequencyA[key] !== frequencyB[key]) {
            return false;
        }
    }

    return true;
}

// multiple pointers
function areThereDuplicates(...args)
{
    if (args.length < 2) {
        return false;
    }

    let j = 0;
    args.sort();

    for (let i = 1; i < args.length; i++) {
        if (args[i] !== args[j]) {
            j++;
            args[j] = args[i];
        }
    }
    return (j+1) !== args.length;
}

function areThereDuplicates2(...args)
{
    if (args.length < 2) {
        return false;
    }

    args.sort();

    let previous = 0;
    let current = 1;

    while (current < args.length) {
        if (args[current] === args[previous]) {
            return true;
        }

        previous++;
        current++;
    }

    return false;
}

function areThereDuplicates3(...args)
{
    if (args.length < 2) {
        return false;
    }

    let frequency = {};

    for (let val of args) {
        frequency[val] = ++frequency[val] || 1;
        if (frequency[val] > 1) {
            return true;
        }
    }

    return false;
}

function areThereDuplicatesLiner()
{
    return new Set(arguments).size !== arguments.length;
}

function averagePair(arr, average)
{
    if (arr.length < 2) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    if (right-left === 1) {
        return average === (arr[left]+arr[right])/2;
    }

    let counter = 0;
    console.log(arr);
    while (right-left > 1 && counter < 100) {
        counter++;
        let middle = Math.floor((left + right)/2);
        let averageLeft = (arr[left] + arr[middle])/2;
        let averageRight = (arr[middle] + arr[right])/2;

        if (average === averageRight || average === averageLeft) {
            console.log({
                'counter': counter,
                'averageRight': averageRight,
                'averageLeft': averageLeft,
                'left': left,
                'right': right,
                'middle': middle,
                'arr[left]': arr[left],
                'arr[middle]': arr[middle],
                'arr[right]': arr[right]
            });
            return true;
        }

        if (average < averageRight) {
            right = Math.floor((middle + right)/2);
        } else if (average > averageLeft && average < averageRight) {
            left = Math.floor((middle - left)/2);
        } else if (average > averageRight) {
            left = middle;
            right = arr.length - middle;
        }
    }
    return false;
}

function averagePair2(arr, target){

    if (arr.length === 0) return false;



    arr.sort((a, b) => a - b);



    let left = 0,

        right = arr.length - 1;

console.log(arr);

    let counter = 0;

    while(left < right) {
        counter++;
        let avg = ( arr[left] + arr[right] ) / 2;

        if( avg === target) {
            console.log({
                'counter': counter,
                'avg': avg,
                'left': left,
                'right': right,
                'arr[left]': arr[left],
                'arr[right]': arr[right]
            });
            return true;

        } else if (avg < target) {

            left++;

        } else {

            right--;

        }

    }

    return false;
}

function averagePairInRow(arr, average)
{
    if (arr.length < 2) {
        return false;
    }

    let current = 1;
    do {
        if (average === (arr[current-1]+arr[current])/2) {
            return true;
        }
        current++;
    } while (current < arr.length);

    return false;
}

function sortNum(a,b)
{
    return a - b;
}

function sortString(a,b)
{
    return a > b;
}

function isSubsequence(needle, where)
{
    needle = needle.split('');
    let hasBeenFound = false;
    let char = needle.pop();

    for (let  i =  where.length-1; i >= 0; i--) {
        if (char !== where[i]) {
            hasBeenFound = false;
            continue;
        }
        hasBeenFound = true;
        char = needle.pop();
        if (char === undefined) {
            break;
        }
    }

    return hasBeenFound;
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntArray(size)
{
    let arr = [];
    for (let i = 0; i < size ; i++) {
        arr[i] = getRandomInt(0, 10000);
    }
    return arr;
}

// r = averagePair2([1,3,3,5,6,7,10,12,190,2000].sort(sortNum),8);
//
// console.log(r);
//
// r = averagePair([1,3,3,5,6,7,10,12,190,2000].sort(sortNum),8);
//
// console.log(r);
//
// arr = getRandomIntArray(1000000);
//
// r = averagePair(arr.sort(sortNum),5);
//
// console.log(r);
//
// r = averagePair2(arr.sort(sortNum),5);
//
// console.log(r);

// r = isSubsequence('hello', 'hessdgslsgrerglergerg4o world');
// console.log(r);

r = isSubsequence('hello', 'hsdfselssgelo world');
console.log(r);