// print all element//
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(i, array[i])
}

// print element in reverse order//

let arr_rev = [12, 14, 18, 19, 22, 90];
for (i = arr_rev.length - 1; i >= 0; i--) {
  console.log(i, arr_rev[i])
}
// count total element//
let total = [22, 33, 45, 34];
let count = 0;
for (i = 0; i < total.length; i++) {
  count++;
}
console.log(count);


// type B : sum of all element//

let sum_array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < sum_array.length; i++) {
  sum = sum + sum_array[i]
}
console.log(sum);

// sum of even number //

let even_arr = [23, 14, 28, 34, 1, 20];

let sum_even = 0;

for (let i = 0; i < even_arr.length; i++) {
  if (even_arr[i] % 2 === 0) {
    sum_even = sum_even + even_arr[i];
  }
}

console.log(sum_even);
