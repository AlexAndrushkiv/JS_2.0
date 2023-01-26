//********************* Sprint 04 (работа с формами: input, range, textarea, checkbax)*/

//***** Теория */
// document.querySelector('.batton').onclick = () => {
//     console.log(document.querySelector('#one').value);
// }
// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }
// document.querySelector('#btn-1').onclick = () => {
//     console.log(document.querySelector('#i2').value);
//     let myCheckBox = document.querySelector('#i2');
//     console.log(myCheckBox.checked);
//     if (myCheckBox.checked) {
//         console.log('нажат');
//     } else {
//         console.log(' не нажат');
//     }
// }

// document.querySelector('#btn-2').onclick = (event) => {
//     // event.preventDefault();//метод останавливает перезагрузку страници
//     // let text = document.querySelector('#two')
//     // console.log(text.value);
//     // text.value = 'one';
//     let form = document.querySelector('form');
//     console.log(form);
//     //Массив
//     console.log(form.elements.two.value);
//     console.log(form.elements.three.value);
// }
/-* Практика*/
/**Task 01
* При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.
*/
// № 1
// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.input-in').value = 1
// }
// № 2
// const button = document.querySelector('.btn');
// const inputIn = document.querySelector('.input-in');

// button.onclick = function f1() {
//     inputIn.value = 1;
// }

/**Task 02
 * При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.
 */
// const inputIn = document.querySelector('.input-in');
// const i2 = document.querySelector('.i-2');

// i2.onclick = function f2() {
//     inputIn.value = 2;
// }

/**Task 03
 * При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. Т.е. как видите, мы можем повеcить клик на любой элемент.
 */
// const inputIn = document.querySelector('.input-in');
// const p1 = document.querySelector('.p-1');

// p1.onclick = function f3() {
//     inputIn.value = 3;
// }
