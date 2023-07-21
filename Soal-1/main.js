function triangularNumbers(n) {
  if (n <= 0) {
    return "Input harus lebih besar dari 0.";
  }

  let output = [];
  let currentNumber = 1;

  for (let i = 0; i < n; i++) {
    output.push(currentNumber);
    currentNumber += (i + 1);
  }

  return output.join("-");
}

// Input dari pengguna dengan menggunakan fungsi readline pada Node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function processInput(inputNumber) {
  const n = parseInt(inputNumber);
  const result = triangularNumbers(n);
  console.log("Output:", result);
}

readline.question("Masukkan jumlah bilangan dalam deret (Input 1): ", (input1) => {
  processInput(input1);

  readline.question("Masukkan jumlah bilangan dalam deret (Input 2): ", (input2) => {
    processInput(input2);

    readline.question("Masukkan jumlah bilangan dalam deret (Input 3): ", (input3) => {
      processInput(input3);

      readline.close();
    });
  });
});
