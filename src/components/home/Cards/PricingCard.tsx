import '../../../css/module.css/Cards.css'
import Button from '../client.componets/PricingButton'

// Pricing Card
type PricingCardProps = {
    type?:  String
    Heading: String,
    UnitNumber: String,
    features: String[]
}

const PricingCard =
  ({ type, Heading, UnitNumber, features }: PricingCardProps) => {
      const isPro = type === "pro"
  return (
    <div className='pricing-card'>
          <h2>{Heading}</h2>
      <h3>{UnitNumber}</h3>
      <hr />
      <ul>
        {features.map((features, index) => (<li key={index}>{features}</li>))}
      </ul>
      <Button/>
    </div>
  )
}

export default PricingCard
