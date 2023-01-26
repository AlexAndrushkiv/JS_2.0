
// ******************************** Sprint 03  (if,else,switch case)
//*Теория  */

// let a = 6;

//// == <= >= != оператори
// if (a > 9) {
// // true
//     console.log('yes')
// } else {
//     console.log('else');
// }

// const button = document.querySelector('.btn');
// const input = document.querySelector('.input-in');

// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) {
//         console.log('проходите');
//     }
//     else if (num > 60) {
//         console.log('тебе не сюда');
//     }
//     else {
//         console.log('стойте');
//     }

//     switch (num) {
//         case 15:
//             console.log('ещё год потерпи');
//             break;
//         case 16:
//             console.log('ура уже можно');
//             break;
//         default:
//             console.log('сработало');
//     }
// }

/-*Практика */
//****Task 1
//
//   При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.
//

// const button = document.querySelector('.btn');
// const input = document.querySelector('.input-in');

// button.onclick = () => {
//    let num = +input.value;

//    if (num == 4) console.log(true);
//    else console.log(false);
// }

//********* Task 2
//   Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
//

// const button = document.querySelector('.btn'); // кнопка - (.b-2)
// const out_2 = document.querySelector('.out-2'); // поле вівода ответа

// let a21 = 17;
// let a22 = 7;

// 1)
// button.onclick = function f2() {
//     if (a21 > a22) {
//         out_2.value = a21;
//     }
//     else {
//         out_2.value = a22;
//     }
// }

//  2)
// button.onclick = () => {
//     if (a21 > a22) {
//         out_2.value = a21;
//     }
//     else {
//         out_2.value = a22;
//     }
// }

// *******Task 3
// Даны 2 input - .i - 31 и.i - 32, оба - input[type = number].При нажатии кнопки.b - 3 срабатывает функция f3.Функция должна сравнить числа из input, вывести в.out - 3 большее число.

// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

// const input_1 = document.querySelector('.i-31');
// const input_2 = document.querySelector('.i-32');
// const out_3 = document.querySelector('.out-3'); // поле вівода ответа
// const button = document.querySelector('.btn');

// button.onclick = () => {
//     if (+input_1.value > input_2.value) {
//         out_3.value = input_1.value;
//     } else {
//         out_3.value = input_2.value;
//     }
//     input_1.value = '';
//     input_2.value = '';
// }

// button.onclick = function f3() {
//     if (+input_1.value > input_2.value) {
//         out_3.value = input_1.value;
//     } else {
//         out_3.value = input_2.value;
//     }
//     input_1.value = '';
//     input_2.value = '';
// }