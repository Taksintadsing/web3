
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Innovations from './pages/Innovations';
import Cases from './pages/Cases';
import Future from './pages/Future';
import References from './pages/References';
import Tracking from './pages/Tracking';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_70%)]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/future" element={<Future />} />
          <Route path="/references" element={<References />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
