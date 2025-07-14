// LIST OF THINGS INSTALLED 
// npm install --save-dev @vitejs/plugin-react
// npx browserslist@latest --update-db



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ResourcesPage from './pages/ResourcesPage';
import BookingPage from './pages/BookingPage';
import StorePage from './pages/StorePage';
import ContactPage from './pages/ContactPage';
import EggDonorProgramPage from './pages/EggDonorProgramPage';
import SurrogacyProgramPage from './pages/SurrogacyProgramPage';
import BecomeDonorSurrogatePage from './pages/BecomeDonorSurrogatePage';
import ConceptionBootcampPage from './pages/ConceptionBootcampPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/egg-donor-program" element={<EggDonorProgramPage />} />
            <Route path="/surrogacy-program" element={<SurrogacyProgramPage />} />
            <Route path="/become-donor-surrogate" element={<BecomeDonorSurrogatePage />} />
            <Route path="/conception-bootcamp" element={<ConceptionBootcampPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;