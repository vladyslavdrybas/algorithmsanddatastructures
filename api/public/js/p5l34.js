// Divide and conquer pattern

function binarySearch(arr, needle)
{
    let min = 0;
    let max = arr.length - 1;

    console.log(arr);

    while (min <= max) {
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle];

        if (currentElement < needle) {
            min = middle + 1;
        } else if (currentElement > needle) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

function sortNum(a,b)
{
    return a - b;
}


arr = [1,2,4,5,6,7,5,4,7,4,3,6,745,43,23,45,7,47,7,87,77,1,421,1,3,2,42,11,123,1,404];
arr.sort(sortNum);
num = 4;
r = binarySearch(arr, num);

console.log(r);