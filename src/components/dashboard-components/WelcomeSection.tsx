//  Welcome Section


const WelcomeSection = () => {
  return (
        <section className="welcome-section">
            <div className="welcome-content">
                <h2 className="welcome-title">Welcome Back, John!</h2>
                <p className="welcome-subtitle">Here's your property overview for Sunshine Hostels.</p>
            </div>
            <div className="welcome-image-container">
              <img
                src="https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?w=1380" 
                alt="Property Image"
                className="welcome-image" />
            </div>
        </section>
  )
}

export default WelcomeSection
