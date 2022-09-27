import Navbar from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import YoutubeEmbed from './components/Videos';

function App() {
  return (
    <Router>  
      <Navbar/>
      <Hero/>

        <Routes>
          <Route path="/videos" component={YoutubeEmbed}>
          </Route>

        </Routes>
      
    </Router>

    
      

  );
}

export default App;
