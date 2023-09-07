function reverseString(inputStr) {

  const reversedStr = inputStr.split('').reverse().join('');
  return reversedStr;
}

const originalStr = prompt('Введіть текст');
const reversedStr = reverseString(originalStr);
console.log(reversedStr); 
