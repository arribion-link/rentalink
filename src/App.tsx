import './css/App.css'
// Partials
import Header from "./components/home/Partials/Header"
import Footer from "./components/home/Partials/Footer"
// sections
import Introduction from './components/home/sections/Introduction'
import TrustedBy from './components/home/sections/TrustedBy'
import HowItWorks from './components/home/sections/HowItWorks'
import Services from './components/home/sections/Services'
import WhyChooseUs from './components/home/sections/WhyChooseUs'
import Pricing from './components/home/sections/Pricing'
import Testimonial from './components/home/sections/Testimonial'
import FAQs from './components/home/sections/FAQs'
import Blog from './components/home/sections/Blog'
import FooterCTA from './components/home/sections/FooterCTA'

function App() {
  return (
     <>
        <Header />
          <Introduction/>
          <TrustedBy />
          <HowItWorks />
          <Services />
          <WhyChooseUs />
          <Pricing />
          <Testimonial />
          <FAQs />
          <Blog />
          <FooterCTA/>
        <Footer/>
    </>
  )
}

export default App
