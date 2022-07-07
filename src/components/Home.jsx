import { useState, useEffect } from 'react';
import Nav from './Nav';

const Home = () => {

const [data, setData] = useState(null);

useEffect(() => {
  fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills')
    .then(res => res.json())
    .then(data => {setData(data); console.log(data)})
}, []);

return (
  <div>
    <Nav />
    <h1>Home page</h1>
  </div>
  )
};

export default Home