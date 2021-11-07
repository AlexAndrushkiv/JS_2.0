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

//**/ if,else,switch case-- lesson 3 ---------------------------------

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

//**циклы for, while, do -- lesson 5 -------------------------------

// for (let i = 0; i < 4; i++) {
//    console.log(i);
// }
// for (let i = 0; i < 7; i++) {
//    if(i == 5) {
//       break;
//    }
//    console.log(i);
// }

// let inputIn = document.querySelectorAll('.input-in');
// console.log(inputIn);

// for (let i = 0; i < inputIn.length; i++) {
//    console.log(inputIn[i]);
//    inputIn[i].style.background = 'red'
//    inputIn[i].onclick = two;
// }

// function two(params) {
//    console.log('attantion');
// }

//**вложенные циклы 2.0 -- lesson 6 --------------------------------

// let div = document.querySelector('.out');
// console.log(div);

// for (let i = 0; i < 5; i++ ) {
//    console.log(i);
//    for (let k = 0; k < 10; k++) {
//       div.innerHTML += '   *';
//    }
//    div.innerHTML += '<br>';
// }

//таблица умножения
/*
for (let i = 0; i < 10; i++) {
   // div.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
   for (let k = 1; k < 10; k++) {
      div.innerHTML += `${i} * ${k} = ${k * i}<br>`;
   }
   div.innerHTML += '<hr>'
 }
*/

//**функции  -- lesson 7 -----------------------------------------

// let b = 1;

// function mul(a = b, b) {
//   console.log(a, b);
// }
// mul(undefined, 2);

//**работа с DOM ---  lesson 9 ----------------------------------

// const one = document.querySelector(".one");
// const btn = document.querySelector(".btn");

// console.log(one);
// one.style.width = "150px";
// one.style.paddingBottom = "40px";

// one.classList.add("two", "three");
// // one.classList.add('three');

// one.classList.remove("three");

// btn.onclick = function () {
//   this.classList.toggle("three");
// };

//**атрибуты-****-------- использовать  ( data ) атребут

//обращение к ссылке через атребут data------------------------
// console.log(one.getAttribute("data"));

//обращение к ссылке через атребут href------------------------
// console.log(document.querySelector('link').getAttribute('href'));

//обращение ко всем ссылкам index.html через атребут href- первый элемент массива-----------------------
// console.log(document.querySelectorAll('link')[1].getAttribute('href'));

/*-**************************************************
let gas = document.querySelectorAll('.gas')

 for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
       //получить значение input
       let gallons = document.querySelector('.gallons').value;
      //  получить все кнопки обратившись к атребуту data
       let amount = this.getAttribute('data');
       console.log(gallons * amount);
    }
 }
 *********************************************************/
//создание элемента---------------------------
// let div = document.createElement('div');
// div.innerHTML = 'Attantion';
// div.classList.add('two');

// document.querySelector('.one').appendChild(div);

//**  Массивы  в JS */---------------- lesson 10 ---------
// let a = [1, 2, 3, 4];
// console.log(a);

// let t = a[0];//1
// a[0] = a[a.length - 1];//4
// a[a.length - 1] = t;
// console.log(a);
// console.log(a[777]);

//Example -- 1 --
// for (let i = 0; i < a.length; i++) {
//    document.querySelector('.one').innerHTML += a[i] + '  ';
// }

//Example -- 2 --
// let out = '';
// for (let i = 0; i < a.length; i++) {
//    out += a[i] + '- -';
// }
// document.querySelector('.one').innerHTML = out;

//Example -- 3 -- even numbers only ----
// let out = '';
// for (let i = 0; i < a.length; i++) {
//    if (a[i] % 2 == 0) {
//       out += a[i] + '- -';
//    }
// }
// document.querySelector('.one').innerHTML = out;

//Example -- 4 -- the maximum value of the array ----
// let d = [2, 3, 5, 7, 22, 33, 53, 41];
// let max = d[0];
// for (let i = 0; i < d.length; i++) {
//    if (d[i] > max) {
//       max = d[i];
//    }
// }
// console.log(`max: ${max}`);

//Example -- 5 -- the minimum value of the array ----
// let d = [2, 3, 5, 7, 22, 33, 53, 41];
// let min = d[0];
// for (let i = 0; i < d.length; i++) {
//    if (d[i] < min) {
//       min = d[i];
//    }
// }
// console.log(`min: ${min}`);

//Example -- 6 -- the sum value of the array ----
// let d = [2, 3, 5, 7, 22, 33, 53, 41];
// let sum = 0;
// for (let i = 0; i < d.length; i++) {
//    sum += d[i];
// }
// console.log(`sum: ${sum}`);

//**Methods -- pop, push, splise -----lesson 11 ----/
//--------push
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(a.length);
// console.log(a.push(12, 33, 49));//add elements to arrey

//------------pop
//удалил последний елемент массива и вывел в консоль(без аргумента)
// console.log(b.pop());
// console.log(b.pop());
// console.log(b);

// console.log(a);
//--удалил елемент внутри массива----
// a.splice(3, 4, 'hi');//удалить 3 элемента подряд начиная с 4 го, а на место их поставить аргумент 'hi'
// console.log(a);

//*Двумерные массивы -- two-dimensional arrays -- Lesson 12 --*/
/*
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
*/
// for (let i = 0; i < b.length; i++) {
//    console.log(b[i]);
// }

//----------------------
// for (let i = 0; i < b.length; i++) {
//    //получить одномерный массив
//    let c = b[i];
//    //перебрать одномерный массив в цикле
//    for (let k = 0; k < c.length; k++) {
//       console.log(c[k]);
//    }
// }

// перебор массива частями-----

// for (let i = 0; i < b.length; i++) {
//    //получить одномерный массив
//    let c = b[i];
//    //перебрать одномерный массив в цикле
//    for (let k = c.length - 1; k >= 0; k--) {
//       console.log(c[k]);
//    }
// }

//-перебор массива b последовательно-------

// for (let i = 0; i < b.length; i++) {
//    for (let k = 0; k < b[i].length; k++) {
//       console.log(b[i][k]);
//    }
// }

//--работа массив + DOM

// let out = '';

//  for (let i = 0; i < b.length; i++) {
//    for (let k = 0; k < b[i].length; k++) {
//       console.log(b[i][k]);
//       out += b[i][k] + '__';
//    }
//    out += '<br>'
// }
// document.querySelector('.out').innerHTML = out;

//как двигать цифру 1 по массиву вправо
// let d = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// document.querySelector('.out').innerHTML = d;

// let k = 0;
// document.querySelector('.btn').onclick = () => {
//    if (k + 1 < 12) {
//       d[k] = 0;
//       d[k + 1] = 1;
//       k++;
//    }
//    document.querySelector('.out').innerHTML = d;
// }

//**- ассоциотивный массив - Lesson 13 - associative array */

// const a = {
//    'a' : 5,
//    'b' : 'Hello',
//    'z2' : 2000,
//    'villa de' : 3040,
//    'y42' : 'hi'

// };
// console.log(a);
// console.log(a.z2);

// let k = 'y42';
// let c = 'villa de';
// console.log(a[k]);
// console.log(a[c]);

// let out = '';
// for ( let key in a) {
//    out += ` ${key} --- ${a[key]} <br>`
// }
// document.querySelector('.out').innerHTML = out

//?Практика по массивам - Lesson 14 - прорабртал визуально

//* -------------------- SET в JS -- Lesson 15 -----------------*/

//*new Set
// let a = new Set();
// console.log(a);

// a.add(1);
// a.add(2);
// a.add("Attantion");
// a.add("1"); // + и проверка на ===

// a.clear();
// a.delete('Attantion');

// console.log(a);
// console.log(a[0]);//! -- NO
// console.log(a.length);//! -- NO

// console.log(a.size);//* --Yes--(amount of elements)

//проверяем наличие элемента
// console.log(a.has(2));//true
// console.log(a.has('2'));//false

//способы перебора

// for (let item of a) {
//   console.log(item);
// }

//Получить все уникальные элементы

// let arr = [1, 2, 3, 4, 6, "hi", "attantion", 3, 2, 1];

// let b = new Set(arr);
// console.log(b);

//преобразование в массив
// let bArr = Array.from(b);
// console.log(bArr);

//* перебор массивов for, for of, for in -- Lesson 16 ------------------

// let arr = [2, 3, 5, 6];
// let allP = document.getElementsByTagName('p');
// let qP = document.querySelectorAll('p');

//перебор ключей массива
// for (let key in arr) {
//    console.log(key);
//    console.log(arr[key]);
// }

//перебор элементов массива (1)
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);

// }

//перебор элементов массива (2)
// for (let item in arr) {
//    console.log(item);
//    console.log(arr[item]);

// }
// перебор элемента DOM
// for (let item of qP) {
//    console.log(item);

// }

//* --Lesson 17 --- Методы массивов -- MAP, Filter (part 1)
//*предназначена для обрабртки каждого элемента массива(умножить,делить)
//*и после возвратить результат

let a = [4, 5, 7, 200, 1, 0, -5];

//вывод элементов масива(item)
// let b = a.map(function(item, index) {
//    console.log(item);
//    return item;

// })
// console.log(b);
//вывод индексов элементов масива(index)
// let i = a.map(function (item, index) {
//    console.log(index);
//    return index;

// })
// console.log(i);

//перемножить все элемента массива
// let i = a.map(function (item, index) {
//    return item * 5;

// })
// console.log(i);

//-----method Filter
//-----перебор елементов массива которые прошли определённое условие и работа с этими элементами
//
