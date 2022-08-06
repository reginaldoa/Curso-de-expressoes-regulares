const {html2, html} = require ('./base');

//$1 $2 $3  -> Retrovisores  \1

console.log(html2);
console.log('************************');

//console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));

//com o replace, consigo fazer alterações manualmente.
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g,'$1 hahaha"$3 hahaha"$4'));