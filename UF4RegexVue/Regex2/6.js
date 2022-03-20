let para =`good start
Start working on that
project you always wanted
stars are shining brightly
hi there
start and try to
finish the book
bye`

var regex = /^((?!Start).(?!tart))+$/gm
console.log(para.match(regex))