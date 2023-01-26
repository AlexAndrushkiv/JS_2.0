// ?  SPRINT 07 . Функции и все о них
//***************    Теория */
//*Именованние функции
// let f1 = document.querySelector('.t-1');
// function one() {
//     console.log('Buu!!!');
// }
// one();
// f1.onclick = one;

// function two(a, b) {
//     console.log('Work');
//     return 54;
// }
// two();
// console.log(1 + two());

// let a = 5;
// let b = 6;

// function multy() {
// console.log(a * b);
//     return a * b
// }
// multy();

// let c1 = multy();
// let c2 = 9 * multy();
// console.log(c1, c2);

// function multy2(x, y) {
//     return x * y
// }
// console.log(multy2(4, 5));
// console.log(multy2(20, 5));
// console.log(multy2(a, 5));

//** Анонимние функции (способ организации кода в блок)*/

// f1.onclick = function () {
//     console.log('Error!!!');
// }
// f1.onclick = () => {
//     console.log('Error!!!');
// }
// f1.onclick = () => console.log('Error!!!');

// document.querySelector('.t-1').onclick = function () {
//     console.log('Error !');
// }
// document.querySelector('.t-2').onclick = () => {
//     console.log('Error ???????');
// }


//? **************   Практика
// TASKS
// TASK 1
// Напишите функцию t1, которая при нажатии кнопки выводит в.out - 1 переменную a1.
// document.querySelector('.b-1').onclick = function t1() {
//     let a1 = 10;
//     document.querySelector('.out-1').value = a1;
// }
// TASK 2
// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок.Давайте сделаем так, чтобы функция, была более гибкой.Пусть теперь функция t2 возвращает(return) переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками(вызов функции) можно встраивать в выражения.Обратите внимание, как изменяется вызов функции теперь.

// let a2 = 20;
// function t2() {
//     document.querySelector('.out-2').value = a2;
//     return a2;
// }
// console.log(t2());

// TASK 3 *******************----------  НЕ РАЗОБРАЛСЯ ЧТО ТРЕБОВАЛОСЬ ТОЧНО В ЗАДАНИИ------------------------------
// Наша предыдущая функция, сильно все еще зависима от внешних переменных.Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 аргумента и возвращает(return) их произведение.Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве аргументов a, b.Протестируем функцию на двух примерах, с помощью кнопок .b-3-1 и .b-3-2.

// let b1 = document.querySelector('.b-3-1');
// let b2 = document.querySelector('.b-3-2');


// document.querySelector('.out-3').value =

// function t3(a, b) {
//     return a * b;
// }

// b1.onclick = t3(5, 5);
// b1.onclick = t3(7, 5);
// console.log(t3(8, 9));

// document.querySelector('.b-3-1').onclick = function t3(a, b) {
//     return a * b;
// }
// document.querySelector('.out-3').value = ;
// t3(3, 4)
