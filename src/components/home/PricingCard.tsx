// import React from 'react'

import '../../css/module.css/pricingCard.css'

// Pricing Card
type PricingCardProps = {
    Heading: String,
    UnitNumber: String,
    features: String[]
}

const PricingCard =
    ({Heading, UnitNumber, features}: PricingCardProps) => {
  return (
    <div className='pricing-card'>
          <h2>{Heading}</h2>
          <h3>{UnitNumber}</h3>
          <ul>
             {/* {features.map(features:String, index:String) => (<li key={index}>{features}</li>))} */}
          </ul>
    </div>
  )
}

export default PricingCard
