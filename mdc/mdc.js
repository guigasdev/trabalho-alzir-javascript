let mdc = 0
let a = prompt("digite o primeiro numero: ");
let b = prompt("digite o segundo numero: ");

if(a % b == 0 || b % a == 0){
    if(a > b){
        console.log("o mdc é: " + a);
    }else{
        console.log("o mdc é: " + b);
    }
}else{
    mdc = a * b;
    console.log("o mdc é: " + mdc);
}
    