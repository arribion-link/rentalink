import '../../css/module.css/TeastimonialCards.css'

type TestimonialCardProps = {
    imgPath: String,
    landLordName: String,
    landLordMessage: String
}
const TestimonialCard =
    ({ landLordName, imgPath, landLordMessage }: TestimonialCardProps) => {
  return (
    <div className='testimonial-card'>
          <img
              src={imgPath}
              alt={landLordName}
          />
          <h4>{ landLordName }</h4>
          <p>{ landLordMessage }</p>
    </div>
  )
}

export default TestimonialCard
