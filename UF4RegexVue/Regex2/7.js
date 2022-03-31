let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

function regex(items){
    return items.match(/[en]/gm)
}

const result = items.filter(regex);
console.log(result);