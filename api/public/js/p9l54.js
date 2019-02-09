/**
 *<p>Write a recursive function called <strong>capitalizeFirst</strong>.
 * Given an array of strings, capitalize the first letter of each string in the array.</p>
 */
function capitalizeFirst (arr) {
    let result = [];
    let len = arr.length;
    function helper(list) {
        let word = arr.pop();
        result[--len] = word.charAt(0).toUpperCase()+word.slice(1);
        console.log({'word':word,'len':len});
        if (len === 0) {
            return;
        }
        return helper(list);
    }
    helper(arr);
    console.log(result);
    return result;
}

/**
 * <p>Write a recursive function called <strong>nestedEvenSum</strong>.
 * Return the sum of all even numbers in an object which may contain nested objects.</p>
 */
function nestedEvenSum (obj) {
    let sum = null;
    let counter = 0;
    function helper(inside) {
        counter++;
        if (counter > 100) {
            return;
        }

        let key = Object.keys(inside)[0];

        if (key === undefined) {
            return;
        }
        let value = inside[key];
        delete inside[key];

        if (typeof value === 'object' || Object.prototype.toString.call(value) === '[object Array]') {
            helper(value);
        }

        if (typeof value === 'number') {
            if (value % 2 === 0) {
                sum += value;
            }
        }
        helper(inside);
    }
    helper(obj);
    console.log({'RESULT':sum});
    return sum;
}


let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

/**
 * <p>Write a recursive function called <strong>capitalizeWords</strong>.
 * Given an array of words, return a new array containing each word capitalized.</p>
 */
function capitalizeWords(words) {
    let result = [];
    let len = words.length;

    function helper(list) {
        result[--len] = list.pop().toUpperCase();
        if (len === 0) {
            return;
        }
        return helper(list);
    }
    helper(words);
    console.log(result);
    return result;
}

let words = ['i', 'am', 'learning', 'recursion'];

/**
 * <p>Write a function called&nbsp;<code>stringifyNumbers</code>
 * which takes in an object and finds all of the values
 * which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!</p>
 * @todo make it better in space complexity
 */
function stringifyNumbers(objToCheck) {
    let result = Object.assign({}, objToCheck);

    function helper(list) {
        for (let key in list) {
            if (false === list.hasOwnProperty(key)) {
                continue;
            }
            let item = list[key];
            if (typeof item === 'number') {
                list[key] = '' + item;
            }
            if (typeof item === 'object' || Object.prototype.toString.call(item) === '[object Array]') {
                list[key] = helper(item);
            }
        }
        return list;
    }
    helper(result);
    return result;
}

function stringifyNumbersChecker(functionValue) {
    for (let key in functionValue) {
        if (false === functionValue.hasOwnProperty(key)) {
            continue;
        }
        let item = functionValue[key];
        if (typeof item === 'number') {
            throw 'number found in: ' + JSON.stringify(functionValue);
        }
        if (typeof item === 'object' || Object.prototype.toString.call(item) === '[object Array]') {
            stringifyNumbersChecker(item);
        }
    }
    return functionValue;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

/**
 * <p>Write a function called&nbsp;<code>collectStrings</code>
 * which accepts an object and returns an array of all
 * the values in the object that have a typeof string</p>
 */
function collectStrings(obj) {
    let result = [];
    let item = null;
    function helper(list) {
        for (let key in list) {
            if (false === list.hasOwnProperty(key)) {
                continue;
            }
            item = list[key];
            if (typeof item === 'string') {
                result.push(item);
            }
            if (typeof item === 'object' || Object.prototype.toString.call(item) === '[object Array]') {
                helper(item);
            }
        }
    }
    helper(obj);
    return result;
}

const objCollectStrings = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

console.assert(JSON.stringify(['Car','Taco','Banana']) === JSON.stringify(capitalizeFirst(['car','taco','banana'])), 'Wrong [\'car\',\'taco\',\'banana\'] capitalizeFirst');
console.assert(6 === nestedEvenSum(obj1), 'Wrong obj1 nestedEvenSum');
console.assert(10 === nestedEvenSum(obj2), 'Wrong obj2 nestedEvenSum');
console.assert(JSON.stringify(['I', 'AM', 'LEARNING', 'RECURSION']) === JSON.stringify(capitalizeWords(words)), 'Wrong [\'I\', \'AM\', \'LEARNING\', \'RECURSION\'] capitalizedWords');

let newOBJ = stringifyNumbers(obj);
console.log(obj);
console.log(newOBJ);
stringifyNumbersChecker(newOBJ);

let resultOfCollectStrings = collectStrings(objCollectStrings);
console.assert(["foo", "bar", "baz"].length === resultOfCollectStrings.length, 'Wrong ["foo", "bar", "baz"] collectStrings');

console.log(resultOfCollectStrings);
resultOfCollectStrings.map(function(item) {
   if (item !== ["foo", "bar", "baz"].find(function(value) {
       return value === item;
   })) {
       throw 'not found: ' + item;
   }
});

