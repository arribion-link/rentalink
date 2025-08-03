import HowItWorksCard from "../Cards/HowItWorksCard"
import HowItWorksLandlordSteps from "../Cards/min-cards/steps.Landlord"
import HowItWorksTenantsSteps from "../Cards/min-cards/steps.Tenant"
import image from '../../../assets/how-it-works-image-two.png'
import '../../../css/App.css'

const HowItWorks = () => {

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-flex how-it-works-flex-vertical">
        <div className="how-it-works-header">
          <h1>How It Works</h1>
          <h2>Effortless Property Management Step by Step</h2>
          <p>
            From listing your Properties to receiving payments -
            see how our platform simplifies every stage of renting
            for both landlords and tenants who are searching for properties.
          </p>
        </div>
        <div className="how-it-works-flex how-it-works-flex-horizontal">
          <div className="how-it-works-card">
            <HowItWorksCard
              person="LandLord"
              shared={<HowItWorksLandlordSteps/>}
            />
          </div>
          <div className="how-it-works-image-wrapper">
            <img
              src={image}
              alt="How it works illustration"
              className="how-it-works-img"
            />
          </div>
          <div className="how-it-works-card">
            <HowItWorksCard
              person="Tenants"
              shared={<HowItWorksTenantsSteps/>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
