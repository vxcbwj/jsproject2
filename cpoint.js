function reverseString(string) {
  let newString = [];
  let j = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    newString[j] = string[i];
    j++;
  }
  return newString.join("");
}
function count(string) {
  let k = 0;
  for (let i = 0; i < string.length; i++) {
    k++;
  }
  return k;
}
function capitalize(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
function findMaxMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return { max: max, min: min };
}
function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
function filterArray(array) {
  let filteredArray = [];
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      filteredArray[j] = array[i];
      j++;
    }
  }
  return filteredArray;
}
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}
