/**
 * Задана переменная word со строковым значением.
 * Создайте переменную result с условием: если из
 * длины переменной word вычисляется квадратный корень
 * (без дробной части) - переменная result должна
 * содержать ответ 1, в противном случае - 0
 *
 * Пример:
 * let word = 'меню'
 * Результат: 1
 */

const word = prompt('Ваше слово')

const wordLength = word.length // длина слова
wordLength ** 0.5 // квадратный корень
Math.pow(wordLength, 0.5) // квадратный корень
Math.sqrt(wordLength) // квадратный корень
let result
if(Math.trunc(wordLength ** 0.5) === wordLength ** 0.5)
{
    result = 1
}
else
{
    result = 0
}
 // дописать логику

console.log(result)
