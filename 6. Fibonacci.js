// 0,1,1,2,3,5,8,13,21,34....

function fibonacci(n) {

    if(n === 1 || n === 2) return 1;

    return fibonacci(n-2) + fibonacci(n-1);

}

console.log(fibonacci(4)); // 3