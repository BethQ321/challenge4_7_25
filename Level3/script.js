const arr1 = [
    ['-', '#', 'F'],
    ['#', '-', '-'],
    ['-', '-', '-']
];

const arr1Copy = [
    ['-', '#', 'F'],
    ['#', '-', '-'],
    ['-', '-', '-']
];;

// should return
// ['-', '#', '-'],
// ['#', '-', '-'],
// ['-', '-', 'F']

const arr2 = [
    ['F', 'F', '-'],
    ['-', '-', '-'],
    ['#', '-', '-']
];

const arr2Copy = [
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

const arr3Copy = [
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

const arr4Copy = [
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

const arr5Copy = [
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

const arr6Copy = [
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
    while(checkForRoom(arr)) {
        arr = dropOneLevel(arr);
    };
    return arr;
};

function checkForRoom(arr) {
    // check the lowest F in each column to see if there are open cells below all of them
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === 'F') {
                if((!arr[i + 1]) || (arr[i + 1][j] === '#')) {
                    return false;
                }
            }
        }
    }
    return true;
};

function dropOneLevel(arr) {
    // move each F down to the same position in the next row
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i - 1][j] === 'F') {
                arr[i][j] = 'F';
                arr[i - 1][j] = '-';
            }
        }
    }
    return arr;
};

// running test cases
console.log("arr1 input:", arr1);
console.log("results in:", dropTheF(arr1Copy));
console.log("arr2 input:", arr2);
console.log("results in:", dropTheF(arr2Copy));
console.log("arr3 input:", arr3);
console.log("results in:", dropTheF(arr3Copy));
console.log("arr4 input:", arr4);
console.log("results in:", dropTheF(arr4Copy));
console.log("arr5 input:", arr5);
console.log("results in:", dropTheF(arr5Copy));
console.log("arr6 input:", arr6);
console.log("results in:", dropTheF(arr6Copy));