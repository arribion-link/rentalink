

type WhyRentaLinkProps = {
    heading: String,
    description:String
}

const WhyRentaLink = ({ heading, description}: WhyRentaLinkProps) => {
  return (
    <div className='why-choose-rentalink-card'>
          <h3>{heading}</h3>
          <p>{description}</p>
    </div>
  )
}

export default WhyRentaLink
