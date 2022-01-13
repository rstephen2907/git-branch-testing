// function to subtract 2 numbers
const sub1 = (a, b) => a - b;

const subn = (...x) => {
    const sum = x.reduce((prev, curr) => prev + curr);
    return sum;
} 

console.log(subn(1, 2, 3, 4));

const sub = (a, b, c) => a - b - c;

module.exports = sub;
