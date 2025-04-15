// sample arrays

const arr1 = [3, 5, 4, 6];                // should return [5, 6, 4, 3];
const arr2 = [2, 5, 6, 3, 7, 1, 10, 8];   // should return [6, 5, 7, 3, 2, 10, 8, 1];
const arr3 = [1000];                      // should return [1000];
const arr4 = [5, 4, 3, 2];                // should return [5, 4, 3, 2];
const arr5 = [12, 2, 5, 9, 3, 8, 13, 18, 6, 1, 4]     // should return [4, 9, 5, 12, 18, 13, 8, 6, 3, 2, 1]

// function should receive an array representing heights of exhibits in a museum
// all numbers in the array are unique and positive
// goal is to find the smallest highlight in the array and move it to a highlightsOrder array
// a highlight is defined as a work that is taller than those works to its right and its left
// Ex: [3, 5, 4, 6] 5 and 6 would be considered highlights because 5 is taller than 3 and 4, 6 is taller than 4 and __
// since we are looking for the smallest highlight, 5 would be moved over to the highlightsOrder array
// this continues until all heights in the original array have been processed
// the function returns the highlightsOrder array

function findHighlights(arr) {
    // ** code your function here **
    return "test";
};

// running test cases
console.log("arr1 should return [5, 6, 4, 3], returns:", findHighlights(arr1));
console.log("arr2 should return [6, 5, 7, 3, 2, 10, 8, 1], returns:", findHighlights(arr2));
console.log("arr3 should return [1000], returns:", findHighlights(arr3));
console.log("arr4 should return [5, 4, 3, 2], returns:", findHighlights(arr4));
console.log("arr5 should return [4, 9, 5, 12, 18, 13, 8, 6, 3, 2, 1], returns:", findHighlights(arr5));