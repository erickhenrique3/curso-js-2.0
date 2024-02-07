// Natureza dinâmica de objetos

const mouse = {
   cor : "Azul",
   marcar: "Durawell"
}
// Para adicionar mais caracteristicas no objeto segue abaixo
mouse.velocidade = 5000;
mouse.trocarDPI = function (){
    console.log('Mudando DPI..')

}

//Para deletar uma propriedade do objeto ou função segue abaixo:^

//delete mouse.velocidade;
//delete mouse.trocarDPI;
console.log(mouse);