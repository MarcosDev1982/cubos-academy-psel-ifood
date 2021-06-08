function solucao(letra, palavras) {

  let quantCriancaPerd = 0;
  let quantidadeGanhou=0;
 
   for(let item of palavras){
    if(item[0] === letra){
     quantidadeGanhou ++
       
     } else
       quantCriancaPerd++;
   }
      console.log(quantCriancaPerd);
     
 }