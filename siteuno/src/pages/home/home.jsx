import './home.css';
import HeaderNav from '../../components/header/header';

function Home() {
    return (
        <div className="homepage">
            <HeaderNav />
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