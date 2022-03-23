// addition function to add 2 numbers
const add = (a, b) => a + b;

// addtion function to add 3 numbers
const add3 = (a, b, c) => a + b + c;

const add4 = (a, b, c, d) => a + b + c;

const add5 = (a, b, c, d, e) => a + b + c + d + e;

// addition function to add n numbers
const addn = (...x) => {
    let sum = 0;
    x.forEach((ele) => {
        sum += ele;
    });
    return sum;
}

module.exports = add;