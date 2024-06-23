

type callback = (x:number , y: number) => number


function addition (number1:number , number2:number){
    return number1+number2
}
function subtraction (number1:number , number2:number){
    return number1 - number2
}
function multiplication (number1:number , number2:number){
    return number1 * number2
}
function division (number1:number , number2:number){
    return number1  / number2
}
function calculator (operation:callback){
    console.log(operation(5,2))
}
calculator(addition)
calculator(subtraction)
calculator(multiplication)
calculator(division)
