import ServiceCard from "../Cards/ServiceCard"

const Services = () => {
    return (
        <div>
            <section className='our-services-section'>
                <h1>Our Services</h1>
                <h2>Smart Solutions for Landlords & Renters</h2>
                <p>Discover intuitive tools to manage rental units, track payments, and connect with tenants - all in one seamlesss dashbord.</p>
                <div className="services-container">
                    <ServiceCard
                    Icon="ICON"
                    title="House Listing"
                    service="Smart House Listing to the Public"
                    serviceDescription="Easily upload and manage rental units with images, prices, and Availability.
                    Help tenants discover your properties faster with a location-based listing system optiomised for search engine"
                    />
                    <ServiceCard
                    Icon="ICON"
                    title="Payment Tracking"
                    service="Rent Collection & Payment Logs"
                    serviceDescription="Monitor rent payment in real time, send automated reminders, and Maintain transparent records. 
                    Stay Organized and reduce missed payments with built-in digital tracking tools."
                    />
                    <ServiceCard
                    Icon="ICON"
                    title="Tenant Communication / Management"
                    service="Seemless LandLord-Tenant Messaging"
                    serviceDescription="Communicate directly with tenants through a secure in-app messaging system.
                    Reduce delays, documents conversitions, and resolve requests efficiently while keeping records for proprty upkeep."
                    />
                    <ServiceCard
                    Icon="ICON"
                    title="Maintenance Management"
                    service="Smart Maintenance Requests"
                    serviceDescription="Allow tenants to Submit maintanance issues with photos and notes.
                    Track and resolve requests efficietly while keeping records for property upkeep"
                    />
                    <ServiceCard
                    Icon="ICON"
                    title="Vacacy Search"
                    service="CountryWide House Finder"
                    serviceDescription="."
                    />
                    <ServiceCard
                    Icon="ICON"
                    title="Rental Analytics"
                    service="Gain insight into occupancy rates"
                    serviceDescription="."
                    />
                </div>
            </section>
        </div>
  )
}

export default Services
