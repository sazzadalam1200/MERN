//#1.print 1 to 10
// for(let i=1;i<11;i++){
//     console.log(i)
// }

//#2. Coding challenge #2: Print the odd numbers less than 100
// for(let i= 1;i<100;i=i+2){
//     console.log(i)
// }

//#3: Print the multiplication table with 7
// for(i=1;i<11;i++){
//     console.log("7 * "+i+" = "+ 7*i)
// }

//#4: Print all the multiplication tables with numbers from 1 to 10
// function multiplicationTable(n){
//     for(let i = 1; i<11;i++){
//         var table = n + " * "+ i + " = "+ n*i
//         console.log(table)
//     }
// }
// for(i=1;i<11;i++){
//     multiplicationTable(i)
//     console.log("")
// }


//#5: Calculate the sum of numbers from 1 to 10
// let sum = 0
// function add(n){
//     for(let i=1;i<=n;i++){
//         sum = sum+i
//     }
//     console.log(sum)
// }
// add(10)

//#6: Calculate 10!
// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     console.log(result)
//   }
// factorial(10)

//#7: Calculate the sum of odd numbers greater than 10 and less than 30
// let sum =0   
// for(let i = 11; i<30; i=i+2){
//     console.log(i)
//     sum = sum+i
//  }
//  console.log(sum)

//#8: Create a function that will convert from Celsius to Fahrenheit
// var celcius = 32
// function celToFahr(n){
//     let fahrenheit = n * 1.8 + 32
//     console.log(fahrenheit)
// }
// celToFahr(celcius)

//#9: Create a function that will convert from Fahrenheit to Celsius
// function fehrTocel(num){
//     let cel = (num - 32)*.5556
//     console.log(cel)
// }
// fehrTocel(89.6)

//#10: Calculate the sum of numbers in an array of numbers
// var arr1 = [1,2,3,4,5,6,7,8,9]
// var sum = 0
// for(let i =0; i<arr1.length;i++){
//     sum = sum +arr1[i]
//     console.log(sum)
// }

//#11: Calculate the average of the numbers in an array of number
// var arr1 = [1,2,3,4,5,6,7,8,9]
// var sum = 0
// for(let i =0; i<arr1.length;i++){
//     sum = sum +arr1[i]
// }
// var average = sum/arr1.length
// console.log(average)

//#12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// let arr1 = [-1,2,-45,4,5,-6,7,-8,9]
// function posNum(ar){
//     let ar2 = []
//     for(let i =0; i<ar.length;i++){
//         if(ar[i]>0){
//             ar2.push(ar[i])
//         }
//     }
//     return ar2
// }
// let arr2 = posNum(arr1)
// console.log(arr2)

//#13: Find the maximum number in an array of numbers
// var arr1 = [1,2,3,4,5,46,7,8,9]
// var max = 0
// function findMaxNum(ar){
//     for(let i = 0; i<ar.length;i++){
//         if(ar[i]>=max){
//             max = ar[i]
//         }
//     }
//     console.log(max)
// }
// findMaxNum(arr1)

//#14: Print the first 10 Fibonacci numbers without recursion
// var f0 = 0 
// var f1 = 1
// console.log(f0)
// console.log(f1)

// for(let i = 2; i < 10; i++){
//     var fi = f1 +f0
//     console.log(fi)
//     f0 = f1
//     f1 = fi
// }

//#15: Create a function that will find the nth Fibonacci number using recursion
    // function fibonacci(n) {
    //     if (n <= 1) {
    //       return n;
    //     } else {
    //       return fibonacci(n-1) + fibonacci(n-2);
    //     }
    //   }
      
    //   for (let i = 0; i < 10; i++) {
    //     console.log(fibonacci(i));
    //   }
    //   fibonacci(10)

//#16: Create a function that will return a Boolean specifying if a number is prime
// function isPrime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i = 2; i<= Math.sqrt(n); i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(13))
// console.log(isPrime(26))
// console.log(isPrime(37))

//#17: Calculate the sum of digits of a positive integer number
// function sumOfDigits(num){
//     let sum = 0
//     while(num>0){
//         sum += num%10 //gets the last digit
//         num = Math.floor(num/10) //removes the last digit
//     }
//     console.log(sum)
// }
// sumOfDigits(192)

//#18: Print the first 100 prime numbers
// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i = 2; i<= Math.sqrt(n); i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// let count = 0 
// let n = 2
// while(count<100){
//     if(isPrime(n)){
//         console.log(n)
//         count++
//     }
//     n++
// }

//#19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"


//#20: Rotate an array to the left 1 position
// arr1 = [1,2,3,4,5,6,7]
// function rotateLeft(ar){
//     var first = ar.shift();
//     ar.push(first);
// }
// rotateLeft(arr1)
// console.log(arr1)

//#21: Rotate an array to the right 1 position
// let arr1 = [1,2,3,4,5,6,7]
// function rotateRight(ar){
//     var last = ar.pop(ar)
//     ar.unshift(last) 
// }
// rotateRight(arr1)
// console.log(arr1)

//#22: Reverse an array
// arr1 = [1,2,3,4,5,6,7]

// function reverseArr(ar){
//     let ar2 = []
//     for(let i=ar.length-1; i>=0;i--){
//         ar2.push(ar[i])
//     }
//     console.log(ar2)
// }
// reverseArr(arr1)

//#23: Reverse a string

// var string = "Javascript"
// function reverseString(s){
//     let s2 = ''
//     for(let i = s.length-1;i>=0;i--){
//         s2 += s[i]
//     }
//     return s2
// }
// console.log(reverseString(string))

//#24: Create a function that will merge two arrays and return the result as a new array
// var arr1 = [1,2,3]
// var arr2 = [4,5,6]

// function mergeArr(ar1,ar2){
//     let ar = ar1.concat(ar2)
//     return ar
// }
// console.log(mergeArr(arr1,arr2))

//#25: Create a function that will receive two arrays of numbers as arguments and return an array composed
// of all the numbers that are either in the first array or second array but not in both
// var arr1 = [1, 2, 3, 10, 5, 4, 14]
// var arr2 = [1, 4, 5, 6, 14]

// function merge(ar1,ar2){
//     var ar = []
//     for (let el of ar1){
//         if(!ar2.includes(el)){
//             ar.push(el)
//         }
//     }
//     for (let el of ar2) {
//         if (!ar1.includes(el)) {
//             ar.push(el);
//         }
//     }
//     return ar
// }
// console.log(merge(arr1,arr2))

//#26: Create a function that will receive two arrays and will return an array with elements that are in 
//the first array but not in the second
// var arr1 = [1, 2, 3, 10, 5, 4, 14]
// var arr2 = [1, 4, 5, 6, 14]

// function merge(ar1,ar2){
//     var ar = []
//     for (let el of ar1){
//         if(!ar2.includes(el)){
//             ar.push(el)
//         }
//     }
//     return ar
// }
// console.log(merge(arr1,arr2))


//#27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// let arr1 = [2,3,6,8,6,2,10,23,34]
// function disticntElements(ar){
//     let ar2 = []
//     for(let i = 0; i<ar.length; i++){
//         if(!isInArray(ar[i],ar2)){
//             ar2.push(ar[i])
//         }
//     }
//     console.log(ar2)
// }

// function isInArray(n,ar){
//     for(let i = 0; i<ar.length; i++){
//         if(ar[i]===n){
//             return true
//         }
//     }
//     return false
// }
// disticntElements(arr1)


//#28: Calculate the sum of first 100 prime numbers

//#29: Print the distance between the first 100 prime numbers

//#30: Create a function that will add two positive numbers of indefinite size. The numbers are received
// as strings and the result should be also provided as string.


