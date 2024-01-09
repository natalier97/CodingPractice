//Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries.
//For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.

function DistinctList(arr) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    obj[key] = obj[key] - 1;
  }
  let valuesArr = Object.values(obj);
  for (let p = 0; p < valuesArr.length; p++) {
    count = count + valuesArr[p];
  }
  return count;
  // code goes here
  return arr;
}

// keep this function call here
console.log(DistinctList([5,5,3,3,1,2,5,6,7]));
