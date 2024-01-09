/////~~~~~~~~~~~~~~~IF ELSE IF ELSE

// function evenorodd(num) {
//   if (num % 2 === 0) {
//     return 'even'
//   } else {
//     return 'odd'
//   }
// }
// console.log(evenorodd(46))

// if (/*some expression which evaluates to true or false*/) {

//   /*some action to be taken in the event
//   that the expression above evaluates to true*/

// } else if (/*some other expression which evaluates to true or false*/) {

//   /*some action to be taken in the event
//   that the first expressions evaluates to false
//   and the second expression above evaluates to true*/

// } else {

//   /*some action to be taken in the event
//   that the first expressions evaluates to false
//   and the second expression above evaluates to false*/

// }

// We are going to complete a function that takes in one parameter, a string representing the choice of Player 1 in a game of rock/paper/scissors, and returns a specific string for four different cases. Your function should use an if else if statement to determine which choice the player has made, then should return: 'Player 1 chose rock'; 'Player 1 chose paper'; 'Player 1 chose scissors'; or, 'Player 1 has chosen poorly!', depending upon the value of the input parameter. Below are examples of the code running, assuming that you will have completed the described function: player1Choice.

// var result1 = player1Choice('rock');
// console.log('should log "Player 1 chose rock":', result1);

// var result2 = player1Choice('paper');
// console.log('should log "Player 1 chose paper":', result2);

// var result3 = player1Choice('scissors');
// console.log('should log "Player 1 chose scissors":', result3);

// var result4 = player1Choice('gun');
// console.log('should log "Player 1 has chosen poorly!":', result4);

// function player1Choice(choice){
//   if (choice === 'rock'){
//     return "Player 1 chose rock"
//   }
//   else if (choice === 'paper'){
//     return "Player 1 chose paper"
//   }
//   else if (choice === 'scissors'){
//     return "Player 1 chose scissors"
//   }
//   else {
//     return "Player 1 chose poorly"
//   }
// }
// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:

// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'

// function convertScoreToGrade(score){
//   if (score > 100 || score < 0){
//     return 'INVALID SCORE'
//   }
//   else if (score <= 100 && score >= 90){
//     return 'A'
//   } else if (score < 90 && score >= 80){
//     return 'B'
//   } else if (score < 80 && score >= 70){
//     return 'C'
//   } else if (score < 70 && score >= 60){
//     return 'D'
//   } else {return 'F'}
// }

// console.log(convertScoreToGrade(70))

//~~~~~~~~~~~~~~~~~~~~FOR LOOPS/ITERATIONS
//for (/*initialization*/ ; /*condition*/ ; /*final-expression*/ ) {
//   /* statement */
// }

// for (let i = 0; i <100; i++) {
//   //this code will get repeated
// }

// for (let i = 10; i >= 0; i--){
//   console.log(i)
// }

// let names = ['tom', 'jon', 'austin', 'natalie']
// for (i = 0; i < names.length; i++){
//   console.log(names[i])
// }

//*** function loopStartingAtIndex(array, index) {
// create a loop which iterates from index to the end of the input array
// log current array element to the console
//     for (var i = index; i < array.length; i++){
//         console.log(array[i])
//     }
// }
//~~~~~~~~~~~~CONTINUE STATEMENT?????????
// var numsArray = [1, 2, 3, 4, 5];

// // stipulation: do not print out element at index 2
// for (var i = 0; i < numsArray.length; i++) {
//   if (i === 2) {
//     console.log('SKIPPED VALUE AT INDEX 2');
//     continue; // this tells the loop to go to the next iteration
//   }
//   console.log('current index:', i);
//   console.log('current element:', numsArray[i]);
//   console.log('=============='); //gives context for when each iteration of loop ends
// }
// //~~~~~~~~~BREAK??-stops the loop
// var numsArray = [1, 2, 3, 4, 5];

// // stipulation: do not print out elements with index value greater than 2
// for (var i = 0; i < numsArray.length; i++) {
//   if (i > 2) {
//     console.log('FOR LOOP BROKEN');
//     break; // this tells the loop to end
//   } else {
//     console.log('current index:', i);
//     console.log('current element:', numsArray[i]);
//     console.log('=============='); //gives context for when each iteration of loop ends
//   }
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~WHILE LOOPS
//
// while (*this condition is true){execute this code}
//   let x = 0
// while (x <= 10){
// console.log(x);
// x++
// // }
// We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a while loop to log each integer from start, up to and including end, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopASequence.

// loopASequence(2, 5);
// // console output:
//   // 2
//   // 3
//   // 4
//   // 5

// loopASequence(3, 7);
// // console output:
//   // 3
//   // 4
//   // 5
//   // 6
//   // 7
// function loopASequence(start, end){
//   while (start <= end){
//     console.log(start);
//     start++
//   }
// }
// loopASequence(3, 7);

// ~~~~~~~~~~~~~~~~~~~FOR IN LOOPS /* loop over properties in an object
// for ( /*variable*/ in /*object*/ ) {
//   /* statement */
// }
//      var object = {
//        a: 1,
//        b: 2,
//        c: 3,
//        d: 4
//      };

//      for (var key in object) {
//        console.log('current key:', key);
//        console.log('current value:', object[key]);
//        //gives context for when each iteration of loop ends
//        console.log('==============');
//      }

// ~~~~~~~~~~~~~~~~~~~ITERATING THROUGH ARRAYS & OBJECTS
// var restaurants = ['The Salad Bowl', 'The Steak Knife', 'The Ramen Spoon'];
// var index = 0;
// while (index < restaurants.length) {
//   console.log(restaurants[index]);
//   index++;
// }
//
//******function loopAnArray(array){
//   let index = 0;
//   while (index < array.length){
//     console.log(array[index]);
//     index++;
//   }
// }
// loopAnArray([1, 2, 3, 4, 5]);

// ***let arrOfName = ['tom', 'jon', 'austin', 'natalie', 'stacey']
// // for (let i = 0; i < arrofName.length; i++){
// //   console.log(arrofName[i])
// // }

// FOR OF, LOOPS FOR ARRAYS
// for (let element of arrofName)
//   console.log(element)

// //FOR EACH BUILT IN METHOD

// arrOfName.forEach(function func(elem){
//    console.log(elem)
//  })
//FAT ARROW VERSION VV
// arrOfName.forEach(elem => {
//   console.log(elem[0])
// })

// let names = []
// arrOfName.forEach(elem => {
// if (elem[0].toUpperCase() === 'S') {
//     names.push(elem)
//   }
// })
// console.log(names)

//MAP... BUILT IN METHOD-RETURNS NEW ARRAY
// let upperNames = arrOfName.map(function uppercase(name){
//   return name.toUpperCase()
// })
// console.log(upperNames)

// //FILTER - RETURNS NEW ARRAY THAT MEETS A SPECIFIC CONDITION
// let names = arrOfName.filter(function newnew(name){
//  return name[0].toUpperCase() === 'S'
// })
// console.log(names)

// ~~~~~INFINITE LOOPS
// for (let i = 0; i >= 0; i++){
//   console.log("im stuck")
// }
// let i = 0
// while (i >= 0) {
//   console.log("im stuck x ${i+1} times")
// }

// ~~~~~~~~~~~~ NESTED LOOOOOOOOOOOPS
// var nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (var i = 0; i < nestedArray.length; i++) {
//   for (var j = 0; j < nestedArray[i].length; j++) {
//     console.log(nestedArray[i][j]);
//   }
//   console.log('end of inner loop');
// }
// console.log('end of outer loop');

// ~~~~~~~~~~~~~~~~ACCUMULATOR PATTERN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Let us consider the case of wanting to write a function that:
    Takes in an array of numbers
    Returns a new array containing the even numbers from the input array
    Steps to this Pattern
      The steps for creating this basic algorithm look like this:

          1. Identify the inputs and write a function definition with those inputs
          How many are there?
          What are their types?
            
function filterEvenElements(numbers) {
  // input is (1) array of numbers
}
          2. Identify the output
          What will the function return when the input is normal?
          When/what will the function return when the input is empty?
            
function filterEvenElements(numbers) {
  // if input in empty, what do we return? (edge case)
  if (numbers.length === 0) {
    return [];
  }
  // output is new array of even numbers
}
          3. Define the result variable (accumulator) and return it
          Initialize it to whatever the output is in the empty case
function filterEvenElements(numbers) {
  // edge case
  if (numbers.length === 0) {
    return [];
  }
  // define result variable
  var evenNumbers = [];
  // return result variable
  return evenNumbers;
}
          4. Determine how to iterate
          How many times are you going to iterate?
function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  var evenNumbers = [];
  // we will iterate over the entire input array
  for (var i = 0; i < numbers.length; i++) {
  }
  return evenNumbers;
}
          5. Alter the accumulator evenNumbers, using the information from the loop numbers[i]
          */

/*function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    // check if current number is even
    if (numbers[i] % 2 === 0) {
      // add to evenNumbers array
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
// **test cases
let output = filterEvenElements([1, 2, 3, 4,5,6]);
console.log(output); // ->[2,4,6] */

//*****generate sum of elements :)
/*Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. If input array is empty, your function should return 0.

function computeSumOfAllElements(array){
  if (array.length === 0){
    return 0;
  } 
  let sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i]
} 
  return sum
  }
var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2); */

//*****generate average of elements
/*Write a function called "computeAverageOfNumbers".
Given an array of numbers, "computeAverageOfNumbers" returns their average. If input array is empty, your function should return 0. */
/*function computeAverageOfNumbers(numbers){
  if (numbers.length === 0){
    return 0;
  } 
  let sum = 0;
  let avg = 0;
  for (i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  avg = sum / numbers.length
  }
  return avg
}


var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2); */

// ~~~~~~~~~~~~~~~~~!!!!SCOPE!!!!!~~~~~~~~~~~~~~~~~~~~~
// Code here is considered "global", not usually recommended
/*var Global_Variable = 'I am a global variable';

function THIS_IS_THE_FUNCTION_WE_ASKED_YOU_TO_WRTIE(input_of_some_kind) {

  // variables created inside of a function are called local
  var localVariable = "I am a local variable";

  // I CAN ALSO MAKE USE OF THE PARAMETER(S) OF THE FUNCTION IF ANY
  // I can also make use of the parameter(s) of the function, if any
  input_of_some_kind; // <= THIS IS THE PARAMETER OF THIS FUNCTION
  for (var i = 1; i < 6; i++) {
    // variables created here are created anew each iteration
    var newlyCreatedEachIteration = 0;
  }
  // this statement ends the function
  return localVariable;
  // code below this statement will not run
}
*/

// // an array of items to count
// var arrayOfItemsToCount = ['a', 'b', 'a', 'b', 'c', 'b'];
// // an object to store the counts
// var objectOfCounts = {};

// // we loop over the array of items to count
// for (var i = 0; i < arrayOfItemsToCount.length; i++) {
//   var currentItem = arrayOfItemsToCount[i];
//   // if we have not counted current item
//   if (objectOfCounts[currentItem] === undefined) {
//     // add it to count object with a value of 1
//     objectOfCounts[currentItem] = 1;
//   // otherwise (we have counted it at least once)
//   } else {
//     // increment value in count object by 1
//     objectOfCounts[currentItem]++;
//   }
// }
// console.log(objectOfCounts);
