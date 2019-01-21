// multiple pointers

function sumZero(arr)
{
    // first element of the array
    let left = 0;
    // last element of the array
    let right = arr.length - 1;

    let sum = [];

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return sum;
}

//input data must be a sorted array
r = sumZero([-4,-3,-2,-1,0,5,3]);

console.log(r);