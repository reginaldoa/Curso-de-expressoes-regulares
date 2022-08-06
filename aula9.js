//"Receitas" que podem ser úteis durante o dia a dia.

//Encontra todas as palavras
const palavrasRegEx = /([\wÁ-ú]+)/gim

// Não números, ou seja, elimina o que for número de uma string.
const naoNumerosRegEx = /\D/

//valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]|\d|\d)/g;

//Verificar se foi digitado algo que parece com um CPF
const cpfRegExp =/(?:\d{3}\.){2}\d{3}\-\d{2}/g

//valida telefones
const validaTelefone = /^(\(\d{2}\)\s*)?(9\$*)?(\d{4})-(\d{4})$/g

//Valida senhas fortes 
const validaSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/gm

//valida e-mails
const validaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim

//valida email- forma permissiva
const emailPermite = /[^\s\.]+\.?[^\s\.]@[^\s<>]+\.[^\s<>]+\w+/gm 
