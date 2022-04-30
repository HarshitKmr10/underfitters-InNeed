import './scss/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Donate from './components/Donate';
import OurServices from './components/OurServices';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/donate" exact element={<Donate />} />
          <Route path="/our-services" exact element={<OurServices />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
