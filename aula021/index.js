const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadedeBateria: 5000,
    ligar: function () {
        console.log("Fazendo ligaçao....");
    }
}

const novoObjeto = Object.assign({
    bateria: 7000
},celular);
console.log(novoObjeto);