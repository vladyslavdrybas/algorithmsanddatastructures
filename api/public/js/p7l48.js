// helper method recursive

function collectEvens(nums) {
    let listOfEvens = [];

    function collector(listOfNums) {
        if (listOfNums.length === 0) {
            return;
        }

        if (listOfNums[0] % 2 === 0) {
            listOfEvens.push(listOfNums[0]);
        }

        collector(listOfNums.slice(1));
    }
    collector(nums);

    return listOfEvens;
}

// main purpose - convert array to string by using his own functions
function toString(arr) {
    return arr.map(function(x,i) {console.log([i,x, ''+(arr[i-1]||'')+x]); return ''+(arr[i-1]||'')+x;}).pop();
}

let arr = [1,5,2,7,9,11,6];
let compareWith = [2,6,8,10];

console.table(arr);
console.table(compareWith);
console.table(collectEvens(arr));

console.log(toString(compareWith));

console.assert( toString(compareWith) !== toString(collectEvens(arr)), 'Does not match');