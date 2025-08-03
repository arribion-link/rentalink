import WhyRentaLink from "../Cards/WhyRentaLink"
import Image from '../../../assets/why-choose-us-section-image.png'
import '../../../css/App.css'

const WhyChooseUs = () => {
  return (
      <div>
        <section className='why-choose-rentalink-section'>
              <h1>Why Choose RentaLink?</h1>
              <h2>Built For LandLords Trusted by Tenants</h2>
              <p>Our Platform is Tailoired for simplicity, trust and efficiecy  -  empowering you focus on people, not paperWork</p>
              <br />
              <div className="why-choose-us-content-container">
                    <div className="why-rentalink-container">
                        <WhyRentaLink
                            heading="Made For Kenyan Market"
                            description=
                            "From M-pesa payment to cumpose-based listing filters, everything is tailored for local needs"
                        />
                        <WhyRentaLink
                            heading="Simple, Powerful Dashboard"
                            description=
                            "Manage properties, payments, and tenants from one clean analytical interface  - no tech skillsa needed"
                        />
                        <WhyRentaLink
                            heading="Trusted by Students & Agents"
                            description=
                            "We connect landlords directly to thousands of verified users actively searching for housing."
                        />
                        <WhyRentaLink
                            heading="Affordable & Transparent"
                            description=
                            "No hidden fees. You only pay when you earn, with optional premium tools to grow faster."
                        />
                        <WhyRentaLink
                            heading="Real-Time Support & Update"
                            description=
                            "Faster customer support, regular feature updates, and secure data handling - so you stay focused on what matters."
                        />
                    </div>
                    <div>
                        <img
                            src={Image}
                            alt=""
                            className="why-choose-us-image"
                        />
                    </div>
              </div>
        </section>
    </div>
  )
}

export default WhyChooseUs
