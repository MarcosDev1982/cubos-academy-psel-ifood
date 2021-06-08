function solucao(produtos) {

  let listPrecoProduto = [];
  let listPrecoProduTop = [];
  let somaProdutoTop =0;
  let somaProduto = 0;

  for(let item of produtos){
  
  const precos = item.preco;
  
  listPrecoProduto.push(precos)
  
  if( precos > 10000){
     
      listPrecoProduTop.push(precos)
    
   }
  
  }
  for(let i=0; i< listPrecoProduTop.length; i++){
     
      somaProdutoTop += listPrecoProduTop[i];
      
  }
  for(let i=0; i< listPrecoProduto.length; i++){
     
      somaProduto +=listPrecoProduto[i];
  }
   

    const listTotal = {
    
      totalTop: somaProdutoTop,
      percentual: somaProdutoTop/somaProduto

    }

  console.log(listTotal);
    
    
}