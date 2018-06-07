/*
  Follow the instructions in the comments
  and pass the tests!
  Some tests pass already. Keep them that way!
  When I say "write a function" below, note
  that they are already started for you, and
  you need to complete them by:
  * adding parameters
  * writing the logic and return statements
*/

// make the following function return true
// (what is the value of first?)
function makeItTrue() {
  const [first] = [] // leave this line as is
  return first === '' // change this empty string to the right value
}

// Write a function that takes an array and
// returns true if the array is empty
function isEmpty() {
  return ''
}

// Write a function that takes an array
// and returns the length of the array
// this one has been started for you
// Requirements... the function must:
// * use the supplied parameters, first and rest
// * use recursion (the function calls itself)
function length([first, ...rest]) {
  return rest
}

// Write a function that takes any single value
// and returns true for truthy values or
// false for falsey values (review p. 78)
function truthify() {
  return ''
}

// Write a function that takes an array and
// uses the truthify function to return
// an array of boolean values
// Requirements... the function must:
// * use the supplied parameters, first and rest
// * use recursion (the function calls itself)
// * use the truthify function
function truthifyAll([first, ...rest]) {
  return rest
}

module.exports = {
  makeItTrue,
  isEmpty,
  length,
  truthify,
  truthifyAll,
}
