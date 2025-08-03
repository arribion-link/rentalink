import PricingCard from "../Cards/PricingCard"
import { pricingFeature } from "../../../types/pricingFeatures"

const Pricing = () => {
  return (
    <div>
         {/* PRICING PLANS */}
      <section className='pricing-section'>
        <h1>Pricing</h1>
        <h2>Affordable Plans For <br /> <span>Every Need</span></h2>
        <p>
          Choose the perfect plan for your rental management form starter to Enterprice.
          Our pricing tier are designed to offer flexibility and Value, ensuring you get the best 
          out of your properties.
        </p>
        <div className='pricing-container'>
          <PricingCard
            Heading="Starter Plan (Free)"
            UnitNumber="For LandLords with 1 - 5 Units"
            features={pricingFeature.starter}
            type="pro"
            />
          <PricingCard
            Heading="Essential Plan (KES 449/Month)"
            UnitNumber="For LandLords with 6 - 20 Units"
            features={pricingFeature.essential}
            type="pro"
            />
          <PricingCard
            Heading="Pro Plan (KES 999/Month )"
            UnitNumber="For LandLords with 21 - 50 Units"
            features={pricingFeature.pro}
            type="pro"
          />
          <PricingCard
            Heading="Enterprice Plan (Custom Pricing)"
            UnitNumber="For LandLords with 51+ Units"
            features={pricingFeature.Enterprise}
            type="pro"
          />
        </div>
      </section>
    </div>
  )
}

export default Pricing
