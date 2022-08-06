const {alfabeto} = require('./base');

// [abc] -> conjunto.
//[^]    -> Negação de algum caractere ou conjunto.
//[-] -> de alguma coisa até outra coisa, do menor para maior
//[min-maxQUALQUERCOISA].
//[^] Funciona como negação.

console.log(alfabeto);
console.log(alfabeto.match(/[0-5]/g));
console.log(alfabeto.match(/[a-v]/g));
console.dir(alfabeto.match(/[^a-zA-Z0-9]+/g)); //Negação
console.log(alfabeto.match(/[\u00a0-\u00BA]+/g)); //Unicode
console.dir(alfabeto.match(/[\w+]+/g)); //encontrar todos caracteres
console.dir(alfabeto.match(/[\W]+/g)); // negar todos caracteres
console.dir(alfabeto.match(/[\d+]+/g));//encontrar todos números
console.dir(alfabeto.match(/[\D-]+/g));//negar todos números
console.dir(alfabeto.match(/[\s+]+/g));
console.dir(alfabeto.match(/[\S]+/g));