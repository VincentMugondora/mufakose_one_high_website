import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import NotFound from './components/layout/NotFound'
import Home from './pages/Home'
import './App.css'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Home />} />
            <Route path="/student-life" element={<Home />} />
            <Route path="/achievements" element={<Home />} />
            <Route path="/facilities" element={<Home />} />
            <Route path="/arts-culture" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
