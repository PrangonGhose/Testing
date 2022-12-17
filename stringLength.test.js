const stringLength = require('./stringLength.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');

describe('Tests for stringLength function', () => {
  test('String length test', () => {
    expect(stringLength('Nothing')).toBe(7);
  })

  test('', () => {
    expect(stringLength('Nothing is real in this world')).toBe("Greater than one. Insert a number between one and ten.");
  })
})

describe('Tests for reverseString', () => {
  test('Reverse string test', () => {
    expect(reverseString('Nothing')).toBe('gnihtoN');
  })
})

describe('Tests for calculator', () => {
  test('Test-1 for addition', () => {
    expect(calculator.add(5,6)).toBe(11);
  })

  test('Test-2 for addition', () => {
    expect(calculator.add(15,16)).toBe(31);
  })

  test('Test-3 for addition', () => {
    expect(calculator.add(25,26)).toBe(51);
  })

  test('Test-1 for subtraction', () => {
    expect(calculator.subtract(115,6)).toBe(109);
  })

  test('Test-2 for subtraction', () => {
    expect(calculator.subtract(5,6)).toBe(-1);
  })

  test('Test-3 for subtraction', () => {
    expect(calculator.subtract(25,6)).toBe(19);
  })

  test('Test-1 for multiplication', () => {
    expect(calculator.multiply(5,16)).toBe(80);
  })

  test('Test-2 for multiplication', () => {
    expect(calculator.multiply(5,6)).toBe(30);
  })

  test('Test-3 for multiplication', () => {
    expect(calculator.multiply(15,6)).toBe(90);
  })

  test('Test-1 for division', () => {
    expect(calculator.divide(30,6)).toBe(5);
  })

  test('Test-2 for division', () => {
    expect(calculator.divide(25,5)).toBe(5);
  })

  test('Test-3 for division', () => {
    expect(calculator.divide(35,5)).toBe(7);
  })
})

describe('Test for capitalize', () => {
  test('Test for capitalize function', () => {
    expect(capitalize('anything')).toBe('Anything');
  })
})