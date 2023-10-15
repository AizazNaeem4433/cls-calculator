#!/usr/bin/env node
import inquirer from "inquirer";
async function calculator() {
    const answer = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter your first number: '
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter your second number: '
        },
        {
            type: 'list',
            name: 'operator',
            choices: ['Add', 'Subtract', 'Divide', 'Percentage', 'Multiply']
        },
    ]);
    let result;
    switch (answer.operator.toLowerCase()) { // Convert the input to lowercase for a case-insensitive check
        case 'add':
            result = answer.num1 + answer.num2;
            console.log("The result of Addition of two numbers is: " + result);
            break;
        case 'subtract':
            result = answer.num1 - answer.num2;
            console.log("The result of Subtraction of these two numbers is: " + result);
            break;
        case 'divide':
            result = answer.num1 / answer.num2;
            console.log("The result of Division of these two numbers is: " + result);
            break;
        case 'multiply':
            result = answer.num1 * answer.num2;
            console.log("The result of Multiplying these two numbers is: " + result);
            break;
        case 'percentage':
            result = (answer.num2 / answer.num1) * 100;
            console.log('The percentage is: ' + result);
            break;
        default:
            console.log('Invalid operator');
    }
}
calculator();
