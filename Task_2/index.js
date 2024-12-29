const lodash = require('lodash');

const nums=[1, 2, 7, 8, 10, 15,16, 34, -1];
const max =lodash.max(nums);
const min =lodash.min(nums);

console.log('The maximum number from the array is:', max);
console.log(`The minimum number from the array is: ${min}`);
