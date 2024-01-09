//if a and b separated by EXACTLY 3 places return true
function ABCheck(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] == "a" && str[i + 4] == "b") ||
      (str[i] == "b" && str[i + 4] == "a")
    ) {
      return true;
    }
  }
  return false; // code goes here
}
// keep this function call here
console.log(ABCheck('aging an orb'));
