import './App.css';
import NavBar from './components/navBar';
import Home from './pages/Home';
import Initiatives from './pages/Initiatives';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='App mx-32 mt-8'>

    <Router>
    <NavBar/>  
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/initiatives' element={<Initiatives/>} />
        <Route path='/donation' element={<Donation/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
