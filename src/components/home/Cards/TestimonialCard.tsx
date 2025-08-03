import '../../../css/module.css/Cards.css'

type TestimonialCardProps = {
    landLordName: String,
    landLordMessage: String
}
const TestimonialCard =
    ({ landLordName, landLordMessage }: TestimonialCardProps) => {
  return (
    <div className='testimonial-card'>
          <img
              src=""
              alt=""
          />
          <h4>{ landLordName }</h4>
          <p>{ landLordMessage }</p>
    </div>
  )
}

export default TestimonialCard
