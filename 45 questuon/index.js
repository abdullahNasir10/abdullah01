//question 2
let p_name = "Mussa Ali";
let p_message = `Hello ${p_name} would you like to learn some python today`;
//Question 3
let person_name: string = "Mussa Ali"; //Question 10
console.log(person_name.toLowerCase()); //used to write a persons name in lower_case
console.log(person_name.toUpperCase()); //used to write a persons name in upper_case
console.log([person_name]); //used to write a persons name in title_case
//Question 4
console.log(
  'Albert Einstein once said,"A person who never made a mistake never tried anything new."'
);
//Question 5
const famous_person = "oscar wilde";
let message =
  'famous_person once said,"Life is never fair, and perhaps it is a good thing for most of us that it is not';
console.log(message);
//Question 6
let white_space: string = "\t Mussa Ali \n";
console.log(white_space);
console.log(white_space.trim());
//Queston 7
console.log(4 + 4);
console.log(10 - 2);
console.log(16 / 2);
console.log(2 * 4);
//Question 8
console.log(5 + 3);
console.log(3 + 5);
console.log(2 + 6);
console.log(4 + 4);
//Question 9
const fav_num = 3; //Question 10 pt 2
let num_reveal = `fav num is ${fav_num}`; //used to find fav num and reveal it
console.log(num_reveal);
//question 11
let Names: string[] = ["Tanjiro", "lucy", "Gray", "Natsu"];
for (let i = 0; i < Names.length; i++) {
  console.log(Names[i]);
}
//Question 12
Names = ["Luffy", "Zoro", "Nika", "Ken"];
for (let i = 0; i < Names.length; i++) {
  console.log(`hey there ${Names[i]}`);
}
//Question 13
let fav_transportation: string[] = [
  "Nissan GTR",
  "Kawasaki ninja h2r",
  "koenigsegg Gamera and jesko",
];
for (let h = 0; h < fav_transportation.length; h++) {
  console.log(`I would love to own a ${fav_transportation[h]}`);
}
//Question 14
let guest: string[] = ["Zoro", "luffy", "brook"];
for (let i = 0; i < guest.length; i++) {
  console.log(
    `Hey There ${guest[i]} how are you doin, This is an invitation for you to come at my place for dinner`
  );
}
//Question 15
console.log("Zoro got lost so changing guest");
guest[0] = "robin";
for (let i = 0; i < guest.length; i++) {
  console.log(
    `Hey There ${guest[i]} how are you doin, This is an invitation for you to come at my place for dinner`
  );
}
//Question 16
console.log("Found a bigger dinner table si inviting more guest");
guest.unshift("Nami");
guest.push("franky");
let middle = Math.floor(guest.length / 2);
guest.splice(middle, 0, "jimbei");
guest.forEach((guest) => {
  console.log(`Dear ${guest} you are invited to dinner`);
});
//Question 17
console.log("i can only invite two people for dinner");
console.log(
  `sorry ${guest.pop()} i cannot invite you cuz my dinner table seems to be ariving late`
);
console.log(
  `sorry ${guest.pop()} i cannot invite you cuz my dinner table seems to be ariving late`
);
console.log(
  `sorry ${guest.pop()} i cannot invite you cuz my dinner table seems to be ariving late`
);
console.log(
  `sorry ${guest.pop()} i cannot invite you cuz my dinner table seems to be ariving late`
);
console.log(`Dear ${guest}  you are still invited`);
guest.pop();
guest.pop();
console.log(guest);
//Question 18
let fav_places: string[] = ["Tokyo", "paris", "sydney", "icelands"];
console.log(fav_places);
let sort_places = [...fav_places].sort();
console.log(sort_places);
console.log(fav_places);
let reversesort_places = [...fav_places].sort().reverse();
console.log(reversesort_places);
console.log(fav_places);
let reverse_places = [...fav_places].reverse();
console.log(reverse_places);
let reverse_places0 = [...reverse_places].reverse();
console.log(reverse_places0);
console.log(fav_places.sort());
console.log(fav_places.sort().reverse());
//Question 19
console.log("I am inviting two people for dinner");
//Question 20
let list_languages: string[] = [
  "urdu",
  "arabic",
  "japanese",
  "American english",
  "British english",
  "persian",
  "chinese",
];
console.log("list of some languages");
for (let i = 0; i < list_languages.length; i++) {
  console.log(`${list_languages[i]}`);
}
//Question 21
let car = {
  company: "Nissan",
  model: "R35",
  engine: "3.8L twin-turbocharged VR38DETT V6",
};
console.log(
  `car publisher is ${car.company}, enigine is ${car.engine}, model number is${car.model}`
);
//Question 22
console.log("Intentionally generating error in array");
console.log(fav_places[10]); //Intentially generated error
console.log("fixing the error");
console.log(fav_places[0]);
//Question 23
let car0 = "subaru";
console.log("is car0 =='subaru'? I predict true.");
console.log(car0 == "subaru");
let glass_filled = "water";
console.log("is glass_filled =='water'? I predict true.");
console.log(glass_filled == "juice");
let mood = "happy";
console.log("is mood =='happy'? I predict true.");
console.log(mood == "happy");
let feeling = "full";
console.log("is feeling =='full'? I predict false.");
console.log(feeling == "hungry");
let time = "Tostudy";
console.log("is time =='Tostudy'? I predict true.");
console.log(time == "Tostudy");
let person = "sleeping";
console.log("is person =='sleeping'? I predict false.");
console.log(person == "sleeping");
let place = "newzeland";
console.log("is place =='newzeland'? I predict true.");
console.log(place == "newzeland");
let body = "rest";
console.log("is body =='rest'? I predict true.");
console.log(body == "motion");
let sportsman = "games";
console.log("is sportsman =='games'? I predict false.");
console.log(sportsman == "workout");
let gamer = "Enemy died";
console.log("is gamer =='Enemy died'? I predict true.");
console.log(gamer == "Enemy Alive");
//Question 24
let string0 = "hello";
let string1 = "hello";
let string2 = "world";
console.log(string0 == string1); //For equality
console.log(string0 == string2);
console.log(string0 !== string2); // For inequality
console.log(string0 !== string1);
string0 = "hello";
string1 = "HELLO";
string2 = "world";
console.log(string0.toLowerCase() === string1.toLowerCase());
console.log(string0.toLowerCase() === string2.toLowerCase());
let num1 = 1;
let num2 = 2;
let num3 = 1;
console.log(num1 == num3); // For equality
console.log(num1 == num2);
console.log(num1 != num2); //For inequality
console.log(num1 != num3);
console.log(num1 < num2); //for less than
console.log(num1 < num3);
console.log(num2 > num1); //For Greater than
console.log(num1 > num2);
console.log(num2 >= num1); //For Greater than equal to
console.log(num1 >= num2);
console.log(num1 <= num2); //Fpr less than equal to
console.log(num2 <= num1);
console.log(num1 < num2 && num2 > num3); //For and operator
console.log(num1 > num2 && num2 < num3);
console.log(num1 < num2 || num2 < num3); //For or operator
console.log(num1 > num2 || num2 < num3);
let myArray = [1, 2, 3, 4, 5];
console.log(myArray.includes(4)); //Item is an array
console.log(myArray.includes(6));
console.log(!myArray.includes(7)); //item not in array
console.log(!myArray.includes(3));
//Question 25
let alien_color = "green";
if (alien_color == "green") {
  console.log("Player just earned 5 points");
}
if (alien_color == "red") {
  console.log();
}
//Question 26
let alien_color0 = "green";
if (alien_color0 == "green") {
  console.log("Player just earned 5 points");
} else {
  console.log("Player just earned 10 points ");
}
if (alien_color0 == "pink") {
  console.log("Player just earned 5 points");
} else {
  console.log("Player just earned 10 points ");
}
//Question 27
let alien_color1 = "green";
if (alien_color1 == "green") {
  console.log("Player just earned 5 points");
}
if (alien_color1 == "yellow") {
  console.log("Player just earned 10 points");
}
if (alien_color1 == "yellow") {
  console.log("Player just earned 15 points");
}
alien_color1 = "yellow";
if (alien_color1 == "green") {
  console.log("Player just earned 5 points");
}
if (alien_color1 == "yellow") {
  console.log("Player just earned 10 points");
}
if (alien_color1 == "yellow") {
  console.log("Player just earned 15 points");
}
alien_color1 = "red";
if (alien_color1 == "green") {
  console.log("Player just earned 5 points");
}
if (alien_color1 == "yellow") {
  console.log("Player just earned 10 points");
}
if (alien_color1 == "yellow") {
  console.log("Player just earned 15 points");
}
//Question 28
let age = 18;
if (age < 2) {
  console.log("Person is an baby");
} else if (age > 2 && age < 4) {
  console.log("Person is an toddler");
} else if (age >= 4 && age < 13) {
  console.log("Person is an kid");
} else if (age >= 13 && age < 20) {
  console.log("Person is an teenager");
} else if (age >= 20 && age < 65) {
  console.log("Person is an adult");
} else {
  console.log("Person is an alder");
}
//Question 29
let favorite_fruits: string[] = ["apple", "mango", "banana"];
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}
//Question 30
let usernames: string[] = ["admin", "Eric", "Jessica", "Mike", "Sophia"];

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
//Question 31
let usernames1: string[] = ["admin", "Eric", "Jessica", "Mike", "Sophia"];
if (usernames1.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames1) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
usernames1 = [];
if (usernames1.length === 0) {
  console.log("We need to find some users!");
}
let age1: number = 30;
if (age1 < 2) {
  console.log("The person is a baby.");
} else if (age1 >= 2 && age1 < 4) {
  console.log("The person is a toddler.");
} else if (age1 >= 4 && age1 < 13) {
  console.log("The person is a kid.");
} else if (age1 >= 13 && age1 < 20) {
  console.log("The person is a teenager.");
} else if (age1 >= 20 && age1 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
//Question 32
let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];

let new_users: string[] = ["Eve", "alice", "charlie", "George", "Hannah"];

let current_users_lowercase = current_users.map((user) => user.toLowerCase());

for (let new_user of new_users) {
  let new_user_lowercase = new_user.toLowerCase();

  if (current_users_lowercase.includes(new_user_lowercase)) {
    console.log(
      `The username "${new_user}" is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username "${new_user}" is available.`);
  }
}
//Question 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
}
//Question 34
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
//Question 35
let animals: string[] = ["dog", "cat", "rabbit"];
for (let animal of animals) {
  console.log(
    `${
      animal.charAt(0).toUpperCase() + animal.slice(1)
    } would make a great pet.`
  );
}

console.log("Any of these animals would make a great pet!");
//Question 36

function make_shirt(size: string, message: string): void {
  console.log(
    `The shirt size is ${size} and it has the message: "${message}".`
  );
}

make_shirt("M", "Code is life");
//Question 37
function make_shirt1(
  size: string = "L",
  message: string = "I love world"
): void {
  console.log(
    `The shirt size is ${size} and it has the message: "${message}".`
  );
}
make_shirt1();
make_shirt1("M");

make_shirt1("S", "TypeScript is a language!");
//Question 38
function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Paris", "France");
describe_city("New York", "USA");
//Question 39
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
//Question 40

function make_album(
  artistName: string,
  albumTitle: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artistName,
    title: albumTitle,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

console.log(make_album("Adele", "30"));
console.log(make_album("Taylor Swift", "1989"));
console.log(make_album("The Weeknd", "After Hours", 14));
//Question 41
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}
let magicians: string[] = [
  "David Copperfield",
  "Houdini",
  "Penn Jillette",
  "Teller",
];
show_magicians(magicians);
//Question 42
function city_country1(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
//Question 43
function show_magicians1(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = magicians.map(
    (magician) => magician + " the Great"
  );
  return greatMagicians;
}

let magicians1: string[] = [
  "David Copperfield",
  "Houdini",
  "Penn Jillette",
  "Teller",
];

let greatMagicians: string[] = make_great(magicians1);

console.log("Original Magicians:");
show_magicians1(magicians);

console.log("\nGreat Magicians:");
show_magicians1(greatMagicians);
//Question 44
function make_sandwich(...items: string[]): void {
  console.log("Sandwich order summary:");
  for (let item of items) {
    console.log(`- ${item}`);
  }
  console.log();
}

make_sandwich("lettuce", "tomato", "turkey");
make_sandwich("ham", "cheese");
make_sandwich("peanut butter", "jelly", "banana", "honey");
//Question 45
function create_car(
  manufacturer: string,
  model: string,
  ...additionalInfo: [string, any][]
): object {
  let car: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };
  for (let [key, value] of additionalInfo) {
    car[key] = value;
  }

  return car;
}
let myCar = create_car("Toyota", "Corolla", ["color", "blue"], ["year", 2021]);

console.log(myCar);