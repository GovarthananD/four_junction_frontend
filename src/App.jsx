import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Register from './components/register';
import Login from "./components/login";
import Main from './components/main';
import MovieDetails from './components/movieDetails';
import MainPage from './components/mainpage';



function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/mainpage" element={<MainPage/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/:id" element={<MovieDetails/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
