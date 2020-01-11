"use strict";

var arr = [1, 3, 4, 5, 8, 9];
/*
Map percorre cada item do vetor e executa a ação necessária
*/

var newArr = arr.map(function (item, index) {
  console.log(index);
  return item + index;
});
console.log(newArr);
/*
Reduce é uma forma de consumir todo o vetor e transformar em uma unica
informação, geralmente um numero
*/

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
/*
Filter 
*/

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
/*
Find é utilizado para verificar se existe alguma informação dentro do array
*/

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
