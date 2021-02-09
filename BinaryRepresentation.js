// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

function toBinary(x) {
  if (x === 0 || x === 1) {
    return x.toString();
  }

  const endBinaryValue = (x % 2).toString();
  const remainingBinaryValues = Math.floor(x / 2);

  const remainingValuesToBinary = toBinary(remainingBinaryValues);
  return remainingValuesToBinary + endBinaryValue;
}
console.log(toBinary(25))