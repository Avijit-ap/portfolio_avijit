import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
<BrowserRouter>      
<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
