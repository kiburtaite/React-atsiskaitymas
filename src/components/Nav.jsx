import { Link } from 'react-router-dom';

const Nav = ({loggedIn}) => {
    if (loggedIn){
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Add</Link>
            </ nav>
        )
    } else return (
        <nav>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </ nav>
    )
};


export default Nav