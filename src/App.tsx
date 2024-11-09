import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Prices from './pages/Prices/Prices';
import Topics from './pages/Topics/Topics';
import ContactUs from './pages/ContactUs/ContactUs';
import { ProjectProvider } from './context/ProjectContext';
import Nav from './components/Navbar/MobileNav';
import Loading from './components/Loading';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  const [loading, setLoading] = useState(true);

  // Simulate an initial loading delay (e.g., for API requests or large assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 4000); // 2 seconds for example

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Show loading component if still loading
  }

  return (
    <ProjectProvider >
      <Router  >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        <Nav  />
      </Router>
    </ProjectProvider>
  );
};

export default App;
