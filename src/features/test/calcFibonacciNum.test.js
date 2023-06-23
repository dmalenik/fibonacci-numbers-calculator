/* global describe, test, expect */
/* eslint no-undef: "error" */
import calcFibonacciNum from '../services/fibonacciNumService'

/*
 ** Precision limitations on integer values
 **
 ** Integers from −2^53 to 2^53 (−9,007,199,254,740,992 to 9,007,199,254,740,992) can be exactly represented
 ** Integers between 2^53 and 2^54 = 18,014,398,509,481,984 round to a multiple of 2 (even number)
 ** Integers between 2^54 and 2^55 = 36,028,797,018,963,968 round to a multiple of 4
 **
 ** See Also: https://en.wikipedia.org/wiki/Double-precision_floating-point_format#JavaScript
 **
 ** Number Encoding
 **
 ** The largest value a number can hold is 2^1024 - 1 (with the exponent being 1023 and the mantissa being 0.1111… in base 2),
 ** which is obtainable via Number.MAX_VALUE.
 ** Values higher than that are replaced with the special number constant Infinity.
 **
 ** See Also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 **
 ** Find a way to ensure the precision of results between the range of the Fibonacci number which is greater then the Maximum Safe Integer value
 ** and the Fibonacci number which is less then the Maximum allowed number in JavaScript
 **
 ** Solution
 **
 ** The functionality was applied to parameters of Binet formula,
 ** then outputs of these parameters were compared to the outputs of formula's parameters before the application of BigNumber functionality
 ** The outputs are the same
 ** Usage of bignumber.js library did not provide expected enhancements
 **
 ** See Also: https://github.com/MikeMcl/bignumber.js
 */

const maxPreciseInt = Number.MAX_SAFE_INTEGER

describe('test the closest values to maxSafeInt', () => {
    test('79th Fibonacci number is greater than maxSafeInt', () => {
        expect(calcFibonacciNum(79)).toBeGreaterThanOrEqual(maxPreciseInt)
    })
    test('78th Fibonacci number is less than maxSafeInt', () => {
        expect(calcFibonacciNum(78)).toBeLessThanOrEqual(maxPreciseInt)
    })
})

const maxVal = Number.MAX_VALUE

describe('test the closest values to maxVal', () => {
    test('1475th Fibonacci number is greater than maxVal', () => {
        // After the queueNumber > 1474 the output is Infinity
        // The Fibonacci number > the Maximum allowed number in JavaScript
        expect(calcFibonacciNum(1475)).toBeGreaterThanOrEqual(maxVal)
    })
    test('1474th Fibonacci number is less than maxVal', () => {
        expect(calcFibonacciNum(1474)).toBeLessThanOrEqual(maxVal)
    })
})

describe('test calcFibonacciNum function', () => {
    test('5th Fibonacci number is equal to 5', () => {
        expect(calcFibonacciNum(5)).toBe(5)
    })
    test('78th Fibonacci number is equal to 8944394323791488', () => {
        expect(calcFibonacciNum(78)).toBe(8944394323791488)
    })
    test('1474th Fibonacci number is equal to 4.992254605478015e+307', () => {
        expect(calcFibonacciNum(1474)).toBe(4.992254605478015e307)
    })
})
