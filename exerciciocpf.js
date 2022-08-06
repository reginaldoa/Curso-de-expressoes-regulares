// * (opcionais) 0 ou n vezes {0,n}
// +(obrigatorio) 1 ou n vezes
// ? (opcionais) 0 ou 1
// \ caractere de escape
//{m,M} minimo e Máximo
//{10,}no minimo 10
//{5,10} de 5 a 10
//{10}
// [abc] -> conjunto.
//[^]    -> Negação de algum caractere ou conjunto.
//[-] -> de alguma coisa até outra coisa, do menor para maior
//[min-maxQUALQUERCOISA].
//[^] Funciona como negação.
// ^ no começo siginifica "começa com"
//$ termina com

const {ips,cpfs1} = require('./base');
console.log(cpfs1)


//forma mais dificil de encontrar o cpf
console.log(cpfs1.match(/[0-9]{3}\.[0-9.]{3}\.[0-9]{3}\-[0-9]{2}/gi)) 


//forma um pouco mais fácil
console.log(cpfs1.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/gi)) 

//forma mais simplificada
console.log(cpfs1.match(/(\d{3}\.){2}\d{3}\-\d{2}/gi)) 


//250-255 [0-5]
//200-249 2[0-4][0-9]
//100 -199 1[\d]2
//10 -99 [1-9]\d
//0-9   \d

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]|\d|\d)/g;
/*for(let i = 0 ; i<=300; i++){
    const ip = `${i}.${i}.${i}.${i}.`
    console.log(ip,ip.match(ipRegExp))
}*/

console.log(ips)
console.log(ips.match(ipRegExp));
