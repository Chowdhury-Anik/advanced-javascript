const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = nums.slice(2, 6);
const removed = nums.splice(2, 6, 20, 10, );
// console.log(part);
console.log(removed);
console.log(nums);
const together = nums.join("join");
console.log(together);



// summary
// array slice, array splice, array join