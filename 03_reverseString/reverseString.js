const reverseString = function(str) {
  let stringLength = str.length;
  let reversedString = ""
  for (let i = stringLength - 1; i >= 0; i--) {
    reversedString = reversedString + str.charAt(i);
  }
  console.log(reversedString)
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
