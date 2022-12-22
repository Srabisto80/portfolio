import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import SkillList from './Components/SkillList';


function App() {
  return (

<div>
    <div className="App">



    </div>


  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<SkillList />} />
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
