//****************************/ -- Sprint 05 Цикли в JS --*/
//* Теория**//

//for
//while

// ? for (страрт, работаем пока верно, счётчик) {
//? }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let div = document.querySelectorAll('.one');
// console.log(div);

// document.querySelector('.bu').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }

// let out = '';
// for (let i = 0; i < 10; i++) {
//     if (i == 6) {
//         out += i + '';
//     }
// }

// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
//     div[i].onclick = two
// }

// function two(params) {
//     console.log('work !!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div')
// console.log(b);
// console.log(c);
// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
// }

/*// ********************  -- Практика  */
// TASK 1
// Кнопка.b - 1 запускает функцию t1.Функция должна выводить в.out - 1 строку вида:

// 1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// let g = document.querySelector('.input-in');
// document.querySelector('.btn').onclick = () => {
//     function t1(params) {
//         let out = '';
//         for (let i = 1; i < 17; i++) {
//             out += i + '_';
//             // document.querySelector('.input-in').value = out;
//             g.value = out;
//         }
//     }
//     t1();
// }

// TASK 2
// Кнопка.b - 2 запускает функцию t2.Функция должна выводить в.out - 2 строку вида:

// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_

// let g = document.querySelector('.input-in');
// document.querySelector('.btn').onclick = () => {
//     function t1(params) {
//         let out = '';
//         for (let i = 12; i < 40; i += 2) {
//             out += i + '_';
//             // document.querySelector('.input-in').value = out;
//             g.value = out;
//             console.log(out);
//         }
//     }
//     t1();
// }
// TASK 3
// Кнопка.b - 3 запускает функцию t3.Функция должна выводить в.out - 3 строку вида:

// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_

// let g = document.querySelector('.input-in');
// document.querySelector('.btn').onclick = () => {
//     function t1(params) {
//         let out = '';
//         for (let i = 25; i > 6; i--) {
//             out += i + '_';
//             // document.querySelector('.input-in').value = out;
//             g.value = out;
//             console.log(out);
//         }
//     }
//     t1();
// }

// let g = document.querySelector('.input-in');
// document.querySelector('.btn').onclick = () => {
//     function t1(params) {
//         let out = '';
//         for (let i = 25; i > 6; i--) {

//             if (i == 24 || i == 19) continue
//             out += i + '_';
//             g.value = out;
//             console.log(out);
//         }
//     }
//     t1();
// }