// const numbers = [3, 4, 5, 6, 7, 8, 9]
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

//another way to find by using map
// const numbers = [3, 4, 5, 6, 7, 8, 9];

// function square(element) {
//     return element * element;
// }
// numbers.map(function(element, index, array) {
//     console.log(element, index, array);
// })

//another way of shortcut map
// const numbers = [3, 4, 5, 6, 7, 8, 9];
// const result = numbers.map(x => x * x);

// console.log(result);

//map.find


const numbers = [3, 4, 5, 6, 7, 8, 9];
const isThere = numbers.find(x => x > 5);
console.log(isThere);