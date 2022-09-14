import Navbar from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <Router>  
      <Navbar/>
      <Hero/>
    </Router>
      

  );
}

export default App;
