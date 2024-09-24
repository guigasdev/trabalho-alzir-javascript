let a = prompt("Digite um numero: ");
if(a != 1){
    if(a%2 != 0 || a == 2){
        if(a%1==0){
            if(a%a==0){
                console.log("O número " + a + " é primo");
            }
        }
    }else{
        console.log("O número " + a + " não é primo");
    }
}else{
    console.log("O número " + a + " não é primo");
} 