const add = (first, second) => first + second;
const getFullName = (fN, lN) => fN + ' ' + lN;
const multiply = (a, b) => a * b;
const result = multiply(2, 5);
// console.log(result);

// for no parameter
const valueOfPie = () => 3.1416;

// one parameter
const doubleIt = (num) => num * 2;
// or
const fiveTimes = num => num * 5;

// multiline arrow function
// if you want to return something , use the return statment
const doMath = (x, y, z) => {
    const firestSum = x + y;
    const secondSum = y + z;
    const multiply = firestSum * secondSum;
    const result = multiply / 2
    return result;
}
const result2 = doMath(10, 15, 25);
console.log(result2);