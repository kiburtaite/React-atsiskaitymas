import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState('');

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token]);

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
                alert("Sėkmingai prisijungėte");
                res.json()
                .then(data => {
                    setToken(data.token)
                })
            }
        })
    };

    return (
        <div>
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