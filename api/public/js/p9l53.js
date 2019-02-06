function reverse(str) {
    let len = str.length;
    if (len === 1) {
        return str[len-1];
    }
    return str[len-1]+reverse(str.slice(0,len-1));
}

// function reverse(str){
//     if(str.length <= 1) return str;
//     return reverse(str.slice(1)) + str[0];
// }

function isPalindrome(str){
    function reverse(str) {
        let len = str.length;
        if (len === 1) {
            return str[len-1];
        }
        return str[len-1]+reverse(str.slice(0,len-1));
    }

    return str === reverse(str);
}

// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

/**
 * <p>Write a recursive function called <strong>someRecursive</strong>
 * which accepts an array and a callback. The function returns true if
 * a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.</p>
 */
const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback) {
    if ('function' !== typeof callback) {
        throw new TypeError();
    }
    if ('object' !== typeof arr) {
        throw new TypeError();
    }
    let element = arr.pop();
    let result = callback(element);
    if (arr.length === 1) {
        return result;
    }
    return false === result ? someRecursive(arr, callback) : true;
}

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }

/**
 * <p>Write a recursive function called <strong>flatten</strong>
 * which accepts an array of arrays and returns a new array with
 * all values flattened.</p>
 */
function flatten(arr) {
    let result = [];

    function helper(list) {
        if (list.length === 0) {
            return;
        }
        let element = list.pop();
        console.log({'list': list, 'last elem': element, 'result': result});

        if (Array.isArray(element)) {
            helper(element);
        } else {
            result.push(element);
        }
        helper(list);
    }
    helper(arr);

    console.log(result);
    return result.reverse();
}

// function flatten(oldArr){
//     var newArr = []
//     for(var i = 0; i < oldArr.length; i++){
//         if(Array.isArray(oldArr[i])){
//             newArr = newArr.concat(flatten(oldArr[i]))
//         } else {
//             newArr.push(oldArr[i])
//         }
//     }
//     return newArr;
// }

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.assert(JSON.stringify([1, 2, 3, 4, 5]) === JSON.stringify(flatten([1, 2, 3, [4, 5] ])), 'Wrong [1, 2, 3, [4, 5] ] flatten');
console.assert(JSON.stringify([1, 2, 3, 4, 5]) === JSON.stringify(flatten([1, [2, [3, 4], [[5]]]])), 'Wrong [1, [2, [3, 4], [[5]]]] flatten');
console.assert(JSON.stringify([1,2,3]) === JSON.stringify(flatten([[1],[2],[3]])), 'Wrong [[1],[2],[3]] flatten');
console.assert(JSON.stringify([1,2,3]) === JSON.stringify(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])), 'Wrong [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] flatten');

console.assert(true === someRecursive([1,2,3,4], isOdd), 'Wrong [1,2,3,4] someRecursive');
console.assert(true === someRecursive([4,6,8,9], isOdd), 'Wrong [4,6,8,9] someRecursive');
console.assert(false === someRecursive([4,6,8,8], isOdd), 'Wrong [1,2,3,4] someRecursive');
console.assert(false === someRecursive([4,6,8,2], val => val > 10), 'Wrong [4,6,8] someRecursive');

console.assert('emosewa' === reverse('awesome'), 'Wrong awesome reverse');
console.assert('loohcsmhtir' === reverse('rithmschool'), 'Wrong rithmschool reverse');

console.assert(false === isPalindrome('awesome'), 'Wrong awesome isPalindrome');
console.assert(false === isPalindrome('foobar'), 'Wrong foobar isPalindrome');
console.assert(true === isPalindrome('tacocat'), 'Wrong tacocat isPalindrome');
console.assert(true === isPalindrome('amanaplanacanalpanama'), 'Wrong amanaplanacanalpanama isPalindrome');
console.assert(false === isPalindrome('amanaplanacanalpandemonium'), 'Wrong amanaplanacanalpandemonium isPalindrome');
