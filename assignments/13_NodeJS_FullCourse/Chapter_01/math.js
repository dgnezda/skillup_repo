export const add = (a, b) => a + b;
export const subrtact = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// Or (ES6):
// export { add, subrtact, multiply, divide };


// Commonjs:
// module.exports = { add, sub ...}
// Also CommonJS:
// exports.add = (a, b) => a + b;
// exports.subrtact = (a, b) => a - b;
// exports.multiply = (a, b) => a * b;
// exports.divide = (a, b) => a / b;