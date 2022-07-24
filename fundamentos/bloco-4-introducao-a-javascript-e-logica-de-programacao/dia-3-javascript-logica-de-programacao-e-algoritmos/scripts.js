// item 1. Fatorial de um número
 //let fatorial = 10;
//   let multiplier = 1;
//   for( let index = 0; fatorial > index; index+=1) {

//   multiplier = multiplier * (fatorial-index);
//   console.log(fatorial - index);
//   }
//   console.log(multiplier);

// // item2. Inversão
// let word = 'trybe';
// let inverted = '';
// for (let index = word.length - 1; index >= 0; index -= 1) {
//     inverted += word[index];
// }
// console.log(inverted);

// //item 3. 
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];
// for (index = 0; index < array.length; index += 1) {
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index]
//     }
//     if (array[index].length < menorPalavra.length) {
//         menorPalavra = array[index]
//     }
// }
// console.log("a maior palavra é:", maiorPalavra);
// console.log("a menor palavra é:", menorPalavra);

// item 4.

// let primeNumbers = [];

// for(let index = 2; index <= 50; index++)
// { let count = 0;

   // for(let index2 = 2; index2<= 50; index2++)
   // {
   // if(index % index2 === 0) count++;
   // }
   // if (count < 2) {
      // primeNumbers.push(index);}
// }
   // console.log(primeNumbers);

   // item bônus

   // let n =5;

   // for(let index = 0; index < n; index+=1){
      //  let asteriskLine = "";
      // for(let index2 = 0; index2 < n; index2+=1) {
      //   asteriskLine = asteriskLine + "*";
      // } 
      // console.log(asteriskLine);
   // }

// //  1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
// let num = 0;
//   for(let index = 1; index <=50;index+=1) {
//       num = num + index;
//   }
//   console.log("A soma de 1 a 50 é:",num);

//  2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

//   let num = 0;
//   let divisivel = 0;

//   for(let index = 2; index <= 150;index+=1) {
//       if(index % 3 === 0){
//           divisivel+= 1;
//       } 
//   }
//   if(divisivel = 50) {
//       console.log("sim, essa mensagem é secreta!")
//   }
//   console.log(divisivel)

//  3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova
//  let x = 10;
//  let y = 39;
//  let z = 98;

//  if(x < y && x < z) {
//      console.log("A pessoa", x, "é a pessoa mais nova");
//  } else if(y < x && y < z) {
//      console.log("A pessoa", y, "é a pessoa mais nova");
//  } else if(z < x && z < y) {
//      console.log("A pessoa", z, "é a pessoa mais nova");
//  } else {console.log("as pessoas tem a mesma idade")}
//