/* Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern 
or return "Geometric" if it follows a geometric pattern. 
If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */

function ArithGeo(arr) {
  //let value1 = arr[1] - arr[0];
  //let value2 = arr[2] - arr[1];
  //if (value1 == value2){
  //return "Arithmetic"};

  let addCompare = 0;
  let addCount = 0;
  let compareValue = 0;
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    let value1 = arr[i + 1] - arr[i];
    if (value1 != addCompare) {
      addCompare = value1;
    } else {
      addCount++;
    }
    if (addCount == arr.length - 2) {
      return "Arithmetic";
    }

    let dividedNum = arr[i + 1] / arr[i];
    if (compareValue != dividedNum) {
      compareValue = dividedNum;
    } else {
      count++;
    }
    if (count == arr.length - 2) {
      return "Geometric";
    }
  }
  return -1; // code goes here
}
// keep this function call here
console.log(ArithGeo([2, 6, 18, 54]));
