import entradaDados from 'readline-sync'

console.log("\nAplicação de Juros\n")

let valor_divida = entradaDados.question("Informe o valor da divida: ");

if(valor_divida > 0){ // validação para divida ser maior que zero

  let dias_devidos = entradaDados.question("Informe quantos dias se passaram desde o vencimento: ")

  if(dias_devidos > 0){ //validção de dias de atraso

    if(dias_devidos > 15){ // mais de 15 dias de vencimento 10% de juros sobre a divida
      console.log("\nValor original da Divida: "+valor_divida)
      console.log("Dias após o vencimento: "+dias_devidos)
      console.log("Taxa de Juros: 10% \n")
    
      let juros = (valor_divida * 10 ) / 100
    
      let valor_divida_juros = Number(valor_divida) + Number(juros)
    
      console.log("Valor final com juros: "+valor_divida_juros)
    
    
    }else if(dias_devidos <= 15){ // 15 dias ou menos 5% de juros sobre a divida
    
      console.log("\nValor original da Divida: "+valor_divida)
      console.log("Dias após o vencimento: "+dias_devidos)
      console.log("Taxa de Juros: 5% \n")

    
      let juros = (valor_divida * 5 ) / 100
    
      let valor_divida_juros = Number(valor_divida) + Number(juros)
    
      console.log("Valor final com juros: "+valor_divida_juros)
    
    }






  }else{ //Encerrar o programa caso não tenha passado do vencimento

    console.log("\nValor original da Divida: "+valor_divida)
  
  }



}else{ //Encerra o programa caso o valor da divida seja zero
  console.log("Valor da divida tem que ser maior que zero!")
}



