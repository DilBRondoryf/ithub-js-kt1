/**
 * В программе объявлены две переменные — price и range.
 * Переменная range может принимать одно из трех строковых
 * значений — month/day/week. Переменная price хранит в себе
 * числовое значение. Необходимо написать программу, которая
 * формирует строку с использованием данных переменных по
 * следующему шаблону:
 * <значение price> Р в <эквивалент значения range на русском языке>
 *
 * Пример значений переменных:
 * let price = 10000
 * let range = "day"
 *
 * Пример результата:
 * 10000 Р в день
 *
 */

const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month,day,week)')

if(isNaN(price))
{
    throw new Error("некректнный ввод дохода") 
}
if(range !== 'month' && range !== 'day' && range !== 'week')
{
    throw new Error("некректнный ввод времини")
}
// TODO добавить проверки валидности данных

const formattedPrice = price.toLocaleString('ru', {
    style: "currency",
    currency: "RUB"
})

// TODO добавить преобразование range в переведенный аналог
let range_rus;

if(range === 'month')
{
    range_rus = 'месяц'
}
else if(range === 'day')
{
    range_rus = 'день'
}
else if(range_rus === 'week')
{
    range_rus ='неделя'
}

const result = `${formattedPrice} в ${range_rus}`
console.log(result)
