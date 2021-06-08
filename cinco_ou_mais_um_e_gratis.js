
function solucao(precos) {
  let quantItemCompr = precos.length; 
  let valorDaCompra=0;
   
   if(quantItemCompr >= 5 ){  
  
   for(let i = 0; i < precos.length; i++){
   let aux = i;
   for(let j = i+1; j< precos.length; j++){
    if(precos[j] > precos[aux]){
      aux=j;
    }
    
  }
   if(aux!=i){
   let temp = precos[i];
   precos[i] = precos[aux]
   precos[aux]=temp;
  }
  
  }
  precos.pop();
  for(let i = 0; i<precos.length; i++){
   valorDaCompra += precos[i];
  
  }
  
  console.log(valorDaCompra);
  
  }else
  
  if(quantItemCompr < 5){
  for(let i = 0; i<precos.length; i++){
   valorDaCompra += precos[i];
  
  }
    console.log(valorDaCompra);
  
  }else
  
   console.log("ERRO");   
  
      
  }