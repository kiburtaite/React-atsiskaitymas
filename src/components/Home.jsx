import { useState, useEffect } from 'react';

const Home = () => {

  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
      method : "GET",
      headers : {
          "Content-type" : "application/json",
          "Accept" : "application/json plain/text ",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {
      !data ? 
      <p>Loading...</p> :
      data.length === 0 ? 
      <p>Įrašų nėra</p> :
      data.map(entry => 
        <div key={entry.id}>
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </div>
      )
      }

    </div>
  )
};

export default Home