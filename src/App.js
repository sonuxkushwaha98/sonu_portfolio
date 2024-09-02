import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/nav';
import Contact from './component/Contact';
import Home from './component/Home';
import About from './component/About';
import Weather_website from './component/Weather_Website';
import MusicPlayer from './component/MusicPlayer';
import Partical from './component/partical';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Partical className="BackgrndPartical" />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/weather-website' element={<Weather_website />} />
            <Route path='/MusicPlayer' element={<MusicPlayer />} />
          </Routes>
        </BrowserRouter>
      
      </div>
    </>
  );
}

export default App;
