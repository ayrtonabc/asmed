import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import AgeGroups from './components/AgeGroups';
import HearingAids from './components/HearingAids';
import Blog from './components/Blog';
import Funding from './components/Funding';
import EarEducation from './components/EarEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminProducts from './components/admin/AdminProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <main>
                <Hero />
                <AboutUs />
                <Services />
                <AgeGroups />
                <HearingAids />
                <Blog />
                <Funding />
                <EarEducation />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;