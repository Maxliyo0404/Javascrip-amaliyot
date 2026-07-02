// let a = 12;
// let b = 24;
// console.log(a+b);
let sum = [1, 4, 8, 9, 10, 5];
let result = sum.filter((element, index)=>{
 return index % 2 === 0;
})
console.log(result);
