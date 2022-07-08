import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
  });

  const PrivateRoutes = () => {
    if(isAuthenticated){
      return <Outlet/>
    } else return <Navigate to="/login"/>
  }

  return (
    <div>
      <Nav type = {isAuthenticated ? 1 : 0}/>
      <Routes>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add />} />
          </Route>
      </Routes>
    </div>
  )
};

export default App;
