import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Parents from "../Parents/Parents";
import Professionals from "../Professionals/Professionals";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import Privacy from "../Privacy/Privacy";
import Food from "../Food/Food";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/food" element={<Food />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
