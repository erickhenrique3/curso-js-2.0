// objeto endereço

let endereço = {
   Rua : "José dias Monteiro",
   Cidade: "Rodon",
   Cep: 87800000,
   
};

function exibirEndereço(endereço){
    for(let chave in endereço)
    console.log(chave,endereço[chave])
   }

   exibirEndereço(endereço);