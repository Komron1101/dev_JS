'use strict';

// TODO: Recursion
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 3));

// TODO: Подсчёт среднего арифметического
// let students = {
//     js: [
//         {
//             name: 'John',
//             progress: 100,
//         },
//         {
//             name: 'Ivan',
//             progress: 60,
//         },
//     ],

//     html: {
//         basic: [
//             {
//                 name: 'Peter',
//                 progress: 20,
//             },
//             {
//                 name: 'Ann',
//                 progress: 18,
//             },
//         ],

//         pro: [
//             {
//                 name: 'Sam',
//                 progress: 10,
//             },
//         ],
//     },
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

//Подсчёт среднего арифметического с помощью рекурсии
// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);

// TODO: Factorial №1
// function factorial(fact) {
//     if (typeof (fact) !== 'number' || fact % 1 !== 0) return 'Ошибка ввода';
//     if (fact <= 0) return 1;
//     if (fact == 1) {
//         return fact;
//     } else {
//         return fact * factorial(fact - 1);
//     }
// }

// console.log(factorial('asdf'));

// TODO: Factorial №2
// function factorial(fact) {
//     if (typeof (fact) !== 'number' || fact % 1 !== 0) return 'Ошибка ввода';
//     if (fact <= 0) return 1;
//     return fact == 1 ? fact : fact * factorial(fact - 1);
// }

// console.log(factorial(5));

// TODO: Factorial №3
// function factorial(n) {
//     let isfloat = 0 === n - Math.floor(n);
//     if (isfloat && typeof n === 'number')
//         if (n <= 1) return 1;
//         else return n * factorial(n - 1);
//     else return 'Error';
// }

// console.log(factorial(5));

// TODO: Работа с мобильными устройствами
// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('start');
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });

//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log('end');
//     });
// });

// touches
// targetTouches
// changedTouches

// TODO: defer, async, добавление script через другой js файл
// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// loadScript('js/test.js');
// loadScript('js/some.js');
