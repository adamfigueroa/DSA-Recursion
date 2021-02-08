// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function stringReverser(str) {
  if (!str) {
    return '';
  }
  return stringReverser(str.slice(1)) + str[0];
}
console.log(stringReverser('hello'));
