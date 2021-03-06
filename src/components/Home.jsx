import { useState, useEffect } from 'react';

const Home = () => {

  const [data, setData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
      method : "GET",
      headers : {
          "Content-type" : "application/json",
          "Accept" : "application/json plain/text ",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => {
        if (!res.ok){
          throw Error("Nepavyko atsisiųsti duomenų iš serverio")
          } else {
              res.json()
              .then(data => setData(data))
          }
        }
      )
      .catch(err => {console.log(err.message)})
  });

  return (
    <div className="main">
      <h1>Žodynas</h1>
      {
      !data ? 
      <p>Loading...</p> :
      data.length === 0 ? 
      <p>Įrašų nėra</p> :
      <div className="cards">
        {data.map(entry => 
          <div className="card" key={entry.id}>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
          </div>
        )
      }
      </div>}
    </div>
  )
};

export default Home