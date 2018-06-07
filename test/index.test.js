const fs = require('fs')
const path = require('path')
const {
  makeItTrue,
  isEmpty,
  length,
  truthify,
  truthifyAll,
} = require('../index')

/* eslint-disable */

const code = fs.readFileSync(path.join('index.js'), { encoding: 'utf8' })

test('what should be the same in makeItTrue is the same', () => {
  const match = code.match(/function makeItTrue\((.*?)\) {([\s\S]+?)}/)
  const args = match[1]
  const frst = match[2].match(/const \[first\] = \[\]/)
  const rtrn = match[2].match(/return first ===/)
  expect(args).toBeUndefined()
  expect(frst).toBeTruthy()
  expect(rtrn).toBeTruthy()
})

test('makeItTrue returns true', () => {
  expect(makeItTrue()).toBe(true)
})

test('isEmpty returns correct boolean values', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty([0])).toBe(false)
  expect(isEmpty([[]])).toBe(false)
  expect(isEmpty([makeItTrue])).toBe(false)
})

test('length returns the length of an array', () => {
  expect(length([1, 2, 3])).toBe(3)
  expect(length(['four', 'five', 'six'])).toBe(3)
  expect(length([])).toBe(0)
})

test('length uses the provided parameters', () => {
  const match = code.match(/function length\(\[first, ...rest\]\)/)
  expect(match).toBeDefined()
})

test('length uses recursion', () => {
  const match = code.match(/function length\(\[first, ...rest\]\) {([\s\S]+?)}/)
  const call = match[1].match(/length\(.*?\)/)
  expect(call).toBeTruthy()
})

test('truthify returns correct boolean values', () => {
  expect(truthify([])).toBe(true)
  expect(truthify('hello')).toBe(true)
  expect(truthify(12)).toBe(true)
  expect(truthify(0)).toBe(false)
  expect(truthify('')).toBe(false)
  expect(truthify(false)).toBe(false)
  expect(truthify(null)).toBe(false)
  expect(truthify(undefined)).toBe(false)
  expect(truthify(NaN)).toBe(false)
})

test('truthifyAll returns correct Array of boolean values', () => {
  const expected = [false, true, true, false, true, false]
  const actual = truthifyAll([null, true, 25, false, 'foo', 0])
  expect(expected).toMatchObject(expected)
})

test('truthifyAll uses the provided parameters', () => {
  const match = code.match(/function truthifyAll\(\[first, ...rest\]\)/)
  expect(match).toBeDefined()
})

test('truthifyAll uses recursion', () => {
  const match = code.match(
    /function truthifyAll\(\[first, ...rest\]\) {([\s\S]+?)}/
  )
  const call = match[1].match(/truthifyAll\(.*?\)/)
  expect(call).toBeTruthy()
})

test('truthifyAll calls truthify', () => {
  const match = code.match(
    /function truthifyAll\(\[first, ...rest\]\) {([\s\S]+?)}/
  )
  const call = match[1].match(/truthify\(.*?\)/)
  expect(call).toBeTruthy()
})
