// function declaration

function func(param1, param2) {
  const var1 = "asdffg";
  return var1;
}

//  function expression
// немає хостінгу
// може бути аномніною не має назви

const foo = function () {
  console.log("Hi");
};

// arrow function (стрілочні)
// немає хостінгу
// може бути аномніною не має назви
// короткий запис
// трохи по іншому працює з ретьорнами
const arrow = () => {};

// Методи об'єктів

// - властивості
// - методи - це функція всередині обєкта

const someObj = {
  arrow: (par1, par2, par3) => {
    return par1 + par2 + par3;
  },
};

const result = someObj.arrow(1, 2, 3);

console.log(1, 2, 3);
