import { Link } from "react-router-dom"
import './header.css'

export default function HeaderNav() {
  return (
    <header className="header">
      <h1>Bem-vindo ao Mundo do Uno!</h1>
      <Link to='./sobre'>Sobre</Link>
      <Link to='./comoJogar'>Como jogar</Link>
      <Link to='./regras'>Regras</Link>
    </header>
  )
}