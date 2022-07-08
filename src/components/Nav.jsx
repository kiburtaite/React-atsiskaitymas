import { Link } from 'react-router-dom';
import logo from '../images/react-logo.svg';

const Nav = ({type}) => {
    if (type === 0){
        return (
            <nav>
                <img src={logo} alt="logo"/>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link> 
            </ nav>
        )
    } else return (
        <nav>
            <img src={logo} alt="logo"/>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
        </ nav>
    )
};


export default Nav