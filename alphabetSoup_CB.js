//PUT STR IN ALPHABETICAL ORDER
function AlphabetSoup(str) {
  let arr = str.split("");
  arr = arr.sort();
  let result = arr.join("");
  return result;
}
console.log(AlphabetSoup("zebra"))