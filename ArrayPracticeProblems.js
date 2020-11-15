const prompt = require('prompt-sync')({ sigint: true });

// 1. Write a program in the following steps:
// 1.a. Generate 10 random 3-digit numbers.
// 1.b. Store these random numbers into an array.  
// 1.c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
let numArray = new Array();
console.log("\nTo generate 10 random numbers, store them in an array and find the 2nd smallest and 2nd largest numbers among them:");
for (let i = 0; i < 10; i++) {
    numArray.push(Math.floor(Math.random() * 1000));
}
let max = Math.max(...numArray), max2 = -Infinity;
for (let num1 of numArray) if (num1 > max2 && num1 < max) max2 = num1;
let min = Math.min(...numArray), min2 = +Infinity;
for (let num2 of numArray) if (num2 < min2 && num2 > min) min2 = num2;
console.log("numArray: " + numArray);
console.log("2nd largest number(without sort): " + max2);
console.log("2nd smallest number(without sort): " + min2);

// 2. Extend the above program to sort the array and then find the 2nd largest  and the 2nd smallest element.
numArray.sort(function numSort(a, b) { return (a - b); });
console.log("Sorted-numArray: " + numArray);
console.log("2nd largest number(with sort): " + numArray[numArray.length - 2]);
console.log("2nd smallest number(with sort): " + numArray[1]);

// 3. Extend the prime factorization program to store all the prime factors of a number (n) into an array and finally display the output.
console.log("\nTo find the factors of a number(n) using prime factorization and store into an array:");
let n = Number(prompt("Enter a positive integer (i.e. 'n' value): "));

function getFactorsUsingPrimeFactorization(n) {
    let factors = new Array();
    if (n >= 1 && Number.isInteger(n)) {
        for (let i = 1; i * i <= n; i++)
            if (n % i == 0) {
                factors.push(i);
                if (n / i != i)    // prime-factorization
                    factors.push(n / i);
            }
    } else console.log("Invalid user input.");
    factors.sort(function numSort(a, b) { return (a - b); });
    return factors;
}

let factors = getFactorsUsingPrimeFactorization(n);
console.log("Factors of " + n + " are: " + factors.toString());

// 4. Write a program to show sum of three integers adds to zero.
let intArray = new Array(1, 2, 3, -1, -2, -3, 0);
console.log("\nTo show all triplets with sum zero in an array:\nSum-zero triplets in this array are:");

function findSumZeroTriplets(arr) {
    arr.sort(function numSort(a, b) { return (a - b); });
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i], start = i + 1, end = arr.length - 1;
        while (start < end) {
            let sum = parseInt(arr[start]) + parseInt(arr[end]) + parseInt(x);
            if (sum == 0) {
                console.log(x + "  " + arr[start] + "  " + arr[end]);
                start++;
                end--;
            }
            else if (sum < 0) start++;
            else end--;
        }
    }
}

findSumZeroTriplets(intArray);

// 5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array.
console.log("\nSelect a range within 0-100 to get all the numbers with repeated digits in that range:");
let low = Number(prompt("Enter lower limit: "));
let high = Number(prompt("Enter higher limit: "));
let repeatArray = new Array();
if (low <= high && low >= 0 && high <= 100) {
    for (let i = low; i <= high; i++) {
        if (parseInt(i / 10) == i % 10 && i != 0)
            repeatArray.push(i);
    }
    console.log("Numbers with repeated digits in given range are: " + repeatArray.toString());
} else console.log("Invalid number-range entered.");