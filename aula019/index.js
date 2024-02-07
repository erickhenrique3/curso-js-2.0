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




function criarCelular(marcaCelular, tamanhoTela, capacidadedeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadedeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);