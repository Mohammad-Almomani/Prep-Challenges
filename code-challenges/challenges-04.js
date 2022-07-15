"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Optional:
//
// Write a function that takes an array and returns an array contains the
// running sum of the original array
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Note that Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
const runningSumOfArray = (arr) => {
  let runningSumArray;
  runningSumArray=[];
  let sum =0, i=0;
  
  // can solve this with map or with loops, i solved it with both 
  return arr.map((sum) => i+=sum, sum=i);
  //   while (i<arr.length){
  //     runningSumArray.push(sum+=arr[i]);
  //     i++;}
  // return runningSumArray;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two parameters (array and number) and remove all
// occurrences of the number in the array then return the array itself.
// Since it is impossible to change the length of the array in some languages,
// you must instead have the result be placed in the first part of the array
// to remove item from an array, replace it with underscore (_).
// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: nums = [2,2,_,_]
// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: nums = [0,1,3,0,4,_,_,_]
const removeElementFromArray = (arr, value) => {
  let resultArray=[], j=0;
  for (let i=0;i<arr.length;i++){
      if (arr[i] == value){
          j+=1;
          resultArray[arr.length-j] = ("_");
      }
      else resultArray[i-j] = arr[i];
  }
return resultArray;
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Given an array of values use filter to extract odd values.
//
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]
// Output:
// [89, 41, 31, 111, 31]
//

const oddFiltration = (arr) => {
  return arr.filter(oddNums => Math.abs(oddNums)%2==1)

  // solution without using filter: 
  // let oddNums =[];
// for (let i=0; i<arr.length;i++){
//     Math.abs(arr[i])%2==1?oddNums.push(arr[i]):false
//     }
// return oddNums
};
// -------------------------------------------------------------------------------------------------------

module.exports = { runningSumOfArray, removeElementFromArray, oddFiltration };
