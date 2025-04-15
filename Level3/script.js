const arr1 = [
    ['-', '#', 'F'],
    ['#', '-', '-'],
    ['-', '-', '-']
];

// should return
// ['-', '#', '-'],
// ['#', '-', '-'],
// ['-', '-', 'F']

const arr2 = [
    ['F', 'F', '-'],
    ['-', '-', '-'],
    ['#', '-', '-']
];

// should return
// ['-', '-', '-'],
// ['F', 'F', '-'],
// ['#', '-', '-']

const arr3 = [
    ['-', 'F', 'F', '-'],
    ['-', 'F', '-', '-'],
    ['#', '-', '-', '-'],
    ['-', '-', '#', '-']
];

// should return
// ['-', '-', '-', '-'],
// ['-', '-', '-', '-'],
// ['#', 'F', 'F', '-'],
// ['-', 'F', '#', '-']

const arr4 = [
    ['F', 'F', 'F', '-'],
    ['-', 'F', '-', '#'],
    ['-', '-', '-', '-'],
    ['-', '#', '-', '-']
];

// should return
// ['-', '-', '-', '-'],
// ['F', 'F', 'F', '#'],
// ['-', 'F', '-', '-'],
// ['-', '#', '-', '-']

const arr5 = [
    ['-', '-', 'F'],
    ['-', 'F', 'F'],
    ['-', 'F', '#'],
    ['#', '-', '-']
];

// should return
// ['-', '-', 'F'],
// ['-', 'F', 'F'],
// ['-', 'F', '#'],
// ['#', '-', '-']

const arr6 = [
    ['-', '-', 'F', '-'],
    ['#', '-', 'F', '-'],
    ['F', 'F', 'F', '-'],
    ['-', '-', 'F', 'F'],
    ['-', '-', 'F', '-'],
    ['#', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '#']
];

// should return
// ['-', '-', '-', '-'],
// ['#', '-', '-', '-'],
// ['-', '-', 'F', '-'],
// ['-', '-', 'F', '-'],
// ['F', 'F', 'F', '-'],
// ['#', '-', 'F', 'F'],
// ['-', '-', 'F', '-'],
// ['-', '-', '-', '#']

// the function will accept a 2 dimensional array made up of individual characters as follows:
//      'F' represents a cell filled with a connected figure
//      '-' represents an empty cell
//      '#' represents a cell that contains an immovable obstacle
// the connected figure (cells labeled 'F') will be dropped vertically until it reaches the bottom of the array
//      or runs into an obstacle
// the connected figure must be connected either horizontally or vertically throughout the array
// the function should return a 2 dimensional array with the figure dropped as far as possible
function dropTheF(arr) {
    // ** code your function here **
    return "test";
};

// running test cases
console.log("arr1 input:", arr1);
console.log("results in:", dropTheF(arr1));
console.log("arr2 input:", arr2);
console.log("results in:", dropTheF(arr2));
console.log("arr3 input:", arr3);
console.log("results in:", dropTheF(arr3));
console.log("arr4 input:", arr4);
console.log("results in:", dropTheF(arr4));
console.log("arr5 input:", arr5);
console.log("results in:", dropTheF(arr5));
console.log("arr6 input:", arr6);
console.log("results in:", dropTheF(arr6));