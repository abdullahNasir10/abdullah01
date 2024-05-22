"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const question = await inquirer_1.default.promp([
    {
        type: "input",
        name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    {
        type: "List",
        name: "Operator",
        message: "Select your operator",
        choices: ["+", "-", "*", "/"],
    },
]);
function sum(num1, num2) {
    const result = num1 + num2;
    console.log(`sum of ${num1} and ${num2}=${result}`);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log(`subtraction of ${num1} and ${num2}=${result}`);
}
function Multiply(num1, num2) {
    const result = num1 * num2;
    console.log(`multipy ${num1} and ${num2}=${result}`);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log(`division of ${num1} and ${num2}=${result}`);
}
if (question.operator == "+") {
    console.log("This is sum");
    sum(question.num1, question.num2);
}
else if (question.operator == "-") {
    console.log("This is subtraction");
    subtract(question.num1, question.num2);
}
else if (question.operator == "*") {
    console.log("This is subtraction");
    division(question.num1, question.num2);
}
else if (question.operator == "/") {
    console.log("This is division");
    division(question.num1, question.num2);
}
else {
    console.log("This is invalid");
}
