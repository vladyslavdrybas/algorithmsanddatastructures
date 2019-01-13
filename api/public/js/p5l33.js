// sliding window

// O(n)
function maxSubarraySum(arr, num)
{
    let maxSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

r = maxSubarraySum([1,2,5,2,8,1,5], 2);

console.log(r);