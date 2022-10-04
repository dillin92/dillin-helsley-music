import Navbar from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Videos from './components/Videos';

function App() {
  return (
    <Router>  
      <Navbar/>
      <Hero/>
      <Videos/>    
    </Router>

    
      

  );
}

export default App;
