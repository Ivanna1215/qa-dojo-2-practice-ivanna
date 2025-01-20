console.log("This some action");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// index
// починається з нуля
const someArr = ["Ivanna", "Dima", "Anna", "Taras"];

console.log(typeof someArr);

console.log(someArr);

console.log("Length arr - ", someArr.length);

for (let i = 0; i < someArr.length; i++) {
  someArr[i] = someArr[i] + " LastName";
}

console.log(someArr);

const myThings = ["laptop", "mouse_1", "mouse_2", "phone", "book", "notebook", "kinderHero", "remote_Control", "scissors"];

for (let i = 0; i < myThings.length; i++) {
  console.log("index :", i, `This is ${myThings[i]}`);
}

console.log(myThings);

// як обєднувати масиви

const nonAlcoholDrinks = ["coffee", "hot chocolate", "orange fresh"];

const alcoholDrinks = ["vodka", "whiskey", "bourbon"];

const drinks = alcoholDrinks.concat(nonAlcoholDrinks, ["test"], ["something"]);

console.log(drinks);

// for (let [index, drink] of drinks.entries()) {
//   drinks[index] = drink + "  this is drink from childhood";
// }

console.log(drinks);

for (const letter of "Some great string") {
  console.log(letter);
}

const someString = "Some great string!";

drinks.forEach((value, index, array) => {
  console.log("value is", value);
  console.log("index is", index);
  console.log("this is arr", array);
});
// forEach нічого не повертає

drinks.forEach(async (value, index, array) => {
  console.log("last", array[index]);
});

drinks.push("Ice Tea");

console.log(drinks[drinks.length]);

console.log(drinks[drinks.length - 1]);
const lastDrink = drinks.pop();
drinks.pop();

console.log(drinks[drinks.length - 1]);

const isIncluded = drinks.includes("coffee");
console.log(isIncluded);

const arr = [];

drinks.forEach((value, index) => {
  arr.push(value.toLocaleLowerCase());
  // arr.push(value.toUpperCase());
});
