/*QUESTION 1
function StringChallenge(str) { 
let array = str.split("");
let xes = [];
let oes = [];
//iterating through array of string letters
for (i = 0; i < array.length; i++){
  if (array[i] === "x"){
    xes.push(array[i])
  } else {
    oes.push(array[i])
  }

} 
if ( xes.length === oes.length) {
  return 'true'
} else {
  return 'false'
}
  // code goes here  
  return str; 

}

// keep this function call here 
console.log(StringChallenge(readline())); */

/*QUESTION 2
function stringChallenge(string) {
return string.split("").filter(e => e === "x").length === string.split("").filter(e => e === "o").length
}
console.log(stringChallenge('xxoo'))

QUESTION 2
function StringChallenge(str) { 
// return the string true if the characters 'a' & 'b' are separated by exactly 3 spaces 
//ANYWHERE IN STRING 
  for (i = 0; i < str.length; i++){
if (str[i] === 'a' && str[i+4] === 'b'){
  return 'true'

} if (str[i] === 'b' && str[i+4] === 'a') {
  return 'true'
} 
  }
return 'false'
  return str; 

}

// keep this function call here 
console.log(StringChallenge(readline())); */

/*QUESTION 4
//if mode of arr = mean => return '1'
//if they dont equal => return '0'
//mode = number that shows up the most
//mean = average

function ArrayChallenge(arr) { 
//average code
let avg = 0;
let sum = 0;
let modesObject = {};
for (i = 0; i < arr.length; i++){
  sum = sum + arr[i];
  avg = sum / arr.length;
//mode code-counting
let currentNum = arr[i];
if (modesObject[currentNum] === undefined){
  modesObject[currentNum] = 1;
} else { 
  modesObject[currentNum]++;
}
//mode code- which key has the greatest value
}
let biggestValue = -1;
let biggestValueKey = -1;
for (let key in modesObject){
let value = modesObject[key];
if (value > biggestValue){
  biggestValue = value
  biggestValueKey = key
}
}
//if avg = mode
if (avg == biggestValueKey){
  return '1'
} else {
  return '0'
}
}

// keep this function call here 
console.log(ArrayChallenge(readline()));   */

/* QUESTION 3
function ArrayChallenge(arr) { 
  let increasing = arr[1] > arr[0];
  let decreasing = arr[1] < arr[0];
  for (i = 0; i < arr.length; i++){
    if (increasing && arr[i] < arr[i - 1]){
      return i - 1;
    } else if (decreasing && arr[i] > arr[i-1]){
      return i -1;
    } 
  } return '-1'
  // code goes here  
  return arr; 

}
// keep this function call here 
console.log(ArrayChallenge(readline())); */

/* QUESTION 6--------
//return the number of times you must multiply digits until you reach a single digit
function MathChallenge(num) { 
//split num into array
let newArr = num.toString().split("");
let count = 0;
while (newArr.length > 1){
  let newValue = 1;
  for (i = 0; i < newArr.length; i++){
 newValue = newValue * newArr[i];
} newArr = newValue.toString().split(""); 
count++;
}
// split into array, cont..
return count
  // code goes here  
  return num; 

}

// keep this function call here 
console.log(MathChallenge(readline()));   */

/*QUESTION 8
//4-25 characters
//must start w/ a letter
//only Letters, Numbers, and _ underscore
//cant end w/ underscore
function isCharaLetter(char){
  return (/[a-zA-Z]/).test(char)
};

let alphabetNums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', 
'5', '6', '7', '8', '9', '_'];

function SearchingChallenge(str) { 
//4-25 characters
let length = str.length;
let firstLetter = isCharaLetter(str[0]);
let lastChar = str[str.length - 1];
let anyChar = 0;
for (i = 0; i < str.length; i++){
 if (alphabetNums.indexOf(str[i].toLowerCase()) === -1 ){
anyChar = -1
 };
  }
if (length >= 4 && length <= 25 && firstLetter === true && lastChar != '_'
&& anyChar >= 0) {
  return 'true'
} else {return 'false'}

  // code goes here  
  return str; 

}

// keep this function call here 
console.log(SearchingChallenge(readline()));  */

/* QUESTION 5
//get range of first 2, then next 2
//do the numbers match number of times of 5th integer?
//[5, 11, 1, 5, 1]
function ArrayChallenge(arr) { 
let firstRange = [];
let secondRange = [];
let lastnum = arr[arr.length-1]
let count = 0;
for (i = arr[0]; i <= arr[1]; i++){
firstRange.push(i)
};
for (i = arr[2]; i <= arr[3]; i++){
  secondRange.push(i);
};

for (i = 0; i < firstRange.length; i++) {
  if (firstRange.indexOf((secondRange[i])) !== -1) {
  count++ }
  };

//count number of times the numbers match
if (count >= lastnum){
  return 'true'
} else {return 'false'}
  // code goes here  
  return arr; 

}

// keep this function call here 
console.log(ArrayChallenge(readline())); */

/* QUESTION 7!!!!!!!!!!!!!!!!
//enemy = 2; result = spaces away to closest enemy is # 1; there will
//only be one #1 
//if no 2's, return = 0

function ArrayChallenge(arr) { 
//loop thru array of numbers; stop when 2 is found; none? return 0
let twos= [];
let one = arr.indexOf(1);
let result = Infinity;
for (i = 0; i < arr.length; i++){
  if (arr[i] === 2) {
twos.push(i);
 } };
 if (twos.length === 0){
   return '0'
 };
 for (i = 0; i < twos.length; i++){
if (Math.abs(one - twos[i]) < result) {
result = Math.abs(one-twos[i]);
};
 };
 return result
  // code goes here  
  return arr; 

}

// keep this function call here 
console.log(ArrayChallenge(readline())); */

/* ------QUESTION 9!!!!!!
function ArrayChallenge(arr) { 
//new array containg all nums except largest num
let sortedArr = arr.sort((a,b) => a - b);
let bigNum = sortedArr.pop();
let combos = [];
let twoValues = 0;
let threeValues = 0;
let sum = 0;
// sortedArr[2] + combos[0][0] + combos[0][1]                                                                                                                                                                           
// sortedArr[3] + combos[0][0] + combos[0][1]

for (let i = 0; i < sortedArr.length; i ++){
  sum = sum + sortedArr[i];
  if (sum === bigNum){
    return 'true'
  };
  for (let j = i + 1; j < sortedArr.length; j++){
    combos.push([sortedArr[i], sortedArr[j]])
  }
};
for (let m = 0; m < combos.length; m++){
if (sortedArr[m] !== combos[m][0] && sortedArr[m] !== combos[m][1]){
  threeValues = sortedArr[m] + combos[m][0] + combos[m][1];
  twoValues = combos[m][0] + combos[m][1]
}; if (bigNum == twoValues || bigNum == threeValues){
    return 'true'
  } else {return 'false'}
};


// console.log(threeValues)

// console.log(combos.length)
  // code goes here  
  return arr; 

}

// keep this function call here 
console.log(ArrayChallenge(readline()));    */

/* QUESTION 11-----------------------
//0=not hungry, 5 = very hungry
//minimize the difference between arr[1-4]
//n = sandwiches (1-20)
//add up the differences between each person
//goal = minimize hunger differences = 0 differences
//[5,2,3,4,5] = 3
//4,2,3,4,4 = 2
//3,2,2,4,4 =2
//2,2,2,3,4=2
//1,2,2,3,3=1
//0,2,2,2,3=1
//+1 SANDWICH => NUM GOES DOWN vvv
//lower less Hunger == good & lowering difference
function ArrayChallenge(arr) { 
let sandwiches = arr.shift();
let index = 0;
let leastHunger;
let totalDif = 0;
for (i=0; i < arr.length-1; i++){
let dif = Math.abs(arr[i] - arr[i+1]);
totalDif = totalDif + dif;
};
if (totalDif === 0){
  return '0'};

while (sandwiches > 0){
for (p = 0; p < arr.length; p++){
   let lessHunger = 0;
if (p === 0){
  if (arr[p] > arr[p+1]){
    lessHunger --;
  } else if (arr[p] < arr[p+1]){
    lessHunger ++;
  } leastHunger = lessHunger;
  }
  if (p === arr.length-1){
    if (arr[p] > arr[p-1]){
      lessHunger --;
    } else if (arr[p] < arr[p-1]){
      lessHunger ++;
    } 
    if (lessHunger < leastHunger){
      leastHunger = lessHunger;
      index = p
    }
  }
  if (p !== 0 && p !== arr.length-1){
    if (arr[p] > arr[p+1]){
      lessHunger --;
    } else if (arr[p] < arr[p+1]){
      lessHunger++;
    }
    if (arr[p] > arr[p-1]){
      lessHunger--;
    } else if (arr[p] < arr[p-1]){
      lessHunger++;
    } 
    if (lessHunger < leastHunger){
      leastHunger = lessHunger;
      index = p
    };
  };
};
arr[index] = arr[index] - 1;
sandwiches = sandwiches - 1;
}
let newDif = 0;
for (i=0; i < arr.length-1; i++){
let dif = Math.abs(arr[i] - arr[i+1]);
newDif = newDif + dif;
};
 return newDif

console.log(totalDif)
console.log(arr[3] - arr[4])
console.log(sandwiches)
console.log(arr)
  // code goes here  
  return arr; 
}

// keep this function call here 
console.log(ArrayChallenge(readline())); */
