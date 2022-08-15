'use strict';
// // УРОК 1

// // Задание №1

// /*
// 1. Просим пользователя ввести температуру по Цельсию
// 2. Записываем её в переменную Тс
// 3. Расчитываем температуру по Фаренгейту по формуле (в формулу подставялем переменную, в которой записано полученное от пользователя число)
// 4. Результат расчётов записываем в переменную Tf
// 5. Выводим результат вычислений на экран в Алерте
// */
// let Tc = prompt('Введите температут по Цельсию');
// let Tf = (9 / 5) * Tc + 32;
// alert(Tf);

// // Задание №2

// /*
// 1. Создаём переменную name
// 2. Присваиваем ей значение "Василий"
// 3. Создаём переменную admin
// 4. Присвиваем переменной admin значение переменной name (я не понял, почему переменная name зачёркнута)
// 5. Выводим значение переменной admin в консоли (Василий)
// */
// let name = 'Василий';
// let admin = name;
// console.log(admin);

// // Задание №3

// /*
// 1. К числу 10 мы прибавляем ещё одно число 10
// 2. Получаем 20
// 3. Замем к числу 20 мы прикеиваем строку 10
// 4. Получаем результат 2010
// */
// let result = 10 + 10 + "10";
// console.log(result);

// /*
// 1. К числу 10 мы приклеиваем строку 10
// 2. Получаем 1010
// 3. К приклееннмоу числу и стороке приклеиваем ещё одно число 10
// 4. Получаем результат 101010
// */
// result = 10 + "10" + 10;
// console.log(result);

// /*
// 1. К числу 10 мы прибавляем ещё одно число 10
// 2. Получаем 20
// 3. Замем у последненго числа 10 мы используем унарный плюс, чтобы преобразовать строку в число
// 4. Получаем результат 30
// */
// result = 10 + 10 + +"10";
// console.log(result);

// /*
// 1. Число 10 мы делим на пустоту с отрицательным знаком
// 2. При делении на пустоту мы получаем бесконечноть с отрицательным знаком
// 3. В результате выводится -Infinity
// */
// result = 10 / -"";
// console.log(result);

// /*
// Тут я не очень понял, почему в результате выводится NaN
// Мне казалось что перед 2,5 стоит такой же унарный плюс как и в третьей задачке
// Если всё же это не унарный плюс, (тогда что это?) то:
// 1. Мы делим число на строку
// 2. Число на строку разделить нельзя
// 3. В результате получаем NaN
// */
// result = 10 / +"2,5";
// console.log(result);

// -----------------------------------------------------------------------------------------------------------------

// УРОК 2

// Задание №1
/*
В данном кейсе мы приравниваем c к a. Изначально a равно 1 и в момент приравнивания прибавляем к a 1 и a равняется 2.
// // Увеличение на 1 идёт сразу, т.к. ++ стоит спереди
let a = 1,
    b = 1,
    c,
    d;
c = ++a;
alert(c); //ответ: 2

// // В этом кейсе мы также прибавляем к переменной 1, но уже не моментально, т.к. ++ стоят сзади
// // d равен 1, т.к. на момент присваивания d к b, b равна 1
d = b++;
alert(d); //ответ: 1


// // В рамках этого кейса мы ранее уже прибавляли 2 к a и теперь ещё раз прибавляем к a 1 и получается, что a = 3
// // и после этого мы в с складываем 2 + 3 и получаем 5
c = 2 + ++a;
alert(c); //ответ: 5


// // В рамках этого кейсе мы ранее уже прибавляли 1 к b и теперь b равна 2
// // и теперь к 2 мы прибаляем 2 которые в b
d = 2 + b++;
alert(d); //ответ: 4


// // изначаль a была равна 1. Замем мы дважды прибавили к a 1. Теперь a равна 3
alert(a); //3

// // изначаль b была равна 1. Замем мы дважды прибавили к b 1. Теперь b равна 3
alert(b); //3


// // Задание №2

// // Так как ранее мы уже использовали переменную a, я заменил её на y
// // Объявляем переменную y и присваиваем ей знайчение 2
// // Объявляем переменную x
// // В переменную x записываем выражение при котором к 1 мы прибавляем 4 и получаем 5
// // В скобках происходит умножение переменной y (которая равна 2) на 2 и одновременно эту же переменную мы умножаем на 2
// // в результате y = 4; x = 5

let y = 2;
let x = 1 + (y *= 2);
console.log(y, x);
*/

// Задание №3
/*
let num1 = parseInt(prompt('Введите первое число'));
let num2 = parseInt(prompt('Введите второе число'));
let result = 0;
if (num1 >= 0 && num2 >= 0) {
    result = num1 - num2;
    alert('Разница чисел составляет: ' + result);
}

if (num1 < 0 && num2 < 0) {
    result = num1 * num2;
    alert('Произведение чисел составляет: ' + result);
}

if ((num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0)) {
    result = num1 + num2;
    alert('Сумма чисел составляет: ' + result);
}
*/

// Задание №4

/*
// Сложение
function getSum(q, w) {
    let resultSum = q + w;
    return resultSum;
}

getSum(2, 8);

// Вычитание
function getSub(q, w) {
    let resultSub = q - w;
    return resultSub;
}

getSub(8, 2);

// Умножение
function getMult(q, w) {
    let resultMult = q * w;
    return resultMult;
}

getMult(4, 4);

// Деление
function getSplit(q, w) {
    let resultSplit = q / w;
    return resultSplit;
}

getSplit(10, 2);
*/

// Задание №5
/*
function mathOperation(q, w, operation) {
    let calculat;
    switch (operation) {
        case "sum":
            calculat = getSum(q, w);
            break;
        case "sub":
            calculat = getSub(q, w);
            break;
        case "mult":
            calculat = getMult(q, w);
            break;
        case "split":
            calculat = getSplit(q, w);
            break;
    }
    return calculat;
}

let calculation = mathOperation(2, 8, 'sum');
alert(calculation);

calculation = mathOperation(8, 2, 'sub');
alert(calculation);

calculation = mathOperation(4, 4, 'mult');
alert(calculation);

calculation = mathOperation(10, 5, 'split');
alert(calculation);
*/

// -------------------------------------------------------------------------------

// Урок 3

// Задание № 1

for (let count = 0; count <= 10; count++) {
    if (count == 0) {
        console.log(count + ' это ноль');
    }
    else if (count % 2 == 0) {
        console.log(count + ' это чётное число');
    }
    else {
        console.log(count + ' это не чётное число');
    }
}

// Задание № 2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// Задание № 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(sales => { sales.price = sales.price - sales.price * 0.15 },
    console.log(products));


// Задание № 4

const item = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

let itemPhotos = item.filter(item => "photos" in item && item.photos.length > 0);
console.log(itemPhotos);

let itemPrice = item.sort(function (price_1, price_2) {
    return price_1.price - price_2.price;
});
console.log(itemPrice);



// Задание № 5

for (let i = 0; i <= 9; console.log(i++)) { }


// Задание № 6

for (let i = 'x'; i.length <= 20; i += 'x') {
    console.log(i);
}