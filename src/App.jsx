import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Contactus from './pages/Contactus';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
