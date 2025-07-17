// 1-masala
function transformAndSum(arr) {
  return arr
    .filter(n => n > 0)
    .map(n => n % 2 === 0 ? n * n : n)
    .reduce((sum, val) => sum + val, 0);
}

console.log(transformAndSum([-2, 3, 4, 5])); 

// 2-masala
function checkTwoArr(arr1, arr2) {
  return arr1.some(el => arr2.includes(el));
}

console.log(checkTwoArr([1, 2, 3, 4], [0, 6])); 
console.log(checkTwoArr([3, 1], [4, 0])); 
console.log(checkTwoArr([9, 9, 8], [8, 9])); 

console.log(checkTwoArr([1, 2, 3, 4], [2, 3])); 

// 3-masala
function sortArray(arr1, arr2, str) {
  const combined = [...arr1, ...arr2];
  console.log(combined.sort((a, b) => a - b));
  console.log(combined.sort((a, b) => b - a));
  console.log(Array(combined.length).fill(str));
}

sortArray([1, 10], [2, 3, 4]);

4-masala
function numberSplit(num) {
  const half = Math.floor(num / 2);
  return num % 2 === 0 ? [half, half] : [half, half + 1];
}
console.log(numberSplit(4));  
console.log(numberSplit(10));  
console.log(numberSplit(11));  
console.log(numberSplit(-9));  

// 5-masala
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));

// 6-masala
function doubleAndFilterEvens(arr) {
  return arr.map(n => n * 2).filter(n => n % 2 === 0).sort((a, b) => a - b);
}
console.log(doubleAndFilterEvens([1, 2, 3, 4])); 

// 7-masala
function doubleAndSquareEvens(arr) {
  arr
    .map(n => n * 2)
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .forEach(n => console.log(n));
}

doubleAndSquareEvens([1, 2, 3, 4]); 

// 8-masala
function reverseImage(matrix) {
  return matrix.reverse().map(row => row.reverse());
}

console.log(reverseImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

// 9-masala
function changeNumberToString(start, end) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(words[i]);
  }
  return result;
}

console.log(changeNumberToString(1, 5)); 

// 10-masala
function addToArray(n) {
  const result = [];
  let temp = [];
  for (let i = 1; i <= n; i++) {
    temp.push(i);
    if (temp.length === 3 || i === n) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}

console.log(addToArray(10)); 