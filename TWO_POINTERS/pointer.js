// print an array in reverse order//
let arr = [1, 2, 3, 4, 5];

let left = 0;
let right = arr.length - 1;

while (left <= right) {
  console.log(arr[right])
  right--;
}

// example two//
let array = [90, 100, 235, 8900, 2355]
let left_arr = 0
let right_arr = array.length - 1;

while (left_arr <= right_arr) {
  console.log(array[right_arr])
  right_arr--;
}
// check if the number is palindrome//
let array_palindrome = [1, 2, 3, 2, 4];
let left_p = 0;
let right_p = array_palindrome.length - 1;

let isPalindrome = true;

while (left_p < right_p) {
  if (array_palindrome[left_p] !== array_palindrome[right_p]) {
    isPalindrome = false;
    break;
  }
  left_p++
  right_p--
}
console.log(isPalindrome)