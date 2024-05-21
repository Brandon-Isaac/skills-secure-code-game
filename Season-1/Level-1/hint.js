// Example of underflow vulnerability in JS
var a = 1000000000000000;  try with 15 zeroes ;)
var b = 2;
var c = 1;

console.log(a + b - c - a);
