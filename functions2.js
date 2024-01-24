// function convert(celcius){
    
//    let Fahrenheit = (celcius * 9/5) +32
//    return Fahrenheit
// }

// const result = convert(25)

// console.log(result)


// function convert(Fahrenheit){
//     let celcius = (Fahrenheit - 32)*5/9

//     return celcius
// }

// const result = convert(86)

// console.log(result)

function convertTemperature(degrees,unit){
    let celcius = (degrees-32)*5/9
    return celcius
}

const result = convertTemperature(86,"f")

console.log(result)