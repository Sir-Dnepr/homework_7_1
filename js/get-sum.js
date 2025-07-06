"use strict";

const getSum = (function() {
    let sum = 0;

    return function(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            return 'Error: Value is not a number';
        }

        sum += value;

        return sum;
    };
})();

console.log(getSum(3.4));
console.log(getSum(5));
console.log(getSum('5'));
console.log(getSum('sdfsdfsdf'));
console.log(getSum(NaN));
console.log(getSum(-3));
