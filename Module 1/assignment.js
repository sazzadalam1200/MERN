function multiplicationTable(n){
   
    if(Number.isInteger(n)){
        for(let i = 1; i<11;i++){
            var table = n + " * "+ i + " = "+ n*i
            console.log(table)  
        }
    }
    else{
        console.log("not integer")
    }
    
}
multiplicationTable(5)
multiplicationTable(8.2)
multiplicationTable(-3)
