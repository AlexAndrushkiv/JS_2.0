console.log('error');
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

//* --Lesson 17 ---/ Методы массивов  MAP, Filter (part 1) /---
//*предназначена для обрабртки каждого элемента массива(умножить,делить)
//*и после возвратить результат

// let a = [4, 5, 7, 200, 1, 0, -5];

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

// перемножить все элемента массива
// let i = a.map(function (item, index) {
//    return item * 5;

// })
// console.log(i);

//-----method Filter
//-----перебор елементов массива которые прошли определённое условие и работа с этими элементами
//
// let c = a.filter((item, index) => {
// if(item % 2 == 0) return true;
// if(item > 0) return true;
// if(item < 0) return true;
// })
// console.log(c);

//*--Lesson 18 --/ Методы массивов -- Split, Join, ForEach(part 2) /--
//---Method Split(разбивает массив 'String' на массив строк путём разделения указанной подстрокой(прим. ','))
// let a = 'hello,attantion,buu';
// console.log(a.split(','));

//---Method join(объед. массива  в строку)
// let b = [5, 8, 3];

// console.log(b);
// console.log(b.join('-'));//separator

//--Method ForIech (метод, который применяет функцию один раз к указанному элементу)

// b.forEach(function (elem, index) {
//    console.log(index);
//    console.log(elem = elem * 2);
//    console.log('--');
// })
// console.log(b);

//* -- Lesson 19 --/ События мышы /---------------------------
// document.querySelector('.two').onclick = (event) => {
//    // console.log(event);
//    console.log('click');
// }

// document.querySelector('.two').ondblclick = () => {
//    console.log('dblclick');
// }

// document.querySelector('.two').oncontextmenu = () => {
//    console.log('right click');
// }

// let h = 60;
// document.querySelector('.two').onmousemove = () => {
//    document.querySelector('.two').style.height = h + 'px';
//    h++;
//    console.log('true');
// }

/* block-------
document.querySelector('.two').onmouseenter = () => {
   document.querySelector('.two').style.background = 'black';
   console.log('1');
}

document.querySelector('.two').onmouseleave = () => {
   document.querySelector('.two').style.background = 'green';
   console.log('2');
}
document.querySelector('.two').onmousedown = () => {
   document.querySelector('.two').style.background = 'orange';
   console.log('3');
}
document.querySelector('.two').onmouseup = () => {
   document.querySelector('.two').style.background = 'blue';
   console.log('4');
}
*/

//* -- Lesson 20 --/  События клавиатуры в JS /----------------------
//при изменении в  поле инпута отрабатывает событие onimput
// document.querySelector('.i-1').oninput = (event) => {
//    console.log(1);
//    console.log(event);
// }

// document.querySelector('.i-1').onkeypress = (event) => {
//    console.log('keyPress');
//    console.log('charCode: ' + event.charCode);
//    console.log('code: ' + event.code);
//    console.log('key: ' + event.key);
//    console.log('keyCode: ' + event.keyCode);

// }

// document.querySelector('.i-1').onkeydown = (event) => {
//    console.log('keyDown');
//    console.log('charCode: ' + event.charCode);
//    console.log('code: ' + event.code);
//    console.log('key: ' + event.key);
//    console.log('keyCode: ' + event.keyCode);

// }

//*-- Lesson 21 --/ Краткий обзор Touch событий /-----------
// document.querySelector('.block-1').addEventListener('touchstart', myTouch);

// function myTouch(event) {
//    console.log(event);
//    console.log('touch');
//    document.querySelector('.out-1').innerHTML += 'work';
// }
//! Разобрал весь урок, но задания перенёс не все/--дополнить при учёбе

//* --Lesson 22 --/ Обрабатываем ошибки с помощью Try Catch /----
// let a = 13;
// a *= 2;
// //код помещённый в трай(вызывающий ошибку пропускается) и далее вся программа продолжает работу(так можно отловить больше багов)
// try {
//    document.querySelector('.test').innerHTML = a;
// } catch {
//    // alert();
//    console.log('attantion');

// }
// //блок выполнится в любом случае
// finally {
//    console.log('');
// }

// t1();

// function t1() {
//    console.log('Buu!!!');
// }

//* -- Lesson 23 --/ Local-Storage. Сохраняем всё /--------------
//Хранилище данных которое присутствует в браузере

// localStorage.setItem('data', 7);
// console.log(localStorage.getItem('data'));

// const a = [4, 5, 6, 7];

// localStorage.setItem('arr', JSON.stringify(a));

// let b = localStorage.getItem('arr');
// b = JSON.parse(b);
// console.log(b);
// console.log(b[2]);
// console.log(typeof b);

//работа с ассоциативным массивом
// const c = {
//    hello: 5,
//    k: 2,
//    4: 'Hi'
// };
// localStorage.setItem('arr', JSON.stringify(c));
// let d = localStorage.getItem('arr');
// d = JSON.parse(d);
// console.log(d);
// console.log(typeof d);

//*-- Lesson 24 --/ Работа с POST && GET запросами /------------------
//Выполнять задание после преобретения курса

//* -- Lesson 25 ---/ AJAX Асинхронный JS /----------------
//метод отправки запроса на сервер в фоновом режиме и работы с сервером

//обьект XMLHttpRequest (создание запроса)
// let xhttp = new XMLHttpRequest();
// let a = 0;

// //при изменении состояния запроса запустить функцию
// xhttp.onreadystatechange = function () {
//    if (this.readyState == 4 && this.status == 200) {
//       myFunction(this.responseText)
//    }
// }
//метод отправки запроса(-способ отправки запроса, -адресс отправки запроса
//третий параматр не обязательный(true/false)- говорит как будет отправлен запрос
//синхронно или асинхронно(читать документацию по XMLHttpRequest() ))

// xhttp.open("GET", "http://getpost.itgid.info/index2.php", true);
// xhttp.send();

// //сама функция
// function myFunction(data) {
//    console.log(data);
// }

// let xhttp2 = new XMLHttpRequest();
// //при изменении состояния запроса запустить функцию
// xhttp2.onreadystatechange = function () {
//    if (this.readyState == 4 && this.status == 200) {
//       myFunction2(this.responseText)
//    }
// }

// xhttp2.open("POST", "http://getpost.itgid.info/index2.php", true);

// //конфигурация заголовков запроса
// xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// //параметры передачи запроса
// xhttp2.send();

// //сама функция
// function myFunction2(data) {
//    a = data;
//    console.log(data);
// }

//* -- Lesson 26 --/ Учим FETCH на практике /--------------------------
//1й параметр(адресс запроса) 2й (обработчик результата ответа)
//fetch возвращает promise

fetch("http://getpost.itgid.info/index2.php");
//выполняется после обработки запроса
// .then(data => {
//    console.log(data);
//    // data.text().then(data => {
//    //    console.log(data);
//    // })
//    return data.text();
// })
// .then(data => {
//    console.log(data);
// });
//из учебника MDN mazila
/*
fetch("http://getpost.itgid.info/index2.php", {
   method: 'POST', // GET, POST, PUT, DELETE, etc.
   mode: 'cors', // no-cors, *cors, same-origin
   cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
   credentials: 'same-origin', // include, *same-origin, omit
   headers: {
      //'Content-Type': 'application/json'
       'Content-Type': 'application/x-www-form-urlencoded',
   },
   redirect: 'follow', // manual, *follow, error
   referrerPolicy: 'no-referrer', // no-referrer, *client
   body: JSON.stringify(), // body data type must match "Content-Type" header
})
.then(response => response.text()) // parses JSON response into native JavaScript objects
.then(response => {
   console.log(response);
}); // parses JSON response into native JavaScript objects
*/

//* ---- Lesson 27 --/ Работаем с промисами (Promise) /-----------------
/*
let a = new Promise((resolve, reject) => {
   fetch("http://getpost.itgid.info/index2.php")
      .then((data) => {
         resolve(data.text());
      })
});

let b = new Promise((resolve, reject) => {
   fetch("http://getpost.itgid.info/index2.php")
      .then((data) => {
         resolve(data.text());
      })
});

Promise.all([a, b]).then(value => {
   console.log(value);
   console.log(value[0]);
   console.log(value[1]);
})
*/

//* -- Lesson 28 --/ ООП в ES6 /------------------------------
//Изучение понятия класс в ES6(MDN)
//Разобрать тему и код с урока после изучения материалов

//* -- Lesson 29 --/ Замыкания /------------------------------
/*
//замыкание это счётчик для переменной, в области видимости функции
function t1() {
   let a = 0;//переменная в области видимости функции
   return function () {
      a += 1;
      return a;
   }
}

let b = t1();
let c = t1();

console.log(b);
console.log(b());//1
a = 44;//функция не видит эти переменную
console.log(b());//2
console.log(c());//1
console.log(c());//2
console.log(b());//3
console.log(c());//3
*/

//* -- Lesson 30 --/ Рекурсия /------------------------------
