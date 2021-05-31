// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// describe("shuffle", () => {
//     test("removes the first item from the array and shuffles the remaining content", () => {
//         expect(shuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//         expect(shuffle(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
//     })
// })
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

// create a function called shuffle
// const shuffle = (array) => {
// // initiate a variable set to nothing
//     let m;
//     let ray;
//     let newArr = []
// // loop over array
//     for(let i = array.length -1; i>0; i--){
// // use math.floor and math. random to randomize array
//         m = Math.floor(Math.random() * (i +1))
//         newArr.shift
//         ray = array[i]
//         array[i] = array[m]
//         array[m] = ray
//         newArr.push(ray)
//     }
// // use .shift() to remove first word in array 
//     return newArr
// }
// console.log(shuffle(colors1))
// // console.log(colors1)
// console.log(shuffle(colors2))
// // console.log(colors2)



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
// describe("minMax", () =>{
//     test("returns an array of the minimum and maximum numbers in that order", () => {
//         expect(minMax(nums1)).toEqual([-8,90])
//         expect(minMax(num2)).toEqual(-59, 109)
//     })
// })

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// b) Create the function that makes the test pass.

//create a function called minMax
// const minMax = (arr) => {
//initiate a variable set to 0
// let max = 0;
//loop over array
// for(let i= 0; i<arr.length; i++){
//conditional if number is greater than max then max equals number
//     if (arr[i]>= max){
//         max = arr[i];
//     }
// }
//return max
//     return max
// }
// console.log(minMax(nums1))

//tried a different approach
// const minMax = (arr) => {
//     let min = Math.min(...nums1)
//     let max = Math.max(...nums1)
//     let newArr = []
// }
// console.log(minMax(nums1))

//same as first but for min 
// const minMax = (arr) => {
//     let min = Infinity
//     let max = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]< min){
//             min = arr[i]
//         }
//     }
//     return min   
// }
// console.log(minMax(nums1))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// describe("noDuplicate", () => {
//     test("returns one array with no duplicate values", () => {
//         expect(noDuplicate(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//     })
// })

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//create a function called noDuplicate
const noDuplicate = (array1, array2) => {
//initiate a vaiable that contains both arrays and a variable set to empty array
   let m = [array1 += array2]
   let newArr = []
//loop over the new combined array
   for(let i=0; i<m.length; i++){
//conditional that looks at each number in array if index returns -1 then push into empty array
       if(newArr.indexOf(m[i] === -1)){
           newArr.push(m[i])
       }
   }
//return newArr
   return newArr
}
console.log(noDuplicate(testArray1, testArray2))



// b) Create the function that makes the test pass.
