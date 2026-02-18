import './App.css'
import Home from './pages/1-Home/Home'
import { Routes, Route } from "react-router-dom";
import Login from './pages/2-Login/Login';
import Blog from './pages/3-Blog/Blog';
import Courses from './pages/4-Courses/Courses';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/courses" element={<Courses />} />


    
    </Routes>
  );
}

export default App
