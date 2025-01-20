async function addSymbol(data) {
  let arr = data.split("");
  console.log(arr);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(arr[i]);
    } else if (arr[i] % 2 === 0 && arr[i - 1] % 2 === 0 && arr[i] != 0) {
      newArr.push("-", arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  let str = newArr.join("");
  console.log(str);
}

addSymbol("025468");
// Вивід: 0 - 254 - 6 - 8;

// addSymbol("85963145");

// addSymbol("75214145");

// addSymbol("8534145");
// addSymbol("65421145");
// addSymbol("8544688");
// addSymbol("1446688515");
// addSymbol("96544225");

// №1 Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const string = "I study";

const arr = string.split(" ");

console.log(arr);

// №2
// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

let text = "Robin Singh";

let part = text.slice(0, 4);

console.log(part);

let textLength = text.length;

console.log(textLength);

getSymbol("Robin Singh", 4);

async function getSymbol(string, number) {
  const arr = string.split("");
  console.log(arr);
  for (let i = 0; i < number; i++) {
    arrReturnSymbol.push(arr[i]);
  }
  console.log(arrReturnSymbol);
}
