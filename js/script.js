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

// TODO: Сложная задача на вычисление количества страниц

// TODO: 1 - вариант
/*
function amountOfPages(summary) {
    let check = 0;
    let numbers = [];
    let strNumbers = '';

    for (let num = 0; num < summary; num++) {
        check += 1;
        numbers[num] = num + 1;
        for (let numToStr = 0; numToStr < numbers.length; numToStr++) {
            strNumbers += numbers[numToStr];
        }

        if (strNumbers.length >= summary) break;
        strNumbers = '';
    }

    return check;
}

console.log(amountOfPages(25)); // 17
*/

// TODO: 2 - вариант
/*
function amountOfPages(summary) {
    let numbers = [];
    let strNumbers = '';

    for (let num = 0; num < summary; num++) {
        numbers[num] = num + 1;
        strNumbers += numbers[num];

        if (strNumbers.length == summary) return num + 1;
    }
}
console.log(amountOfPages(25)); // 17
*/

// TODO: 3 - вариант
/*
function amountOfPages(summary) {
    let strNumbers = '';

    for (let num = 1; num <= summary; num++) {
        strNumbers += num;

        if (strNumbers.length === summary) return num;
    }
}

console.log(amountOfPages(25));
*/

// TODO: 4 - вариант из сайта
// function amountOfPages(summary) {
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//         result += i;
//         if (result.length === summary) {
//             n = i;
//             break;
//         }
//     }

//     return n;
// }
// console.log(amountOfPages(25));

// TODO: isPangram
// let string = 'The quick brown fox jumps over the lazy dog';

// TODO: isPangram #1
// function isPangram(string) {
//     let newStr = string.toLowerCase();
//     let arrLetter = [];

//     for (let letter of newStr) {
//         let found = false;
//         for (let letterInArr of arrLetter) {
//             if (letterInArr === letter) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found && letter != ' ') arrLetter.push(letter);
//     }
//     return arrLetter.length === 26;
// }
// console.log(isPangram(string));

// TODO: isPangram #2
// function isPangram(string) {
//     let newStr = string.toLowerCase();
//     let arrLetter = [];

//     for (let letter of newStr) {
//         if (!arrLetter.includes(letter) && letter != ' ')
//             arrLetter.push(letter);
//     }
//     return arrLetter.length === 26;
// }
// console.log(isPangram(string));

// TODO: isPangram #3
// function isPangram(string) {
//     string = string.toLowerCase();
//     string = new Set(string);
//     let newArray = [];
//     string.forEach((element) => {
//         if (element >= 'a') newArray.push(element);
//     });
//     newArray.sort();
//     return newArray.length === 26;
// }
// console.log(isPangram(string));

// TODO: deepCount(array)
// function deepCount(array) {
//     let count = array.length;
//     for (let number = 0; number < array.length; number++) {
//         if (Array.isArray(array[number])) count += deepCount(array[number]);
//     }
//     return count;
// }

// let array = [1, 2, [3, 4, [5]]];
// console.log(deepCount(array));

// TODO: deepCount(array)
// function deepCount2(arr) {
//     let count = 0;
//     arr.forEach((element) => {
//         count++;
//         if (Array.isArray(element)) count += deepCount(element);
//     });
//     return count;
// }
// console.log(deepCount2(array));
 