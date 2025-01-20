const human = {
  // властивість key
  // методи
  age: 34,
  height: 190,
  sex: "male",
  hair: "black",
  weight: "90",
  iq: "135",
};

const someIqKey = "iq";

const ivanna = {
  sex: "female",
  age: 34,
  height: 169,
  weight: 62,
  hair: "black",
  hobby: "run",
  isEmployed: true,
  goToRun: function () {
    console.log("I go to run");
  },
  spentMoney: function () {
    console.log("I like spent to money");
  },
  goToGym: function () {
    console.log("I go to the gym");
  },
};
// як звернутись до властивості за її ключем
ivanna.goToGym();
ivanna["goToGym"]();
ivanna.spentMoney();
ivanna.goToRun();

// console.log("height", ivanna.height);

// обєкти це сссилочні тип даних
// змінна це присвоєння за допомогою =

// console.log(ivanna);

// функція яка належить обєкту - метод
// функція нікому не належить

function getKey() {
  return ["Position", "Hobby"];
}

// як присвоїти значення

human.salary = "8000$";

human["position"] = "Junior QA Engineer";

human[getKey()[1]] = getKey()[0];
delete human.age;
delete human["salary"];
delete human.iq;
delete human[getKey()[0]];

console.log(human);

// як ітерувати об'єкти for ..in

const key = Symbol("new symbol");
const example = {};

example[key] = "some value";

console.log(example[key]);

for (const key in human) {
  //   human[key] = "this is value";
  console.log(human[key]);
  console.log(key);
}

// Object.key

const keys = Object.keys(human);

console.log("This arr ", keys);

// Object

const arrayKey = Object.entries(human);
console.log(arrayKey);

let newHuman = Object.create(Object);
newHuman = { ...human };

// успадкування /inheritance

const parentDog = {
  bark: function () {
    console.log("Гав гав");
  },
};

const childDog = Object.create(parentDog);

childDog.bark();

// ключове слово this дає можливість працювати з методами які знаходять в обєкті
// слова this  немає в arrow function
