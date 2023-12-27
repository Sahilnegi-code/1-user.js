const obj = require('./obj');
const problem2 = require('../problem2');
const  [result] = problem2(obj);

console.log(`Last car is a ${result.car_make} ${result.car_model}`);