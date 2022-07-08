import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Add from './components/Add';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setIsAuthenticated(true)
    }
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="add" element={<Add />}/>
      </Routes>
    </div>
  )
};

export default App;
