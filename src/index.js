exports.min = function min (array) {
  let min = Number.MAX_SAFE_INTEGER;
  if (array !== undefined && array.length > 0) {
    array.forEach(element => {
      if (element < min) {
        min = element;
      }
    });   
    return min; 
  } 
  return 0;
}

exports.max = function max (array) {
  let max = Number.MIN_SAFE_INTEGER;
  if (array !== undefined && array.length > 0) {
    array.forEach(element => {
      if (element > max) {
        max = element;
      }
    });   
    return max; 
  } 
  return 0;
}

exports.avg = function avg (array) {
  let sum = 0;
  if (array !== undefined && array.length > 0) {
    array.forEach(element => {
      sum += element;
    });   
    return +((sum/array.length).toFixed(3)); 
  } 
  return 0;
}