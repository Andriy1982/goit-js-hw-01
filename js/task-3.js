const ADMIN_PASSWORD = "qwerty";

let massage = prompt("Введите пароль");

if (massage === null) {
  massage = "Отменено пользователем!";
} else if (massage.toLowerCase() === ADMIN_PASSWORD) {
  massage = "Добро пожаловать";
} else {
  massage = "Доступ запрещен, неверный пароль!";
}

alert(massage);
