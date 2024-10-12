let gradus = 39;
if(gradus >= 37) {
    console.log('Лечитесь, в школу иди не нужно.');
} else {
    console.log('Идём в школу');
}

if(10) {
    console.log('Истина');
}

// Отлично, хорошо, удовлитворительно, плохо
// 5, 4, 3, 2
let grade = 3;
if(grade === 5) {
    console.log(`Отлично`);
}else if(grade === 4) {
    console.log(`Хорошо`);
}else if(grade === 3) {
    console.log(`Удовлитворительно`);
}else {
    console.log(`Плохо`);
}

// Тернарный оператор
let discount; // Если сумма заказов больше 5000, то в скидка 10%, иначе 30%
let price = 5000;
if(price >= 5000) {
    discount = 0.1;
}else {
    discount = 0.3;
}

discount = price >= 5000 ? 0.1 : 0.3;

console.log(`Стоимость заказа ${price - price * discount}`);
console.log(`Ваша скидка составила ${price * discount}`);



str = 'строка текста';
num1 = 1234;

phrase = `Пример текста в интерполяции ${str}`;
phrase = 'Пример текста в интерполяции';
phrase = "Пример текста в интерполяции";