function printEvenNumbers() {
  for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      process.stdout.write(i + " ");
    }
  }
}
console.log("Question 1");
printEvenNumbers();
console.log();

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default:
      return "Invalid operator";
  }
}

console.log("Question 2");
console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));

function findTax(salary) {
  let taxRate;

  switch (true) {
    case salary > 0 && salary <= 500000:
      taxRate = 0;
      break;
    case salary > 500000 && salary <= 1000000:
      taxRate = 0.1;
      break;
    case salary > 1000000 && salary <= 1500000:
      taxRate = 0.2;
      break;
    case salary > 1500000:
      taxRate = 0.3;
      break;
    default:
      return "Invalid salary amount";
  }

  return salary + salary * taxRate;
}

console.log("Question 3");
console.log(findTax(400000));
console.log(findTax(750000));

function sumOfProducts(n1, n2) {
  let sum = 0;
  let str1 = n1.toString().split("").reverse();
  let str2 = n2.toString().split("").reverse();
  let len = Math.max(str1.length, str2.length);

  for (let i = 0; i < len; i++) {
    let digit1 = i < str1.length ? parseInt(str1[i]) : 0;
    let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
    sum += digit1 * digit2;
  }

  return sum;
}

console.log("Question 4");
console.log(sumOfProducts(6, 34));
console.log(sumOfProducts(12, 34));
