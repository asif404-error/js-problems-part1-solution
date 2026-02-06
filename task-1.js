// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.

function temperature (celsius){
    let fahrenheit = (celsius * 9/5) + 32; //formula to convert the temperature from celsius to fahrenheit.
    return fahrenheit;
}

console.log (temperature(37));