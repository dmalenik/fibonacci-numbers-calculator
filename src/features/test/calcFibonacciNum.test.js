/* global describe, test, expect */
/* eslint no-undef: "error" */
import calcFibonacciNum from '../services/fibonacciNumService'

/*
 ** The 53-bit significand precision gives from 15 to 17 significant decimal digits precision (2−53 ≈ 1.11 × 10−16)
 **
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
 ** standard number till queueNumber is 1474, then - Infinity
 */

describe('test calcFibonacciNum function', () => {
    test('5th Fibonacci number is 5', () => {
        expect(calcFibonacciNum(5)).toBe(5)
    })
    test('10th Fibonacci number is 55', () => {
        expect(calcFibonacciNum(10)).toBe(55)
    })
    test('60th Fibonacci number is 1548008755920', () => {
        expect(calcFibonacciNum(60)).toBe(1548008755920)
    })
    test('100th Fibonacci number is 3.542248481792631e20', () => {
        expect(calcFibonacciNum(100)).toBe(3.542248481792631e20)
    })
    test('200th Fibonacci number is 2.80571172992512e41', () => {
        expect(calcFibonacciNum(200)).toBe(2.80571172992512e41)
    })
    test('1000th Fibonacci number is 4.3466557686938915e208', () => {
        expect(calcFibonacciNum(1000)).toBe(4.3466557686938915e208)
    })
    test('1e5th Fibonacci number is 4.3466557686938915e208', () => {
        expect(calcFibonacciNum(1e5)).toBe(Infinity)
    })
})
