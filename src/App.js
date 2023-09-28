import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Experience from "./components/Experience";
// import Education from "./components/Education.js";
import Projects from "./components/Projects";
// import Certificates from "./components/Certificates";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/experience" element={<Experience />} />
        {/* <Route exact path="/education" element={<Education />} /> */}
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="/certificates" element={<Certificates />} /> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
