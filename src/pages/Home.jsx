import About from '../components/home/About'
import AdvantagesCards from '../components/home/Advantages'
import Banner from '../components/home/Banner'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About />
      <AdvantagesCards />
    </div>
  )
}

export default Home 