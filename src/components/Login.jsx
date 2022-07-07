import Nav from './Nav';

const Login = () => {

const flogin = (e) => {
    e.preventDefault();
    fetch("https://autumn-delicate-wilderness.glitch.me/v1/auth/login")
    .then(res => res.json())
    .then(data => console.log(data))
};

    return (
        <div>
            <Nav />
            <h1>Login</h1>
            <form onSubmit={flogin}>
                <input type="email" name="email" placeholder="Įveskite el.paštą"/>
                <input type="password" name="password" placeholder="įveskite slaptažodį"/>
                <button type="submit">Prisijungti</button>
            </form>
        </div>
    )
};


export default Login