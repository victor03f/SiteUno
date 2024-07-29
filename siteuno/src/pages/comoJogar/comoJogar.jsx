import React from "react"
import img1 from "../../assets/mao_segurando_carats_de_uno_true.jpg"
import img2 from "../../assets/gif_jogando_uno.gif"
import img3 from "../../assets/mais_2_card.png"
import img4 from "../../assets/mais_4_card.png"
import img5 from "../../assets/invert_card.png"
import img6 from "../../assets/bloqueio_card.png"
import img7 from "../../assets/escolhe_cor.png"
import HeaderNav from "../../components/header/header"
import './comoJogar.css'

export default function ComoJogar() {

    return (
        <>
            <HeaderNav />

            <div className="comojogar">
                <div className="titulo">
                    <h1>ComoJogar</h1>
                </div>
                <div className="paragrafo1">
                    <h3>O jogo começa simples, cada jogador deve pegar 7 cartas aleatórias do baralho,
                        um jogador pode embaralhar o baralho e distribui ou cada um pega suas próprias 7 cartas
                    </h3>
                </div>
                <div className="localimg1">
                    <img className="ImgHandHolindCards" src={img1} alt="" />
                </div>
                <div className="paragrafo2">
                    <h3>Após todos terem 7 cartas em mão o jogo começa, um jogador começa jogando uma carta que estava em sua mão.</h3>
                </div>
                <div className="paragrafo3">Depois do primeiro jogador ter feito sua jogada o jogador a sua direita será o próximo, assim consecutivamente.  </div>
                <div className="paragrafo4">dentro da rodada de cada jogador dele deve jogar alguma carta da sua a mão que seja ou de mesma cor da carta anterior ou mesmo numero,
                    caso contrário ele deverá pescar uma carta no deck de compras, caso ele tirar uma carta que seja de alguma característica similar seja cor ou número da carta joda
                    Na rodada anterior ele poderá jogar aquela carta comprada e passar a vez.
                </div>
                <div className="localimg2">
                    <img className="dropcards" src={img2} alt="" />
                </div>
                <div className="paragrafo5">
                    <h2>Cartas</h2>
                </div>
                <div className="paragrafo6">
                    <h3>No uno existem diversas cartas sendo elas as cartes de números e as cartas de ação ou cartas especiais, dentre essas carast temos "+2, +4, inverter, bloquear e coringa". </h3>
                </div>

                <div className="paragrafo7">
                    <h2>+2</h2>
                </div>

                <div className="localimg3">
                    <img className="img+2card" src={img3} alt="" />
                </div>

                <div className="paragrafo8">
                    <h3>quando esta carta é jogada, o próximo jogador deve comprar duas cartas</h3>
                </div>

                <div className="paragrafo9">
                    <h2>+4</h2>
                </div>

                <div className="localimg4">
                    <img className="img+4card" src={img4} alt="" />
                </div>

                <div className="paragrafo10">
                    <h3>esta carta permite determinar a próxima cor a ser jogada e força o próximo jogador a sacar 4 cartas da pilha.</h3>
                </div>

                <div className="paragrafo11">
                    <h2>+4</h2>
                </div>

                <div className="localimg5">
                    <img className="img_invertcard" src={img5} alt="" />
                </div>

                <div className="paragrafo12">
                    <h3>representada por duas setas, esta carta inverte o sentido do jogo.</h3>
                </div>

                <div className="paragrafo13">
                    <h2>Bloqueio</h2>
                </div>

                <div className="localimg6">
                    <img className="img_bloqueiocard" src={img6} alt="" />
                </div>

                <div className="paragrafo14">
                    <h3>com a imagem de um sinal de proibido, esta carta faz o próximo jogador perder a vez.</h3>
                </div>

                <div className="paragrafo15">
                    <h2>Curinga</h2>
                </div>

                <div className="localimg7">
                    <img className="img_curingacard" src={img7} alt="" />
                </div>

                <div className="paragrafo16">
                    <h3>Ao jogar esta carta, o jogador escolhe a cor que o próximo participante deverá jogar.</h3>
                </div>
            </div>
        </>
    )
}