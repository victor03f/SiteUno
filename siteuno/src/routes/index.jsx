import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import ComoJogar from '../pages/comoJogar/comoJogar';
import Regras from '../pages/regras/regras';
import Sobre from '../pages/sobre/sobre';
import RegrasOficial from '../pages/regras/regraOficial/regraOficial';
import RegrasCartas from '../pages/regras/regrasCartas/regrasCartas';

export default function WebRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/comoJogar' Component={ComoJogar} />
                <Route path='/regras' Component={Regras} />
                <Route path='/regras/regrasOficiais' Component={RegrasOficial} />
                <Route path='/regras/regrasCartas' Component={RegrasCartas} />
                <Route path='/sobre' Component={Sobre} />
            </Routes>
        </Router>
    );
};