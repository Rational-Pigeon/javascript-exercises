const removeFromArray = function(array, ...entries) {
  let result = array;
  for (const entry of entries) {
    result = result.filter((a) => { return (!(a === entry)); })
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
