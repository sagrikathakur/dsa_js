// sum of array//
let arr = [1, 20, 30, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i]

}
console.log(sum)

// sum of only odd //
let array = [20, 34, 13, 45, 3, 9]

let total = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    total += array[i];
  }
}
console.log(total);

// sum of only even//
let arrayOfEven = [20, 30, 40, 50, 55, 13, 29];
let sumOfNumber = 0;

for (let i = 0; i < arrayOfEven.length; i++) {
  if (arrayOfEven[i] % 2 === 0) {
    sumOfNumber += arrayOfEven[i];
  }
}
console.log(sumOfNumber)
