let quantity = +prompt('Введите количество примеров');
let min = +prompt('Введите мин дияпазон');
let max = +prompt('Введите мах дияпазон');
// let symbol = ''
// let num1 = randNum()
// let num2 = randNum()

 function randNum(min, max) {
   return Math.round(Math.random() * (max - min) + 1)
}

function randSymbol() {
    return Math.floor(Math.random() * 5);
}




for (let i = 0; i < quantity; i++) {
    let number1 = randNum(min, max),
        number2 = randNum(min, max),
        symbol = randSymbol(),
        example = 0
    if (symbol == 1) {
        symbol = '+'
        example = number1 + number2
    }
    else if (symbol == 2) {
        symbol = '-'
        example = number1 - number2
    }
    else if (symbol == 3) {
        symbol = '*'
        example = number1 * number2
    }
    else if (symbol == 4) {
        symbol = '/'
        example = number1 / number2
    }

    let prim = +prompt(number1 + symbol + number2);
    
    console.log(number1 + symbol + number2 + '=' + prim, example == prim ? 'Ваш ответ верный' : 'Ваш ответ неверный! Правильный ответ: ' + example );

}
alert('Откройте консоль для просмотра');


// let math1 = +prompt(`${num1} ${symbol} ${num2}`)

// if (symbol == '+') {
//     if ((num1 + num2) == math1) {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ верный `)
//     } else {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ неверный `)
//     }
// }
// else if (symbol == '-') {
//     if ((num1 + num2) == math1) {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ верный `)
//     } else {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ неверный `)
//     }
// }
// else if (symbol == '*') {
//     if ((num1 + num2) == math1) {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ верный `)
//     } else {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ неверный `)
//     }
// }
// else {
//     if ((num1 + num2) == math1) {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ верный `)
//     } else {
//         console.log(`${num1} ${symbol} ${num2} = ${math1}, Ваш ответ неверный `)
//     }
// }
