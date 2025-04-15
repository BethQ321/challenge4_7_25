// sample arrrays
const arr1 = [30, 70, 21, 60, 88];
const arr2 = [500, 750, 200, 610, 950, 300, 600, 912];
const arr3 = [358, 221, 612, 512, 346, 742, 832, 27, 742, 84, 735, 138, 247, 248, 952, 27];
const arr4 = [2000];

// sample target numbers
const target1 = 0;
const target2 = 178;
const target3 = 1450;  
const target4 = 3000;

// function should take in an array of numbers representing people entering a park per day
// function also receives a target number for the array representing an admission goal
// function should return the index of the array for when the goal was met
// function should return -1 if goal was not met
function targetNumber(arr, target) {
    // **code your function here**
    return "test"
};

// running test cases
console.log("arr1, target1 should return 0, returns:", targetNumber(arr1, target1));
console.log("arr1, target2 should return 3, returns:", targetNumber(arr1, target2));
console.log("arr2, target3 should return 2, returns:", targetNumber(arr2, target3));
console.log("arr4, target4 should return -1, returns:", targetNumber(arr4, target4));
console.log("arr3, target4 should return 6, returns:", targetNumber(arr3, target4));
console.log("arr1, target3 should return -1, returns:", targetNumber(arr1, target3));