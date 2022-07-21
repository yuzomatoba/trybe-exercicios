let numbers = [1,3,5,25,71,9,103,7,35,27,34,32,67,98,34,39,55,89,12,65,76,90,25,18,47];
let sum = 0;
let average;
let maiorNumero = 0;
let comparison;
let oddNumber =0;
let div = [];
//for(let index = 0; index < numbers.length; index+=1) {
//sum = sum + numbers[index] 
//}
//average = sum/numbers.length;
//if( average > 20) {
  //  console.log('valor maior que 20')
//} else if (average <= 20) {
   // console.log('valor menor ou igual a 20')
//} 
// for(let index = 0; index < numbers.length-1; index+=1) {
//     if(numbers[index] > numbers[index+1]) {
//         comparison = numbers[index];
//     } else (comparison = numbers[index+1])
//     if(maiorNumero > comparison) {
//         maiorNumero = maiorNumero;
//     } else (maiorNumero = comparison)
// }

for(index = 0; index < numbers.length; index+=1) {
   if (numbers[index] % 2 !== 0) {
    oddNumber = oddNumber +1;
   }
}
if(oddNumber === 0){
console.log('nenhum valor ímpar encontrado')
} else (console.log(oddNumber));

// console.log(maiorNumero);

// for(index= 0; index < numbers.length;index+=1) {
    // div = numbers[index]/2;
// console.log(div);
// }