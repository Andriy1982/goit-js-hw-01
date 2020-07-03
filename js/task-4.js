





// const numberInputeRef = document.querySelector('input[name="number"]');
// const droidInputeRef = document.querySelector('input[name="droid"]');
// console.log(numberInputeRef.value);

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function () {
//     console.log('Prev')
//     console.log(numberInputeRef.value)
//     console.log(droidInputeRef.value)

//     const number = Number(numberInputeRef.value);
//     const droid = Number(droidInputeRef.value);
// });

let credits = 23580;

const pricePerDroid = 3000;

const quantityDroid = prompt('Введите количество дроидов которые хотите купить!');

if (quantityDroid === null) {

    console.log('Отменено пользователем!');

} else {

    const totalPrice = pricePerDroid * quantityDroid;

    console.log(totalPrice);

    if (credits < totalPrice) {

        console.log('Недостаточно средств на счету!');

    } else {

        console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits -= totalPrice} кредитов.`);
    }
}