const {texto} = require('./base');
const regExp1 = /joão|maria/gi;

//console.log(texto)
//console.log(texto.match(regExp1));
//console.log(texto.replace(/(joão|maria)/gi, function(input){
//    return input.toUpperCase();
//}));



console.log(texto.match(regExp1))
console.log(texto)