import TestimonialCard from "../Cards/TestimonialCard"
import TestimonialImage from '../../../assets/landlordTestimonialSectionImage.png'
const Testimonial = () => {
  return (
    <div>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <TestimonialCard
            landLordName="John Doe"
            landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
          <TestimonialCard
            landLordName="Jeff Doe"
             landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
          <TestimonialCard
            landLordName="Jane Doe"
            landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
          <TestimonialCard
            landLordName="Smith Doe"
            landLordMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos, molestias error voluptatibus ipsum accusantium! Obcaecati harum asperiores, molestias dicta voluptatibus dolores corporis? Similique explicabo accusantium velit soluta necessitatibus neque."
          />
        </div>
        <div>
          <img
            src={TestimonialImage}
            alt="testimonial image"
            className="testimonial-image"
          />
        </div>
      </section>
    </div>
  )
}

export default Testimonial
