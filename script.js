// function declaration

function square1(number1, number2) {
    const sum1 = (number1 * number1);
    const sum2 = (number2 * number2);
    const sum3 = (sum1 + sum2);
    const result = (sum3 * sum3);
    return result;
}

console.log(square1(2, 5));

// function expression

const square2 = function (number1, number2) {
    const sum1 = (number1 * number1);
    const sum2 = (number2 * number2);
    const sum3 = (sum1 + sum2);
    const result = (sum3 * sum3);
    return result;
};

console.log(square2(2, 5));

// arrow function

const square3 = (number1, number2) => {
    const sum1 = number1 * number1;
    const sum2 = number2 * number2;
    const sum3 = sum1 + sum2;
    const result = sum3 * sum3;
    return result;
};

console.log(square3(2, 5));
