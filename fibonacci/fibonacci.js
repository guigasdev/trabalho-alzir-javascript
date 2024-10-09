
let a = 0, b = 1, i = 2;
let n = prompt("Digite a quantidade de termos: ");
while(i<n){
    console.log(a + ", " + b + ", ");
    a = a+b;
    b = a+b;
    i = i+2;
}
if(i == n){
    console.log(a + ", " + b);
}else{
    console.log(a);
}
