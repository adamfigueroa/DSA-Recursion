// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(intB, intE) {
  let result = intB;

  for (i = 1; i < intE; i++) {
      result *= intB
  }
  console.log(result)
}
powerCalculator(10, 3)