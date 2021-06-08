function solucao(tempo, distancia) {

  let valorAPagar = 0;
  
  if(tempo < 05){
    
    console.log(600);
  }
  if(tempo >= 05 && tempo<=60){
  
   valorAPagar = (1*tempo * 100) + (0.5 * distancia *100)
   console.log(valorAPagar);
  }
  if(tempo > 60 && distancia < 100 ){
  
   valorAPagar =  (2 * distancia )*100
   console.log(valorAPagar);
  }
  if(tempo > 60 &&  distancia >= 100){
  
   valorAPagar =  (1.50 * distancia )*100
   console.log(valorAPagar);
  
  }   
      
  }