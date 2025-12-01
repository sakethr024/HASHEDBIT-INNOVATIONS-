const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const filteredStates = states.filter((state) => !/^[AEIOUaeiou]/.test(state));

console.log(filteredStates);

function reverseWords(str) {
  const reverseWordsString = str.split(" ").reverse().join(" ");
  return reverseWordsString;
}

console.log(reverseWords("I love my India"));

let string = "INDIA".split("");
string.splice(3, 0, "O", "N", "E", "S");
console.log(string.join(""));

function checkVowelAndConsonants(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, ""); // Store the cleaned string
  let vowels = "aeiou";
  let vowelsCount = 0,
    consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else {
      consonantCount++;
    }
  }

  return { vowel: vowelsCount, consonant: consonantCount };
}

let text = "JavaScript is a powerful language!";
let result = checkVowelAndConsonants(text);

console.log(result);

function correctfn(string, wrong, correct) {
  let regex = new RegExp(wrong, "g");
  return string.replace(regex, correct);
}

let sentence = "This is a wrng sentence with a wrng word.";
let fixedSentence = correctfn(sentence, "wrng", "wrong");

console.log(fixedSentence);

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter((num) => num > 5);
console.log(answer);

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map((student) => {
  let average = student.scores.reduce((acc, score) => acc + score, 0);
  return { name: student.name, average };
});

console.log(output);

function repeatedDigitSum(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}
console.log(repeatedDigitSum(456));

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

let text2 = "This is a sample paragraph containing multiple words.";
console.log(countWords(text2));

let text3 = "Hello   world!   This is \n JavaScript.";
let words = text3.trim().split(/\s+/);

console.log(words.length);

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));

const students2 = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

const result2 = Object.entries(students2).map(([student, subjects]) => {
  const scores = Object.values(subjects);
  const average = Math.floor(
    scores.reduce((sum, score) => sum + score, 0) / scores.length
  );
  return { [student]: { average } };
});

console.log(result2);
