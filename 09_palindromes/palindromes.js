// removes punctuation and applies toLowerCase
function formatString(str) {
  let formattedString = str.toLowerCase().replace(/\s+/g, '');
  return formattedString.replace(/[^\w\s]|_/g, '');
}

const palindromes = function(str) {
  let formattedString = formatString(str);
  let reversedString = formattedString.split('').reverse().join('');
  return reversedString === formattedString;
};

// Do not edit below this line
module.exports = palindromes;

