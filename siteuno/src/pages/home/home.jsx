import './home.css';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Bem-vindo ao Mundo do Uno!</h1>
                <Link to='./sobre'>Sobre</Link>
                <Link to='./comoJogar'>Como jogar</Link>
                <Link to='./regras'>Regras</Link>
            </header>
            <main className="homepage-main">
                <section className="intro">
                    <h2>Sobre o Jogo</h2>
                    <p>Uno é um jogo de cartas divertido e emocionante para todas as idades!</p>
                </section>
               
               <section className='img-box'>
               </section>
            </main>
            <footer className="homepage-footer">
                <p>&copy; 2024 Mundo do Uno. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;