const calculateTip = (total,tipPercent) => total +(total * tipPercent)

const fahrenheitToCelsius = (temp) =>{
    return (temp - 32) / 1.8
}

const CelsiusTofahrenheit = (temp) =>{
    return (temp * 1.8) + 32
}

module.exports ={
    calculateTip,
    fahrenheitToCelsius,
    CelsiusTofahrenheit
}