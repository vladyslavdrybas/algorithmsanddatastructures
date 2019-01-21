// frequency counter pattern

// O(N*logN)
function same(a,b)
{
    if (a.length !== b.length) {
        return false;
    }

    a.sort();
    b.sort();

    for (let i = 0; i < a.length; i++ ) {
        if (Math.pow(a[i], 2) !== b[i]) {
            return false;
        }
    }

    return true;
}

// O(N)
function sameOptimized(a,b) {
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

    console.log(frequencyA);
    console.log(frequencyB);

    for (let key in frequencyA) {
        if (!frequencyB.hasOwnProperty(key ** 2)) {
            return false;
        }

        if (!frequencyA.hasOwnProperty(key)) {
            return false;
        }

        if (frequencyB[key ** 2] !== frequencyA[key]) {
            return false;
        }
    }

    return true;
}

r = same([1,2,3], [4,1,9]);
console.log(r);

r = sameOptimized([1,2,2,3], [4,1,9,4]);
console.log(r);