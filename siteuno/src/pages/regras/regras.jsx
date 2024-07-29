import { Link } from 'react-router-dom';
import './regras.css';
import HeaderNav from '../../components/header/header';

export default function Regras() {
    return (
        <>
        <HeaderNav />
            <section className="regras-header">
                <h1>Regras do Jogo Uno</h1>
            </section>
            <section className="regras-intro">
                <p>
                    Bem-vindo à página de regras do jogo Uno! Aqui você encontrará todas as informações necessárias 
                    para dominar este jogo clássico e divertido. Explore as regras oficiais e aprenda sobre as 
                    diferentes cartas e suas ações especiais. Prepare-se para se tornar um mestre do Uno!
                </p>
            </section>
            <section className="regras-content">
                <Link to="/regras/regrasOficiais" className="regras-button">Regra Oficial</Link>
                <Link to="/regras/regrasCartas" className="regras-button">Regras das Cartas</Link>
            </section>
        </>
    );
}