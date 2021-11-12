let num,
  sum = 0;
for (let a = 1; a <= 100; a++) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
}
