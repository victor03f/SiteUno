import './regrasCartas.css'
import carta1 from '/carta1.jpg'
import carta2 from '/carta2.jpg'
import carta3 from '/carta3.jpg'
import carta4 from '/carta4.jpg'
import carta5 from '/carta5.jpg'
import carta6 from '/carta6.jpg'
import HeaderNav from '../../../components/header/header'

export default function RegrasCartas() {
    return(
        <>
        <HeaderNav />
            <section className="cartas-header">
                <h1>Cartas do Jogo</h1>
                <h3>
                    O Uno, com suas cartas coloridas e jogabilidade simples, 
                    é um jogo de cartas que diverte pessoas de todas as idades 
                    há décadas. Nesta página, você encontrará um guia completo 
                    para as ações especiais das cartas. Aprenda tudo o que precisa 
                    para se tornar um mestre do Uno e aproveitar ao máximo esse jogo 
                    clássico!
                </h3>
            </section>
            <section className="cartas-main">
                <div>
                    <h2>Cartas Comuns</h2>
                    <img src={carta1} alt="Cartas Comuns"></img>
                    <p>
                    As cartas são divididas em quatro cores (vermelho, amarelo, verde e azul) e cada cor contém números de 0 a 9. As cartas numéricas são usadas para seguir a cor ou o número da carta anterior na pilha de descarte. Por exemplo, se a carta na pilha de descarte for um 3 vermelho, o jogador pode jogar qualquer carta vermelha ou qualquer carta com o número 3 de qualquer cor.
                    </p>
                </div>
                <div>
                    <h2>Cartas de Pular</h2>
                    <img src={carta2} alt="Cartas de Pular"></img>
                    <p>
                    As cartas de ação "Pular" fazem o próximo jogador perder a vez. Quando essa carta é jogada, o jogador seguinte é pulado e o turno passa para o próximo jogador na sequência. Esta carta pode ser usada estrategicamente para impedir que um adversário próximo ganhe o jogo.  
                    </p>
                </div>
                <div>
                    <h2>Cartas de Inverter</h2>
                    <img src={carta3} alt="Cartas de Inverter"></img>
                    <p>
                    As cartas "Inverter" mudam a direção do jogo. Se a partida está sendo jogada no sentido horário, passa a ser jogada no sentido anti-horário, e vice-versa. Esta carta é útil para alterar a dinâmica do jogo e pode ser combinada com outras cartas para criar novas estratégias.
                    </p>
                </div>
                <div>
                    <h2>Cartas de compra 2</h2>
                    <img src={carta4} alt="Cartas de compra 2"></img>
                    <p>
                    As cartas "+2" obrigam o próximo jogador a comprar duas cartas do monte e perder a vez. Esta carta é uma maneira eficaz de aumentar o número de cartas na mão de um adversário, retardando seu progresso e aumentando suas chances de ser desclassificado.
                    </p>
                </div>
                <div>
                    <h2>Cartas de compra 4</h2>
                    <img src={carta5} alt="Cartas de compra 4"></img>
                    <p>
                    As cartas "Coringa +4" têm dupla função: permitem ao jogador escolher a cor a ser jogada e fazem o próximo jogador comprar quatro cartas e perder a vez. Esta é uma das cartas mais poderosas do jogo, usada geralmente como um último recurso para mudar drasticamente a situação do jogo a favor do jogador que a possui.
                    </p>
                </div>
                <div>
                    <h2>Cartas Coringa</h2>
                    <img src={carta6} alt="Cartas Coringa"></img>
                    <p>
                    As cartas "Coringa" permitem ao jogador escolher a cor a ser jogada. Esta carta pode ser jogada em qualquer momento, independentemente da cor ou número da carta anterior. É uma ferramenta poderosa para mudar a dinâmica do jogo e se livrar de cartas que não combinam com a cor em jogo.
                    </p>
                </div>
            </section>
        </>
    )
}