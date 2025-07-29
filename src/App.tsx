// Styles
import './css/App.css'

// imports
import Header from "./components/home/Partials/Header"
import Footer from "./components/home/Partials/Footer"
import ctaimage from './assets/sales-about-G-agent.jpg'

// Cards Imports
import PricingCard from "./components/home/PricingCard"
import WhyRentaLink from "./components/home/WhyRentaLink"
import TestimonialCard from './components/home/TestimonialCard'
import ServiceCard from './components/home/ServiceCard'
import BlogCard from './components/home/BlogCard'

// service data import
import { pricingFeature  } from "./types/pricingFeatures"

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* CALL TO ACTION SECTION  */}
      <section className="introduction-section">
        <div>
          <div className='me'>
              <div className='cta-container'>

                <h1>
                  Kenya's Smart Rental Property Platform
                  - List ,Manage, or Find a House With Ease
                </h1>
                <h2>
                  All-in-one rental solution for landlords and tenants.
                  Manage rental properties or discover verified vacant
                  houses near universities and towns across Kenya.
                </h2>
      
                <div className='cta-btn-container'>
                  <a href=""><button>Manage Properties</button></a>
                  <a href=""><button>Search for Houses</button></a>
                </div>
              </div>
                {/* <div className='cta-seo-optimization-features-container'>
                  <h3 className='cta-core-features-heading'>Core Features</h3>
                  <ul>
                    <h3>Post rental propeties in Nairobi, Eldoret, Mombasa,Kisumu & More</h3>
                    <h3>Easy LandLoard Dashboard: Rental Tracking, Maintanance & tenants records</h3>
                    <h3>Find student-Friendly rentals near KYU, Ku, UoN, Moi, Egerton & Others</h3>
                    <h3>Automated rent reminders and reporting tools</h3>
                    <h3>Verified Listings and reporting</h3>
                  </ul>
                </div> */}
              <div>
          </div>
            {/* <img
              src={ctaimage}
              alt=""
              className='cta-image'
            /> */}
          </div>
        </div>
      </section>


      {/* HOW IT WOKS SECTION */}
      <section>
        <h1>How it Works</h1>

      </section>


      {/* KEY SERVICES / FEATURES  SECTION */}
      <section className='our-services-section'>
        <h1>Our Services</h1>
        <div className="ervices-container">

            <ServiceCard
              Icon="=> ICON"
              title="House Listing"
              service="Smart House Listing to the Public"
              serviceDescription="Easily upload and manage rental units with images, prices, and Availability.
              Help tenants discover your properties faster with a location-based listing system optiomised for search engine"
            />
            <ServiceCard
              Icon="=> ICON"
              title="Payment Tracing"
              service="Rent Collection & Payment Logs"
              serviceDescription="Monitor rent payment in real time, send automated reminders, and Maintain transparent records. 
              Stay Organized and reduce missed payments with built-in digital tracking tools."
            />
            <ServiceCard
              Icon="=> ICON"
              title="Tenant Communication"
              service="Seemless LandLord-Tenant Messaging"
              serviceDescription="Communicate directly with tenants through a secure in-app messaging system.
              Reduce delays, documents conversitions, and resolve requests efficiently while keeping records for proprty upkeep."
            />
            <ServiceCard
              Icon="=> ICON"
              title="Maintenance Management"
              service="Smart Maintenance Requests"
              serviceDescription="Allow tenants to Submit maintanance issues with photos and notes.
              Track and resolve requests efficietly while keeping records for property upkeep"
            />
            <ServiceCard
              Icon="=> ICON"
              title="Vacacy Search"
              service="CountryWide House Finder"
              serviceDescription="."
            />
            <ServiceCard
              Icon="=> ICON"
              title="Rental Analytics"
              service="Gain insight into occupancy rates"
              serviceDescription="."
            />
            <ServiceCard
              Icon="=> ICON"
              title="Tenants Management"
              service="Keeping Detailed Tenant Records"
              serviceDescription="."
            />
        </div>

      </section>


      {/* WHY US SECTION  */}
      <section className='why-choose-rentalink-section'>
        <h1>Why Choose RentaLink?</h1>
        <br />
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
      </section>


      {/* PRICING PLANS */}
      <section className='pricing-section'>
        <h1>Pricing</h1>
        <div className='pricing-container'>
          <PricingCard
            Heading="Starter Plan (Free)"
            UnitNumber="For LandLords with 1 - 5 Units"
            features ={pricingFeature.starter}
            
          />
          <PricingCard
            Heading="Essential Plan (KES 449/Month)"
            UnitNumber="For LandLords with 6 - 20 Units"
            features ={pricingFeature.essential}
          />
          <PricingCard
            Heading="Pro Plan (KES 999/Month )"
            UnitNumber="For LandLords with 21 - 50 Units"
             features ={pricingFeature.pro}
          />
          <PricingCard
            Heading="Enterprice Plan (Custom Pricing)"
            UnitNumber="For LandLords with 51+ Units"
            features ={pricingFeature.Enterprise} 
          />
          </div>
      </section>


      {/* LANDLORDS TESTIMONNIALS SECTION */}
      <section>

        <div>
          <TestimonialCard
            landLordName="John Doe"
            landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
          <TestimonialCard
            landLordName="Jeff Doe"
             landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
          <TestimonialCard
            // imgPath={path}
            landLordName="Jane Doe"
            landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
          <TestimonialCard
            landLordName="Smith Doe"
            landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
        </div>

      </section>


      {/* FAQs SECTION */}
      <section>
        <h1>FAQ's</h1>

      </section>

      {/* BLOG / INSIGHT PREVIEWS */}
      <section className='blog-section'>
        <h1>Experts Insights</h1>
        <div className='Blog-Container'>
          <BlogCard
            blogTitle="Real Estate trends and insights"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
          <BlogCard
            blogTitle="Real Estate trends and insights"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
          <BlogCard
            blogTitle="Real Estate trends and insights"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
           <BlogCard
            blogTitle="Real Estate trends and insights"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
        </div>
      </section>
    
      
      {/* CALL TO ACTION (REPEAT) */}
      <section className='footer-cta-section'>
        <div className='footer-cta-section-container'>
          <h1>Ready To Simplify Property Management?</h1>
          <p>
            Join thousands of landlords and tenamts
            using RentaLink to manage,post Vacancies,
            and streamline payments - all in one place
          </p>
          <button>Get Started For Free</button>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default App
