import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import NotFound from './components/layout/NotFound'
import Home from './pages/Home'
import './App.css'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Academics from './pages/Academics'
import Contact from './pages/Contact'
import Events from './pages/Events'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Facilities from './pages/Facilities'

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
