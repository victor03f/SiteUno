import './sobre.css'
import HeaderNav from '../../components/header/header'

export default function Sobre() {
    return (
        <>
            <HeaderNav />
            <div className="corpo">
                <div className='header'>
                    <h1>História do Jogo UNO...</h1>
                    <h2>Uma briguinha entre pai e filho que conquistou o mundo!</h2>
                </div>

                <div className="escrita">
                    <p>A história do UNO é curiosa. O jogo é fruto de uma "briga" entre um pai fã de jogos de cartas e seu filho birrento.
                        A briga aconteceu em 1971, na cidade de Reading, nos Estados Unidos. Merle Robbins e seu filho, Ray, costumavam jogar "Oito Maluco" à noite, mas conflitos sempre apareciam. Merle, em especial, criticava as regras do jogo, e queria disputar as partidas de um jeito diferente. Mas Ray batia o pé e exigia que as regras originais fossem seguidas.
                        Assim, para "melhorar" as regras do Oito Maluco, Merle criou um novo baralho, esse mesmo que jogamos hoje no UNO. Como bons norte-americanos que eram, logo os Robbins viram no divertido jogo uma oportunidade de ganhar dinheiro. </p>
                    <p>Merle era barbeiro, portanto tinha uma clientela que poderia se transformar facilmente em possíveis compradores do novo baralho. Assim, a família economizou 8.000 dólares na época para produzir 5.000 baralhos de UNO, feitos de maneira bastante simples, e vender na barbearia.</p>
                    <p>Logo, o baralho colorido era mania na cidade. Não demorou muito para uma empresa maior comprar os direitos autorais do UNO, que após fusões e aquisições, se tornou uma das marcas registradas mais famosas dos Estados Unidos, com produtos licenciados e distribuídos em todo planeta.</p>
                </div>

                <div className="curiosidades">
                    <h1>Curiosidades sobre o UNO:</h1>
                    <ul>
                        <li>"Uno" vem da palavra em espanhol "um". Grita-se ‘Uno!’ durante a partida quando sobrar apenas uma carta na mão, indicando a iminência de uma vitória.</li>
                        <li>O objetivo é ser o primeiro jogador a descartar todas as suas cartas.</li>
                        <li>O baralho original do UNO continha apenas 80 cartas.</li>
                        <li>O UNO é um dos jogos de cartas mais jogados online.</li>
                        <li>Existem diversas regras da casa para o UNO, que variam de acordo com a região e o grupo de jogadores.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}