import About from '../components/home/About'
import AdvantagesCards from '../components/home/Advantages'
import Banner from '../components/home/Banner'
import Departments from '../components/home/Departments'
import LatestVideo from '../components/home/LatestVideo'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About />
      <Departments />
      <LatestVideo />
      <AdvantagesCards />
    </div>
  )
}

export default Home 