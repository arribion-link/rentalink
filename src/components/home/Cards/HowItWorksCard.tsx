import '../../../css/module.css/Cards.css'

 
type HowItWorksCardProps = {
  person: String
  shared? : React.ReactNode
}

const HowItWorksCard =
  ({person, shared}: HowItWorksCardProps) => {
  return (
      <div className="how-it-works-card">
        <div>
          <img
            src=""
            alt=""
          />
        <h2>{ person }</h2>
      </div>
      <div>
        { shared }
      </div>
      </div>
  )
}

export default HowItWorksCard
