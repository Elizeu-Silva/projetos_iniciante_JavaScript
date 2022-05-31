import entradaDados from 'readline-sync'


console.log(
  "1) Celsius para Kelvin\n",
  "2) Milhas para Quilometros"
)



let opcao = entradaDados.question("Informe qual conversão deseja: ");


if(opcao == 1){
  let C = entradaDados.question("Informe o valor em Celsius: ")

  let K = Number(C) + 273.15

  console.log(C+"°C equivale a "+K+"K")
}else if(opcao == 2){

  let mi = entradaDados.question("Informe o valor em Milhas: ");

  let km = mi / 0.62137;

  console.log(mi+" Milhas equivalem a "+km.toFixed(2)+" Km")
 
}else{
  console.log("\nInforme uma opção valida")
}
