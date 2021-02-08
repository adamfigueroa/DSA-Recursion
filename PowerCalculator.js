// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(intB, intE) {
  if (intE === 0) {
    return 1;
  }

  if (intE < 0) {
    return 'your Exponent should be greater than or equal to 0';
  } 
  
  else {
    return intB * powerCalculator(intB, intE - 1);
  }
}
console.log(powerCalculator(10, 3));
