import Nav from './Nav';

const Register = () => {

    const fregister = (e) => {
        e.preventDefault();
        const newUser = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch("https://autumn-delicate-wilderness.glitch.me/v1/auth/register", {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
            "Accept" : "application/json plain/text "
        },
        body: JSON.stringify(newUser)
        })
        .then(res => {
            if (!res.ok){
            throw Error(alert("Registracija nesėkminga"))
            } else {
                alert("Sėkmingai prisiregistravote")
            }
        })
    };

    return (
        <div>
            <Nav />
            <h1>Register</h1>
            <form onSubmit={fregister}>
                <input type="email" name="email" placeholder="Įveskite el.paštą"/>
                <input type="password" name="password" placeholder="įveskite slaptažodį"/>
                <button type="submit">Registruotis</button>
            </form>
        </div>
    )
};


export default Register