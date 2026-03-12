import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AlKahfHome from './pages/alkahf/AlKahfHome'
import AlKahfPrivacy from './pages/alkahf/AlKahfPrivacy'
import AlKahfTerms from './pages/alkahf/AlKahfTerms'
import ScrollToTop from './components/ScrollToTop'

function AppLayout() {
  const location = useLocation()
  const isAlKahf = location.pathname.startsWith('/alkahf')

  return (
    <div className="app">
      <ScrollToTop />
      {!isAlKahf && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alkahf" element={<AlKahfHome />} />
        <Route path="/alkahf/privacy" element={<AlKahfPrivacy />} />
        <Route path="/alkahf/terms" element={<AlKahfTerms />} />
      </Routes>
      {!isAlKahf && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
