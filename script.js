// console.log('error');
// // alert('error');
// let a = 6;
// let m = 'Hello';

// console.log(a);

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('.btn');

// button.onclick = () => {

//   let s = +inputIn.value;
//    console.log(s - 10);
//    inputIn.value = ''; //очистить поле input

// }

// if,else,switch 2.0

/**
 * При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.
 */

// const button = document.querySelector('.btn');
// const input = document.querySelector('.input');

// button.onclick = () => {
//    let num = +input.value;

//    if (num == 4) console.log(true);
//    else console.log(false);
// }

/**
 * Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
 */

// let a21 = 15;
// let a22 = 7;

// function f2() {
//    let out = document.querySelector('.out-1');

//    if (a21 < a22) {
//       out.innerHTML = 'Big';
//    } else {
//       out.innerHTML = 'smalle'
//    }
// }
// let button = document.querySelector('.btn').onclick = f2;

// Task 3
// Даны 2 input - .i - 31 и.i - 32, оба - input[type = number].При нажатии кнопки.b - 3 срабатывает функция f3.Функция должна сравнить числа из input, вывести в.out - 3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
/*
function f3() {

   let input1 = +document.querySelector(".i-31").value;
   let input2 = +document.querySelector(".i-32").value;

      if (input1 > input2) {
         out.innerHTML = input1;
      } else {
         out.innerHTML = input2;
      }
}

let out = document.querySelector('.out-1');
let button = document.querySelector('.btn').onclick = f3;
*/

