//**------------------ SPRINT 09 . Работаем с DOM */
//*-------------- Теория ------------

// const one = document.querySelector('.one');

// one.style.width = '150px';
// one.style.paddingBottom = '40px';

// // console.log(one.style);
// //Добавить класс
// one.classList.add('two', 'three');

//   //удалить класс
// one.classList.remove('three');

// const toggle = document.querySelector('.toggle');

// toggle.onclick = function () {
//     this.classList.toggle('three')
// }

// //? --- Атребут data --- добавил в html атребут privet параграфу

// console.log(one.getAttribute('data'));
// console.log(document.querySelectorAll('link')[1].getAttribute('href'));

//* добавить атребут

// one.setAttribute('data-num', 6);

// let gas = document.querySelectorAll('.gas');
// for (let i = 0; i < gas.length; i++) {
//     gas[i].onclick = function () {
//         let gallons = document.querySelector('.gallons').value;
//         let amount = this.getAttribute('data');
//         console.log(gallons * amount);
//     };
// }

// let a = document.createElement('div');
// a.innerHTML = 'Hello!!!';
// a.classList.add('one');

// document.querySelector('.test').appendChild(a);
// a.onclick = function (params) {
//     alert('Error!!!')
// }
// console.log(a);
//* -----------  ПРАКТИКА --------
// TASK 1
// По нажатию на кнопку.b - 1 функция присваивает блоку.out - 1 ширину 200px, высоту 90px.

// const button = document.createElement('button');
// const input = document.createElement('input');
// button.innerHTML = 'Push';

// document.querySelector('.b-1').onclick = function (params) {
//     let out = document.querySelector('.out-1');
//     out.style.width = '200px';
//     out.style.hegth = '90px';
//     out.style.border = '2px solid red'
// }

// TASK 2
// По нажатию на кнопку.b - 2 функция f2, которая присваивает блоку.out - 2 класс.bg - orange.

// document.querySelector('.b-2').onclick = function f2() {
//     let out2 = document.querySelector('.out-2');
//     out2.style.background = 'orange';
// }

// TASK 3
// По нажатию кнопки.b - 3 запускайте функцию f3, которая удаляет у блока.out - 3 класс.bg - orange.

// let out3 = document.querySelector('.out-3');
// document.querySelector('.b-3').onclick = function f3() {
//     out3.classList.remove('out-3');
// }









