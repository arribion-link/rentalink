// Footer
import '../../../css/module.css/Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a href="#">
          <img
            src=""
            alt="rentalink logo"
          />
          <h1>RentaLink.</h1>
        </a>
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
        <div className="social-icons">
          linkedIn
          facebook
          X
        </div>

        <p>&copy; RentaLink. All Rights Reserved.</p>
        <hr />
        <p>Powered By: <a href="#">Arribion Technologies Limited.</a></p>
      </div>
    </footer>
  )
}

export default Footer
