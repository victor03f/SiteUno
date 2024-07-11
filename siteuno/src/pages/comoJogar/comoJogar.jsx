import React from "react"
import img1 from  "../../assets/mao_segurando_carats_de_uno_true.jpg"
import img2 from  "../../assets/gif_jogando_uno.gif"

export default function ComoJogar() {
    
    return (
        <div className="comojogar">
        <div className="titulo">
            <h1>ComoJogar</h1>
        </div>
        <div className="paragrafo1">
            <h3>O jogo começa simples, cada jogador deve pegar 7 cartas aleatorias do baralho,
             um jogador pode embaralha o barralho e destribui ou cade um pega suas própias 7 cartas</h3>
        </div>
        <div className="localimg1">
            <img className="ImgHandHolindCards" src={img1} alt=""/>
        </div>
        <div className="paragrafo2">
            <h3>apos todos terem 7 carats em mão o jogo começa, um jogador começa jogando uma carta que estava em sua mão.</h3>
        </div>
        <div className="paragrafo3">depois do primeiro jogador ter feito sua jogada o jogador a sua direita sera o próximo, assim consecutivamente. </div>
        <div className="paragrafo4">dentro da rodada de cada jogar dele deve jogar alguma carta da sua a mão que seja ou de mesma cor da carta anterior ou mesmo número,
         caso contrario ele devera pescar uma carte no deck de compras, caso ele tirar uma carta que seja de açguma carteristica similar seja cor ou número da carta joda
          na rodada anterio ele podera jogar aquela carta comprada e passar a a vez. </div>
          <div className="localimg2">
            <img className="dropcards" src={img2} alt=""/>
        </div>
          <div className="paragrafo5">
            <h2>Cartas</h2>
          </div>
            <div>
                <h3>No uno exeitem diversas caratas sendo elas as cartes de números e as caratas de ação ou cartas espiciais, </h3>
            </div>
        </div>

           
    )
}