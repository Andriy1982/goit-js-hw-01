let credits = 23580;
const pricePerDroid = 3000;

let quantityDroid = prompt("Введите количество дроидов которые хотите купить!");

if (quantityDroid === null) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN((quantityDroid = Number(quantityDroid)))) {
  alert("Вы ввели некоректные данные");
} else {
  const totalPrice = pricePerDroid * quantityDroid;

  if (credits < totalPrice) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${quantityDroid} дроидов, на счету осталось ${(credits -= totalPrice)} кредитов.`
    );
  }
}
