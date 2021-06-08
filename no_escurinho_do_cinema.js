function solucao(obj) {
 
  const list = [obj];
 
  for(let item of list){
   const ingresso = item.temIngresso;
   const idade = item.idade;
   const limitIdade = item.censura;
   const acompanhado = item.estaComPais;
   const carteirinha = item.temCarteirinha;
   
   if(ingresso == true){
     if(idade >= limitIdade || acompanhado == true){
       if(carteirinha == true || idade < 18){
         
         console.log("MEIA");
        }
        else
        console.log("INTEIRA");
        } 
        else
        console.log("ACESSO NEGADO");
   
    } 
    else
    console.log("ACESSO NEGADO");
   }
}