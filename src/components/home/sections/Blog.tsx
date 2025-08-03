import BlogCard from "../Cards/BlogCard"
import Blog1 from "../../../assets/blog1.jpg"
import Blog2 from "../../../assets/blog2.jpg"
import Blog3 from "../../../assets/blog3.jpg"
import Blog4 from "../../../assets/blog4.jpg"
const Blog = () => {
  return (
    <div>
         {/* BLOG / INSIGHT PREVIEWS */}
      <section className='blog-section'>
        <h1>Experts Insights</h1>
        <h2>Rental Insights & Smart Living Tips </h2>
        <p>Stay informed with experts tips, landlords guides, and housing trends designed to elevate your property journy</p>
        <div className='Blog-Container'>
          <BlogCard
            Img={Blog1}
            blogTitle="Real Estate trends and insights"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
          <BlogCard
            Img={Blog2}
            blogTitle="Real Estate  Investemt Tips"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
          <BlogCard
            Img={Blog3}
            blogTitle="Guide for Home ownership in kenya"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
          <BlogCard
            Img={Blog4}
            blogTitle="Real Estate trends and insights"
            blogAuthor="John Doe"
            updatedOn="7-29-2025"
            blogPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci autem ullam eius ratione doloremque saepe facere facilis temporibus, omnis minima eveniet aliquam repellendus eos suscipit animi officiis nostrum amet."
          />
        </div>
      </section>
    </div>
  )
}

export default Blog
