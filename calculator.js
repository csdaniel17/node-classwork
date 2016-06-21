var num1 = Number(process.argv[2]);
var num2 = Number(process.argv[3]);
var sum = num1 + num2;

console.log(sum);

//bonus - for any amount of numbers
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
