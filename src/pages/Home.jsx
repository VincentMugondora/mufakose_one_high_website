import About from '../components/home/About'
import AdvantagesCards from '../components/home/Advantages'
import Banner from '../components/home/Banner'
import Departments from '../components/home/Departments'
import Gallery from '../components/home/Gallery'
import LatestVideo from '../components/home/LatestVideo'
import EnrollmentSection from '../components/home/EnrollmentSection'
import BlogSection from '../components/home/BlogPosts'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About />
      <Departments />
      <LatestVideo />
      <AdvantagesCards />
      <Gallery />
      <EnrollmentSection />
      <BlogSection />
      <Testimonials />
    </div>
  )
}

export default Home 