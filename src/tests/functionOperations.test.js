/* eslint-disable no-undef */
import { FunctionOperations } from '../scripts/functionOperations';

const functionOperations = new FunctionOperations();

test('sqr should', () => {
  expect(functionOperations.sqr('2')).toBe(4);
});

test('sqrt should ', () => {
  expect(functionOperations.sqrt('625')).toBe(25);
});

test('cbrt should', () => {
  expect(functionOperations.cbrt('8')).toBe(2);
});

test('cbr should', () => {
  expect(functionOperations.cbr('3')).toBe(27);
});

test('plus - minus should', () => {
  expect(functionOperations.plusMinus('2')).toBe(-2);
});

test('ten in power should', () => {
  expect(functionOperations.tenInPower('2')).toBe(100);
});

test('factorial should', () => {
  expect(functionOperations.factorial('6')).toBe(720);
});