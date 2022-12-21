import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';


function App() {
  return (

<div>
    <div className="App">

      <div id="backSquare"></div>
      <div id="frontSquare"></div>
      
    </div>


  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
      </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
