const {texto, arquivos} = require('./base');

// * (opcionais) 0 ou n vezes {0,n}
// +(obrigatorio) 1 ou n vezes
// ? (opcionais) 0 ou 1
// \ caractere de escape
//{m,M} minimo e Máximo
//{10,}no minimo 10
//{5,10} de 5 a 10
//{10}

/*console.log(texto);
const regExp1 = /jo+ão+/gi;
console.log(texto.match(regExp1));*/

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g

for(const arquivo of arquivos){
    const valido = arquivo.match(regExp2)
    
    //if(!valido) continue
   
    console.log(arquivo, valido);
};