import ComingSoonLanding from './pages/ComingSoonLanding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegionProvider, useRegion } from './context/RegionContext'
import RegionSelector from './components/RegionSelector'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Science from './pages/Science'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PressKit from './pages/PressKit'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Investor from './pages/Investor'
import NotFound from './pages/NotFound'
import CookieConsent from './components/CookieConsent'

const COMING_SOON = false
function AppContent() {
  const { region, loading } = useRegion()
  if (COMING_SOON) {
    return <ComingSoonLanding />
  }
  if (loading) {
    return (
      <div style={{ position: 'fixed', inset: 0, backgroundColor: '#F4F7F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '48px' }}>🌿</span>
      </div>
    )
  }

  if (!region) {
    return <RegionSelector />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/science" element={<Science />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<PressKit />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <RegionProvider>
      <AppContent />
      <CookieConsent />
    </RegionProvider>
  )
}