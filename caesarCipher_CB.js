// Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. 
//A Caesar Cipher works by shifting each letter in the string N places in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. 
//For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

function CaesarCipher(str,num) { 
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y','z'];
let strArr = str.toLowerCase().split('');
//console.log(strArr)
for (let i = 0; i < strArr.length; i++){
  if (alphabet.indexOf(strArr[i]) != -1){
    let newIndex = alphabet.indexOf(strArr[i]) + num;
    strArr.splice(i, 1, alphabet[newIndex]);
  }
};
for (let j = 0; j < str.length; j++){
  if (str[j] === str[j].toUpperCase()){
strArr[j] = strArr[j].toUpperCase();
  };
};
return strArr.join('')

}
console.log(CaesarCipher('boob', 2))
