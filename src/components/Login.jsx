import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const addToken = ((token) => {
        localStorage.setItem('token', token)
    })

    const flogin = (e) => {
        e.preventDefault();
        const regUser = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch("https://autumn-delicate-wilderness.glitch.me/v1/auth/login", {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
            "Accept" : "application/json plain/text "
        },
        body: JSON.stringify(regUser)
        })
        .then(res => {
            if (!res.ok){
            throw Error(alert("Prisijungti nepavyko"))
            } else {
                res.json()
                .then(data => addToken(data.token))
                .then(alert("Sėkmingai prisijungėte"))
                .then(navigate("/"))
            }
        })
    };

    

    return (
        <div className="main">
            <h1>Prisijungti</h1>
            <form onSubmit={flogin}>
                <input type="email" name="email" placeholder="Įveskite el.paštą"/>
                <input type="password" name="password" placeholder="įveskite slaptažodį"/>
                <button type="submit">Prisijungti</button>
            </form>
        </div>
    )
};


export default Login