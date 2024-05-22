//Question 1
console.log("Q1 Hello,world!");
//Question 2
let temprature: number = 4;
if (temprature < 20) {
  console.log("Q2 its cold!");
}
//Question 3
let apples = 10;
let givapples = 3;
let totalapples = apples - givapples;
console.log(`Q3 ${totalapples}`);
//Question 4
let firstname = "Mussa";
let lastname = "Ali";
let fullname = firstname + lastname;
console.log(`Q4 ${fullname}`);
//Question 5
let num1: number = 5;
let num2: number = 3;
if (num1 > num2) {
  console.log("Q5 Yes");
} else {
  console.log("No");
}
//Question 6
function calculateArea(radius: number) {
  const pi = 3.1416;
  console.log(`Q6 ${pi * radius * radius}`);
  return;
}
calculateArea(5);
//Question 7
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Question 8
let tempraturesarray = [1, 2, 3, 4, 5];
console.log(`Q8 ${tempraturesarray[4]}`);
//Question 9
const Age = 18;
if (Age < 0) {
  console.log("age cannot be negative");
} else if (Age < 18) {
  console.log("you are a minor");
} else {
  console.log("you are Adult");
}
//Question 10
function countnumbers(number: number[]) {
  return number.filter((num) => num > 0).length;
}
const numbers: number[] = [-1, -2, 0, 1, 2];
const positivecount = countnumbers(numbers);
console.log(positivecount);
//Question 11
function WordsStartingWithA(array: string[]) {
  return array.filter((word) => word.toLowerCase().startsWith("a"));
}
const words = ["Apple", "Banna", "Apricot", "Orange", "Grapes"];
const aWords = WordsStartingWithA(words);
console.log(aWords);
//Question 12
let fruitsarray = ["Apple", " Banana", " Mango", " Orange"];
if (fruitsarray.length >= 2) {
  console.log("second to last element :", fruitsarray[fruitsarray.length - 2]);
} else {
  console.log("there are not enough elements");
}
//Question 13
function squareNumbers(numbers: number[]) {
  return numbers.map((nom) => nom * nom);
}
const Snom = [1, 2, 3, 4, 5];
const Snumbers = squareNumbers(Snom);
console.log(Snumbers);
//Question 14
function reverseArray(arr: any | number) {
  let reverserdarray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverserdarray.push(arr[i]);
  }
  return reverserdarray;
}
const originalarray = [1, 2, 3, 4, 5];
const reverserdarray = reverseArray(originalarray);
console.log("Original Array", originalarray);
console.log("Reversed Array", reverserdarray);
//Question 15
let maxScore = 20;
let minScore = 5;
function countbelowandexceed(scores: number[]) {
  let maxCount = 0;
  let minCount = 0;
  for (let f = 0; f < scores.length; f++) {
    if (scores[f] > maxScore) {
      maxCount++;
    } else if (scores[f] < minScore) {
      minCount++;
    }
  }
  console.log("score exceeded:", maxCount);
  console.log("score fell below :", minCount);
}
const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countbelowandexceed(scores);
//Question 16
function removeFalse(falsey: any[]) {
  return falsey.filter((value) => !!value);
}
const arraywithfalseyvalue: any = [null, 0, "", undefined, NaN, "hello", 35];
const arraywithoutfalseyvalue = removeFalse(arraywithfalseyvalue);
console.log("falsey array", arraywithfalseyvalue);
console.log("array without falsey value", arraywithoutfalseyvalue);
//Question 17
const Array1 = [1, 2, 3, 4, 5];
const Array2 = [6, 7, 8, 9, 10];
const concatenatedarray = [...Array1, ...Array2];
console.log(concatenatedarray);
//Question 18
function sumOfElements(elements: any) {
  elements.map;
  for (const element of elements) {
    if (element % 2 == 0) {
      console.log(element + element);
    } else {
      console.log(element + element);
    }
  }
}
const EvenOddElement: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log("numbers  before Addition", EvenOddElement);
console.log("number after addition");
const sumElements = sumOfElements(EvenOddElement);
//Question 19
function findIndexArray(array: any, Element: number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === Element) {
      return index;
    }
  }
  return -1;
}
const numberss: number[] = [1, 2, 3, 4, 5];
const index1 = findIndexArray(numberss, 3);
const index2 = findIndexArray(numberss, 5);
console.log("index of element 3 =", index1);
console.log("index of element 5 =", index2);
//Question 20
function findSmallestnumber(no: any | number) {
  let smallestnumber = number1[0];
  for (let g = 1; g < number1.length; g++) {
    if (number1[g] < smallestnumber) {
      smallestnumber = number1[g];
    }
  }
  return smallestnumber;
}
const number1: any[] = [5, 3, 4, 1, 2];
const smallestnumber = findSmallestnumber(number1);
console.log("smallest number is =", smallestnumber);
//Question 21
function calculateProduct(numbers1: number[]) {
  return number1.map((no1: number) => no1 * no1);
}
const numbers1: number[] = [5, 4, 3, 2, 1];
const no1: number[] = calculateProduct(numbers1);
console.log("product is", no1);
//Question 22
function filterByLength(strings: string | any, n: number) {
  return strings.filter((str: any) => str.length > n);
}
const word: string[] = ["apple", "banana", "orange", "mango", "kiwi"];
const filteredwords: string[] = filterByLength(word, 3);
console.log(filteredwords);

//Question 23
function findDuplicates(numberss1: number[]) {
  const duplicates: { [key: number]: boolean } = {};
  numberss1.forEach((no2: number) => {
    if (numberss1.indexOf(no2) !== numberss1.lastIndexOf(no2)) {
      duplicates[no2] = true;
    }
  });
  console.log("duplicates found:");
  for (const key in duplicates) {
    console.log(key);
  }
}
const numberss1: number[] = [1, 2, 5, 3, 3, 4, 5];
findDuplicates(numberss1);
//Question 24
function IncreamentAll(numarr: number[]) {
  return numarr.map((inc: number) => ++inc);
}
const arrOfNum: number[] = [1, 2, 3];
const inc: number[] = IncreamentAll(arrOfNum);
console.log("normal arr", arrOfNum);
console.log("inc arr", inc);
//Question 25
function countOccurrences(counts: number[]) {
  const occurrences: Record<number, number> = {};
  counts.forEach((nums1: number) => {
    occurrences[nums1] = (occurrences[nums1] || 0) + 1;
  });
  let counted = 0;
  for (const key in occurrences) {
    counted += occurrences[key];
  }
  return counted;
}
const UnCountednumbers: number[] = [1, 1, 2, 3, 3, 4, 5, 5];
const cntnumbers: number = countOccurrences(UnCountednumbers);
console.log(cntnumbers);
//Question 26
function isStored(arry: number[]) {
  for (let j = 0; j < arry.length - 1; j++) {
    if (arry[j] > arry[j + 1]) {
      return false;
    }
  }
  return true;
}
const arrnum: number[] = [1, 2, 3, 4, 5];
const arrnum1: number[] = [5, 4, 3, 2, 1];
console.log(isStored(arrnum)); // returns true
console.log(isStored(arrnum1)); // returns faLse
//Question 27
function formatnames(names: string[]) {
  const length = names.length;
  if (length === 0) {
    return "";
  } else if (length === 1) {
    return names[0];
  } else if (length === 2) {
    return `${names[0]} and ${names[1]}`;
  } else {
    const formatednames = names.slice(0, length - 2).join(", ");
    const lastTwonames = names.slice(length - 2).join(" and ");
    return `${formatednames},${lastTwonames}`;
  }
}
const namesArray: string[] = ["bob", "charlie", "david", "angel", "goat"];
const formatednames = formatnames(namesArray);
console.log(formatednames);
//Question 28
function converfahrenheitintocelsius(giventemprature: number[]) {
  const celsiustemp = giventemprature.map(
    (temp: number) => ((temp - 32) * 5) / 9
  );
  console.log("celsius temprature:");
  celsiustemp.forEach((temp) => console.log(temp));
}
const fahrenheittemp: number[] = [32, 35, 53, 68, 120];
converfahrenheitintocelsius(fahrenheittemp);
//Question 29
function minMaxAverage(number2: number[]) {
  if (number2.length === 0) {
    console.log("Array must not be empty");
  }
  const min: number = Math.min(...number2);
  const max: number = Math.max(...number2);
  const sum: number = number2.reduce(
    (acr: number, cur: number) => acr + cur,
    0
  );
  const average: number = sum / number2.length;
  return { min, max, average };
}
const numbarray: number[] = [5, 10, 20, 25, 30];
const result: any = minMaxAverage(numbarray);
console.log(result);
//Question 30
function swapIndex(values: number[], index3: number, index4: number) {
  const temp = values[index3];
  values[index3] = values[index4];
  values[index4] = temp;
}
const myarray: number[] = [1, 2, 3, 4];
swapIndex(myarray, 0, 2);
console.log(myarray); // answere [3,2,1,4]
//Question 31
function countCharacter(strr: string, char: string) {
  let count: number = 0;
  for (let k = 0; k < strr.length; k++) {
    if (strr.charAt(k) === char) {
      count++;
    }
  }
  return count;
}
const inputstring: string = "Hello World";
const charactertocount: string = "o";
const result1 = countCharacter(inputstring, charactertocount);
console.log(result1);
//Question 32
interface Todo {
  task: string;
  completed: boolean;
}
const todolist: Todo[] = [
  { task: "complete assignment", completed: false },
  { task: " buy groceries", completed: true },
  { task: "call mom", completed: false },
];
function logincompletetasks(todolist: Todo[]): void {
  console.log("Incomplete Tasks:");
  todolist.forEach((todo) => {
    if (!todo.completed) {
      console.log(todo.task);
    }
  });
}
logincompletetasks(todolist);
//Question 33
function sortNumbers(numbers2: number[]) {
  return numbers2.slice().sort((a, b) => a - b);
}
const unsortednumbers: number[] = [5, 2, 9, 1, 7];
const sortednumber = sortNumbers(unsortednumbers);
console.log(sortednumber);
// Question 34
function logarrayinreverse(arr1: number[]) {
  for (let l = arr1.length; l >= 0; l--) {
    console.log(arr1[l]);
  }
}
const arry1: number[] = [1, 2, 3, 4, 5];
logarrayinreverse(arry1);
//Question 35
let operand1 = 2;
let operand2 = 2;
console.log(`Operands are ${operand1} and ${operand2}`);
const additionofOperands = operand1 + operand1;
console.log("Addition(+) of  Operands is :", additionofOperands);
const subtractionofOperands = operand1 - operand2;
console.log("Subtraction(-) of Operands is :", subtractionofOperands);
const divisionofOperands = operand1 / operand2;
console.log("Division(/) of Operands is :", divisionofOperands);
const multiplicationofOperands = operand1 * operand2;
console.log("Multiplication(*) of Operands is :", multiplicationofOperands);