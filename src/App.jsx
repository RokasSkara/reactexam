import './App.css';
import { Routes, Route } from 'react-router-dom'

//Pages

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Add from './pages/add'


function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
