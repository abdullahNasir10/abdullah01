"use strict";
// Question no 1
let greeting = " Hello WORLD";
console.log(greeting);
// Question no 2
let no1 = 93;
let no2 = 27;
console.log("Q:2 num =93 and 27");
let add = no1 + no2;
let sub = no1 - no2;
let div = no1 / no2;
let mult = no1 * no2;
console.log(" their sum =", add);
console.log(" their sum =", sub);
console.log(" their sum =", div);
console.log(" their sum =", mult);
// Question no 3
let n1 = 10;
let n3 = 20;
console.log("Q:3Before Swapping");
console.log("n1=", n1);
console.log("n3=", n3);
n3 = n3 - n1;
n1 = n1 + n3;
console.log("Q:3After Swapping");
console.log("n1=", n1);
console.log("n3 =", n3);
//Question no 4
let message;
message = "Hy";
console.log("Q:4 message", message);
//Question no 5
let num1 = 10;
let num2 = 3;
console.log(num1 % num2);
//Question no 6
let counter = 0;
counter++;
console.log("Q6: A way of increment", counter);
// Question no 7
let a = true;
let b = false;
let c = true;
console.log("Q7: AND For ab", a && b);
console.log("OR For ab", a || b);
console.log("NOT For ab", !a, !b);
console.log("AND For ac", a && c);
console.log("OR For ac", a || c);
console.log("NOT For ac", !a, !c);
console.log("AND For bc", b && c);
console.log("OR For bc", b || c);
console.log("NOT For bc", !b, !c);
//Questionno 8
let num = 10;
console.log("Q8: number=", num);
num += 2;
console.log("   10+=2", num);
num -= 2;
console.log("   12-=2", num);
num *= 2;
console.log("   10*=2", num);
num /= 2;
console.log("   20/=2", num);
//Question no 9
let A = 2;
if (A % 2 === 0) {
    console.log("Q9:number is even", A);
}
else {
    console.log("number is odd");
}
//Question no 10
let age = 18;
if (age >= 18) {
    console.log("Q10:You are Adult");
}
else {
    console.log("You are not Adult");
}
//  Question no 11
let score = 66;
if (score >= 98) {
    console.log("Your Grade is A");
}
else if (score >= 80) {
    console.log("Your Grade is B");
}
else if (score >= 60) {
    console.log("Your Grade is C");
}
else if (score >= 40) {
    console.log("You are pass");
}
else {
    console.log("You are fail ");
}
//Question no 12
let x = 11;
let y = 15;
let z = 20;
if (x > y) {
    console.log(`Greater number is : ${x}`);
}
else if (z > y) {
    console.log(`Greater number is : ${z}`);
}
else {
    console.log(`Greater number is: ${z}`);
}
//Question no 13
let year = 2024;
if (year % 4 == 0) {
    console.log("Q13:" + "" + year, "year is a leap year");
}
else {
    console.log("this is not leap year");
}
//Quedtion no 14
let fahrenheit = 99;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log("Q14: Temperature in celsius=", celsius.toFixed(2));
//Question no 15
let e = -16;
if (e < 0) {
    console.log(`Q15: Number is nagative=`, e);
}
else if (e > 0) {
    console.log(`Number is positive =`, e);
}
else {
    console.log("Number is equal to zero");
}
//Question no 16
let f = 2;
console.log("Q16: 2 * 1 =", 2 * 1);
console.log("   2*2=", 2 * 2);
console.log("   2*3=", 2 * 3);
console.log("   2*4=", 2 * 4);
console.log("   2*5=", 2 * 5);
console.log("   2*6=", 2 * 6);
console.log("   2*7=", 2 * 7);
console.log("   2*8=", 2 * 8);
console.log("   2*9=", 2 * 9);
console.log("   2*10=", 2 * 10);
