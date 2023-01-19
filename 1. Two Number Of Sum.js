// [3,5,-4,8,11,1,-1,6], 10
// FIND A PAIR OF SUM PRESENT IN THIS ARRAY IF NOT RETURN FALSE IF YES RETURN TRUE

// FIRST SOLUTION:
// 2 LOOPS ITERATE OVER AND DO SUM WHICH WILL GIVE TIME COMPLEXITY OF O(n^2)

// SECOND SOLUTION
// USING TARGET - ARRAY[INDEX] = PRESENT IN HASH TABLE

function findPairOfSum(arr, target) {

    // CREATE A OBJECT
    let pair = {};

    // TARGET - ARRAY[INDEX] IS PRESENT IN PAIR ? RETURN TRUE : ADD THAT ARRAY[INDEX] TO PAIR
    for (let i = 0; i < arr.length; i++) {
        let num = target - arr[i];
        if(pair[num]) {
            return true;
        } else {
            pair[arr[i]] = i;
        }
    }
    return false;
}

console.log(findPairOfSum([3,5,-4,8,11,1,-1,6], 10));
