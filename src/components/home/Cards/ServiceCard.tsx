import '../../../css/module.css/Cards.css'

// Service Card
type ServiceCardProps = {
  Icon: String,
  title:String,
  service: String,
  serviceDescription: String
}

const ServiceCard =
  ({Icon, service,title, serviceDescription}:ServiceCardProps) => {
  return (
    <div className='service-card'> 
      <h1> {Icon} </h1>
      <h1> { title } </h1>
      <h2> { service } </h2>
      <p> {serviceDescription} </p>
 
    </div>
  )
}

export default ServiceCard
