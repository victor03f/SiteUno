import './regraOficial.css'
import HeaderNav from '../../../components/header/header';

export default function RegrasOficial() {
    return (
        <>
            <HeaderNav />
            <div className="RegrasOficiais">
                <h1>
                    Número de jogadores:
                </h1>
                <p>
                    Uno é ideal para 2 a 10 jogadores.
                </p>
                <h1>
                    Baralho:
                </h1>
                <p>
                    Utilize um baralho Uno padrão com 112 cartas
                </p>

                <h1>
                    Cartas numeradas:
                </h1>
                <p>
                    Cartas numeradas: 4x de cada cor (azul, verde, amarelo e vermelho) com números de 0 a 9 (total: 96 cartas).
                </p>
                <h1>
                    Cartas de ação:
                </h1>
                <p>
                    2x de cada cor (azul, verde, amarelo e vermelho) de:
                    +2: obriga o próximo jogador a comprar duas cartas.
                </p>
                <h1>
                    Inverter:
                </h1>
                <p>
                    inverte a ordem da jogada.
                </p>

                <h1>
                    Pular:
                </h1>
                <p>
                    o próximo jogador perde sua vez.
                </p>

                <h1>
                    Cartas curinga:
                </h1>
                <p>
                    4x Curinga e 4x Curinga +4.
                </p>

                <h1>
                    Distribuição das cartas:
                </h1>
                <p>
                    3 jogadores: cada jogador recebe 7 cartas.
                    4 a 6 jogadores: cada jogador recebe 7 cartas.
                    7 a 10 jogadores: cada jogador recebe 5 cartas.
                </p>
                <h1>
                    Resto do baralho:
                </h1>
                <p>
                    As cartas restantes formam a pilha de descarte, virada com a face para baixo.
                </p>

                <h1>
                    Objetivo:
                </h1>
                <p>
                    Ser o primeiro jogador a se livrar de todas as cartas e alcançar 500 pontos ou menos.
                </p>
                <h1>
                    Começando a partida::
                </h1>
                <p>

                    Definindo o primeiro jogador:
                    Método 1: O jogador à esquerda do embaralhador revela a carta superior do baralho. Se for jogável, ele começa. Se não for, compra uma carta e passa a vez para o próximo jogador à esquerda. O processo se repete até encontrar uma carta jogável.
                    Método 2: Todos revelam a carta superior. A carta mais alta (sem levar em conta cor ou função) inicia o jogo. Em caso de empate, repete-se a revelação até desempatar.
                    Primeira jogada: O primeiro jogador descarta qualquer carta jogável.
                    Descartando cartas:

                </p>
                <h1>
                    Regras básicas:
                </h1>
                <p>
                    Para descartar, a carta precisa ser da mesma cor, número ou função da carta superior da pilha de descarte.
                    Se não tiver carta compatível, compre uma carta do baralho e passe a vez.
                    Cartas numeradas: siga o valor numérico da carta.
                    Cartas de ação: siga o efeito da carta:
                    +2: o jogador seguinte compra duas cartas e perde a vez.
                    Inverter: a ordem da jogada é invertida.
                    Pular: o jogador seguinte perde a vez.
                    Curinga: pode ser usado como qualquer cor ou função.
                    Curinga +4: funciona como um +2, mas o jogador seguinte compra 4 cartas e perde a vez.
                    Chamando "Uno": quando restar apenas uma carta na mão, o jogador deve dizer "Uno!". Se não disser, compra uma carta como penalidade.
                    Finalizando a rodada e pontuação:

                </p>

                <h1>
                    Fim da rodada:
                </h1>
                <p>
                    a rodada termina quando um jogador se livra de todas as cartas.
                    Pontuação: os pontos das cartas restantes na mão dos jogadores são somados:
                    Cartas numeradas: valor da carta.
                    +2, Inverter e Pular: 20 pontos cada.
                    Curinga e Curinga +4: 50 pontos cada.
                    Anotação: cada jogador registra seus pontos em uma folha.
                    Vencidor:**
                </p>

                <h1>
                    Ganhador
                </h1>
                <p>
                    Jogo por pontuação: o vencedor é o primeiro jogador a alcançar 500 pontos ou menos.
                    Jogo por eliminação: o vencedor é o último jogador a sobrar com cartas na mão.
                </p>
            </div>
        </>
    )
}