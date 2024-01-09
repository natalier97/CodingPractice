/*Write a function that takes a sentence as input and counts the number of vowels (a, e, i, o, u) in it. Display the total count of each vowel in a dictionary.
(Note: Some characters might be uppercase, make sure to count those too)
For example, if the input is “Today was good. Today was fun. Tomorrow is another one.” the program will display:
Output: {A:  5, E:  2, I:  1, O:  9, U:  1} */

function vowelCount(str) {
  let upper = str.toUpperCase();
  let vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  };
  for (i = 0; i < upper.length; i++) {
    if (upper[i] in vowels) {
      vowels[upper[i]]++;
    }
  }
  return vowels;
}
console.log(vowelCount("aBC"));
