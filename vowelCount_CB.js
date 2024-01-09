function VowelCount(str) {
  /* let regex = /[aeiou]/ig;
let vowels = str.match(regex);
return vowels.length */
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      count += 1;
    }
  }
  return count; // code goes here
  return str;
}
// keep this function call here
console.log(VowelCount('aeiou'));
