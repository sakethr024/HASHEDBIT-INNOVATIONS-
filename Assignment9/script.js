function variableScope() {
  var a = "I am var";
  let b = "I am let";
  const c = "I am const";

  if (true) {
    var d = "var inside block";
    let e = "let inside block";
    const f = "const inside block";
  }

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
variableScope();

const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());

function modifyArray(arr) {
  arr.push("New Element");
  arr.pop();
  return arr;
}
console.log("Modified Array:", modifyArray([1, 2, 3, 4]));

const numbers = [2, 3, 4, 5];
const squareNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers:", squareNumbers);

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
console.log("Odd Numbers:", filterOddNumbers([1, 2, 3, 4, 5, 6]));

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};
function greetPerson(person) {
  console.log(
    `Hello, my name is ${person.name}, I am ${person.age} years old and I work as a ${person.occupation}.`
  );
}
greetPerson(person);

function calculateArea(rect) {
  return rect.width * rect.height;
}
console.log("Rectangle Area:", calculateArea({ width: 10, height: 5 }));

const sampleObject = { name: "Alice", age: 25, country: "USA" };
console.log("Object Keys:", Object.keys(sampleObject));

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged Object:", mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);
