import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/add">Add</Link>
        </nav>
    )
};


export default Nav