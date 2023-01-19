// FIND SUM
// [5,2,[7,-1],3]

function findSum(arr) {
    let sum = 0;

    function helper(nums) {
        // base case
        if(nums.length === 0) return;

        // if subset is an array
        if(Array.isArray(nums[0])){
            helper(nums[0]);
        }
        // if subset is a number
        else {
            sum += nums[0];
        }

        helper(nums.slice(1));
    }

    helper(arr);

    return sum;
}

console.log(findSum([5,2,[7,-1],3]));