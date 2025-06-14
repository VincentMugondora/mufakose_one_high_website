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
import Staff from './pages/Staff'
import Calendar from './pages/Calendar'
import Policies from './pages/Policies'
import OLevelSubjects from './pages/OLevelSubjects'
import ALevelSubjects from './pages/ALevelSubjects'
import Extracurricular from './pages/Extracurricular'
import SciencePage from './pages/SciencePage'
import MathematicsPage from './pages/MathematicsPage'
import LanguagesPage from './pages/LanguagesPage'

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
            <Route path="/staff" element={<Staff />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/academics/o-level-subjects" element={<OLevelSubjects />} />
            <Route path="/academics/a-level-subjects" element={<ALevelSubjects />} />
            <Route path="/academics/extracurricular" element={<Extracurricular />} />
            <Route path="/academics/departments/science" element={<SciencePage />} />
            <Route path="/academics/departments/mathematics" element={<MathematicsPage />} />
            <Route path="/academics/departments/languages" element={<LanguagesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


