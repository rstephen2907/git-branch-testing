// addition function to add 2 numbers
const add = (a, b) => a + b;

// addition function to add n numbers
const addn = (...x) => {
    let sum = 0;
    x.forEach((ele) => {
        sum += ele;
    });
    return sum;
}
// addtion function to add 3 numbers
const add3 = (a, b, c) => a + b + c;

module.exports = add;