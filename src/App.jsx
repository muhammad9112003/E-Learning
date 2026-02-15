import './App.css'
import Home from './pages/1-Home/Home'
import { Routes, Route } from "react-router-dom";
import Login from './pages/2-Login/Login';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<Login />} />
    </Routes>
  );
}

export default App
