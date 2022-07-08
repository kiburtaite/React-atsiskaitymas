import { Link } from 'react-router-dom';
import logo from '../images/react-logo.svg';

const Nav = ({type}) => {
    if (type === 0){
        return (
            <nav>
                <img src={logo} alt="logo"/>
                <Link to="/register"><span>Registruotis</span></Link>
                <Link to="/login"><span>Prisijungti</span></Link>
            </nav>
        )
    } else return (
        <nav>
            <img src={logo} alt="logo"/>
            <Link to="/"><span>Žodynas</span></Link>
            <Link to="/add"><span>Pridėti_žodį</span></Link>
        </nav>
    )
};


export default Nav