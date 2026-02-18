
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy loading for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SpiritualLeader = lazy(() => import('./pages/SpiritualLeader'));
const Activities = lazy(() => import('./pages/Activities'));
const Participate = lazy(() => import('./pages/Participate'));
const Transparency = lazy(() => import('./pages/Transparency'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-stone-50">
            <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/spiritual-leader" element={<SpiritualLeader />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
