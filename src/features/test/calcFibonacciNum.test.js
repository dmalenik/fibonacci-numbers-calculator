/* global describe, test, expect */
/* eslint no-undef: "error" */
import { calcFibonacciNum } from '../services/fibonacciNumService'

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
