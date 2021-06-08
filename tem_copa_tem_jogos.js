function solucao(ano) {
  let rest = ano%12;
  
  if (rest == 6 || rest == 2 || rest == 10){
     console.log("COPA");
  }
  else
  if(rest == 8 || rest == 0 || rest == 4){
    console.log("JOGOS");
  }
  else{
    console.log("MEH");
  }
  
  }