let lines = ['be nice', '"best!"','better?','oh no\nbear spotted']

function regex(lines){
    return lines.match(/^be/gm)
}

const result = lines.filter(regex);
console.log(result);