// velocidade maxima de até 70
// a cada 5km acima do limite voçê ganha 1 ponto
// Math.Floor() arredondamento de numero flutuante
// caso pontos maior que 12 -> "Carteira suspendida"

verificaVelocidaede(130);

function verificaVelocidaede(velocidade) {
    const velocidadeMaxima = 70;
    const kmporPonto = 5;

    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmporPonto)); 
        if (pontos >= 12)
            console.log('Carteira suspença')
        else

            console.log('Pontos', pontos);
    }

}