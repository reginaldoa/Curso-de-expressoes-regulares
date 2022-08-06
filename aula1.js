//g - global(encontra todas as ocorrências)
//i - insensitive 
// (()()) grupos
// ou

const {texto} = require('./base');

const regExp1 = /(teve )(5 filhos)/i;
const found = regExp1.exec(texto);

if(found){
console.log(found[0])
console.log(found[1]);
}