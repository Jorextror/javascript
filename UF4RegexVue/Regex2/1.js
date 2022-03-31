let line1 = 'start address: 0xA0, func1 address: 0xC0'
let line2 = 'end address: 0xFF, func2 address: 0xB0'

let line = line2

if (line.match(/(0xB0)/gi)){
    console.log(true,line)
}else{
    console.log(false,line)
}