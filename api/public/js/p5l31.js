// multiple pointers
// count unique values

function countUniqueValues(arr)
{
    if (arr.length < 2) {
        return arr.length;
    }
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j+1;
}

function sortNum(a,b)
{
    return a - b;
}

r = countUniqueValues([1,1,3,1,51,1,-2].sort(sortNum));

console.log(r);