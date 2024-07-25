//Recursive Functions: A function which calls itself again and again

// function factorial(n) {
//     if(n <= 1) return 1;
//     return n * factorial(n-1);
// }

// console.log(factorial(7));

// Armstrong Number : 153

// 1^3 + 5^3 + 3^3
// 1 + 125 + 27 = 153

{
    //block scope
}

function armstrong(num) {
    if(num==0) return 0;

    const digit = num % 10;
    return Math.pow(digit, 3) + armstrong(parseInt(num/10));
}

function isArmstrong(num) {
    return armstrong(num) === num;
}

console.log(isArmstrong(153));