import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import About from "./pages/About";
import Morocco from "./pages/Morocco";
import People from "./pages/People";
import Italia from "./pages/Italia";
import Mothernature from "./pages/Mothernature";
import Commercial from "./pages/Commercial";
import Blues from "./pages/Blues";
import Skatepark from "./pages/Skatepark";
import Observer from "./pages/Observer";
import Texture from "./pages/Texture";
import './App.css';


function App() {
  return (
    <Router> 
      <Navbar /> 

      <Routes> 
        <Route path="/" element={<Homepage />} /> 
        <Route path="/pages/Portfolio" element={<Portfolio />} /> 
        <Route path="/morocco" element={<Morocco />} />
        <Route path="/people" element={<People />} />
        <Route path="/italia" element={<Italia />} />
        <Route path="/mothernature" element={<Mothernature />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/blues" element={<Blues />} />
        <Route path="/skatepark" element={<Skatepark />} />
        <Route path="/texture" element={<Texture />} />
        <Route path="/observer" element={<Observer />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;


