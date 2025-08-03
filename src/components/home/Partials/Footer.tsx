// Footer
import '../../../css/module.css/Footer.module.css'

const Footer = () => {
  const arribionStyle = {
    textAlign: "center"
  }
  return (
    <footer>
      <hr className='mark-footer' />
      <div className="footer-container">

        <div>
          <a href="#">
            <img
              src=""
              alt="rentalink logo"
            />
            <h1>RentaLink.</h1>
          </a>
        </div>

        <div>
          <nav>
            <h1>Quick Links</h1>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Company</a></li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="social-icons">
            linkedIn
            facebook
            X
          </div>
        </div>
        <hr /><br /><br />
        <div style={arribionStyle}>
          <p>&copy; RentaLink. All Rights Reserved.</p>
          <p>Powered By: <a href="https://arribion.vercel.app" target='-blank'>Arribion Technologies Limited.</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
