const {cpfs1,cpfs2}= require ('./base');

//muito interessante para encontrar cpfs em formulários.


// $  Significa "termina com"
// ^  sozinho, significa "começa com"
// [^] quando é dentro do conjunto : negação
// m -> multiline

const cpf ='000.000.000-00';
const cpfRegExp =/(\d{3}\.){2}\d{3}\-\d{2}/gm

console.log(cpfs2)
console.log(cpfs2.match(cpfRegExp))


