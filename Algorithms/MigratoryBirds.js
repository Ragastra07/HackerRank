'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    const ars = arr.sort(function (a, b) { return a - b });
    // [1 3 4 4 4 5]
    let R = {}
    // {
    //     '1' : 1,
    //     '3' : 1,
    //     '4' : 3,
    //     '5' : 1 
    // }
    let max = [];
    let r = 0;
    ars.forEach((value) => {
        R[value] = (R[value] || 0) + 1;
    });
    for (let x in R) {
        if (R[x] > max) {
            max = R[x];
            r = x
        }
    }
    return r;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

