let country;
let price;

country = prompt("Введите страну");

if (country === null) {
  console.log("Отменено пользователем!");
} else if (country === "") {
}
{
  country = country.toLowerCase();
  country = country[0].toUpperCase() + country.slice(1);
}

switch (country) {
  case "Китай":
    price = 100;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case "Чили":
    price = 250;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case "Австралия":
    price = 170;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case "Индия":
    price = 80;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case "Ямайка":
    price = 120;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
