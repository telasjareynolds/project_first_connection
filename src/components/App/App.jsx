import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const navigate = useNavigate();

  function navigateToResults(query) {
    // Example navigation logic using React Router
    navigate(`/search-results?query=${encodeURIComponent(query)}`);
  }

  return (
    <div className="page">
      <Header onSearch={navigateToResults} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/food" element={<Food />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
