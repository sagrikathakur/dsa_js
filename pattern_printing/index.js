let n = 9

for (let i = 1; i <= n; i++) {
  let row = ' ';

  for (let j = 1; j <= i; j++) {
    row += "✨";
  }

  console.log(row);
};

// decrease//
let num = 10;

for (let i = 1; i <= num; i++) {
  let row = '';

  for (let j = 1; j <= num - i + 1; j++) {
    row += '✨';

  }
  console.log(row)
}
// right angle triangle //

let number = 5;

for (let i = 1; i <= number; i++) {

  let row = "";

  // spaces
  for (let j = 1; j <= number - i; j++) {
    row += " ";
  }

  // stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}
