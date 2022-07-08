import { Link } from 'react-router-dom';

const Nav = (type) => {
    if (type === 0){
        return (
            <nav>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link> 
            </ nav>
        )
    } else return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
        </ nav>
    )
};


export default Nav