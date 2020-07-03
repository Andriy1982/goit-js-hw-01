let country = prompt('Введите страну');
let price;

if (country === null ) {

    console.log('Отменено пользователем!');
} else {

country = country.toLowerCase();

console.log(country);

}

switch (country) {

    case 'китай':
        price = 100;
        // country = ucFirst(country);
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

        break;

        case 'чили':
            price = 250;
    
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    
            break;

            case 'австралия':
            price = 170;
    
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    
            break;

            case 'индия':
            price = 80;
    
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    
            break;

            case 'ямайка':
            price = 120;
    
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    
            break;




        default:
            alert('В вашей стране доставка не доступна');
}

