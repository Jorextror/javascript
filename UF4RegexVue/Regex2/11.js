const ex3 = 'The salad costs 9,99€'

const regex=/[0-9,]+.([0-9]+)/gm
console.log(ex3.match(regex));