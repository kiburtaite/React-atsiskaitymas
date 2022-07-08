import { useState } from 'react';
import Nav from './Nav';

const Add = () => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const addEntry = (e) => {
        e.preventDefault();
        const newEntry = {
            title: e.target.title.value,
            description: e.target.description.value
        };
        fetch("https://autumn-delicate-wilderness.glitch.me/v1/content/skills", {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
            "Accept" : "application/json plain/text ",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newEntry)
        })
        .then(res => {
            if (!res.ok){
            throw Error(alert("Nepavyko pridėti naujo įrašo"))
            } else {
                alert("Įrašas sėkmingai pridėtas")
            }
        })
    }; 

    return (
        <div>
            <Nav />
            <h1>Add</h1>
            <form onSubmit={addEntry}>
                <input type="text" name="title" placeholder="Įveskite pavadinimą"/>
                <input type="textarea" name="description" placeholder="Įveskite aprašymą"/>
                <button type="submit">Pridėti</button>
            </form>
        </div>
    )
};


export default Add