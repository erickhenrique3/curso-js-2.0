// Criar um metodo de ler propriedades  de um objeto 
// e exibir somente as propriedades de tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    direor: 'jack chan',
    personagem: 'Homem de ferro'

}
exibirPropriedades(filme)
function exibirPropriedades(obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}