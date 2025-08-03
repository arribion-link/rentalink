import introductionImage from '../../../assets/introduction-image.png'
import '../../../css/App.css'

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className='cta-container'>
        <div className='cta-text'>
            <h1>Kenya's Smart Rental Property Platform - List ,Manage, or Find a House With Ease</h1>
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

        <div className='cta-image-container'>
          <img
            src={introductionImage}
            alt=""
            className='cta-image'
            />
        </div>
      </div>
          <div className="cta-overlay">
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
          </div>
      </section>
  )
}

export default Introduction
