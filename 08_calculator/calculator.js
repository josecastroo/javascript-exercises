const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } return sum;
};

const multiply = function(arr) {
  let product = arr[0];
  for (let i = 1; i < arr.length; i++) {
    product *= arr[i];
  } return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let fact = 1;
	for (let i = num; i > 0; i--) {
    fact *= i;
  } return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
