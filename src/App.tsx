import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CursorGlow } from './components/CursorGlow';
import { FluxBackground } from './components/FluxBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToAnchor } from './components/ScrollToAnchor';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white font-sans selection:bg-white/20">
        <FluxBackground />
        <CursorGlow />
        <Navbar />
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
