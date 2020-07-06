let credits = 23580;
const pricePerDroid = 3000;
const totalPrice = 0;

let quantityDroid = prompt("Введите количество дроидов которые хотите купить!");

if (quantityDroid === null) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN(Number(quantityDroid))) {
  alert("Вы ввели некоректные данные");
} else if (credits < pricePerDroid * quantityDroid) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${quantityDroid} дроидов, на счету осталось ${(credits -= totalPrice)} кредитов.`
  );
}
