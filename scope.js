let bonus = 30;

function sum(first, second) {
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}
const output = sum(15, 50);
console.log(bonus);
console.log(output);