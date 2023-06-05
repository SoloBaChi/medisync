import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import About from './pages/About';
import Services from './pages/Services';
import Web3 from './pages/Web3';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web3" element={<Web3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App