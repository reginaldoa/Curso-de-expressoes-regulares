const {lookahead} = require ('./base');

console.log(lookahead);


//procurando linhas que terminam com "active"
//console.log(lookahead.match(/.+[^in]active/gim));

//positive lookahead (frases que tem active)
//console.log(lookahead.match(/.+(?=[^in]active)/gim));

//positive lookahead (frases que tem inactive)
//console.log(lookahead.match(/.+(?=\s+inactive)/gim));


// negative lookahead (frases que não tem active) esse tipo é menos usado
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//positivo lookbehind (frases que começam com ONLINE)
//console.log(lookahead.match(/(?<=online\s+).\S*/gim));

//negativo lookbehind (frases que NÃO começam com ONLINE)
//console.log(lookahead.match(/^.+(?<!online.+)$/gim));

const cpf = `
012.250.793-10
111.111.111-11
999.999.999-95
147.285.963-10`
//não irá aceitar pegar sequencias de digitos iguais.
//console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))