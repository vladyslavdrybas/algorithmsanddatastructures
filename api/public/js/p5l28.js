    // anagrams pattern

function isAnagramValid(a, b)
{
    if (a.length !== b.length) {
        return false;
    }

    if (a === '' && b === a) {
        return true;
    }

    if (a === b) {
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

r = isAnagramValid('car', 'rac');

console.log(r);