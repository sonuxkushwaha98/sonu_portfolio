import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Nav from './component/nav';
import Contact from './component/Contact';
import Home from './component/Home';
import Weather_website from './component/Weather_Website';
import MusicPlayer from './component/MusicPlayer';
import Partical from './component/partical';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Partical className="BackgrndPartical" />
          <Routes>

            <Route element={<PrivateComponent/>} >
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/weather-website' element={<Weather_website />} />
            <Route path='/MusicPlayer' element={<MusicPlayer />} />
            </Route>

            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      
      </div>
    </>
  );
}

export default App;
