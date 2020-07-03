// let credits = 23580;
// const pricePerDroid = 3000;

// const numberOfDroid = prompt("Скільки дроїдів бажаєте придбати?");

// const dd = numberOfDroid * pricePerDroid;

// console.log(dd);
// console.log(typeof dd);

// console.log(numberOfDroid);
// console.log(typeof numberOfDroid);
// if (numberOfDroid === null) {
//   console.log("Скасовано користувачем!");
// } else if (numberOfDroid * pricePerDroid > credits) {
//   console.log("Недостатньо коштів на рахунку!");
// } else {
//   credits -= numberOfDroid * pricePerDroid;
//   console.log(`Ви купили ${numberOfDroid} дроїдів, на рахунку залишилося ${credits} кредитів.`);
// }

let total = 0;
let input;

do {
  input = prompt("Введите число!");

  console.log(input);

  let inputNumber = Number(input);
  console.log(input);
  console.log(typeof input);

  console.log(inputNumber);
  console.log(typeof inputNumber);

  if (Number.isNaN(inputNumber)) {
    alert("Вы ввели некоректные данные");
    continue;
  }

  total += Number(input);

  console.log(total);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
