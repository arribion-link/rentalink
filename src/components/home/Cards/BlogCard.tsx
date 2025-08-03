import '../../../css/module.css/Cards.css'

type BlogCardProps = {
    Img:string
    blogTitle: String,
    blogAuthor: String,
    updatedOn: String,
    blogPreview:String
}

const BlogCard =
    ({Img, blogTitle, blogAuthor, updatedOn, blogPreview}:BlogCardProps) => {
  return (
    <div className='blog-card'>
          <img
              src={Img}
              alt="blog Thumbnail"
              className="blog-thumbnail"
          />
          <div className="overlay">
          </div>
          <div>
              <h1 className="title">{blogTitle}</h1>
              <p className="author-line">
                  <span>{blogAuthor}</span> | 
                  <span> { updatedOn }</span>
              </p>
              <p className="blog-preview">{ blogPreview }</p>
          </div>
    </div>
  )
}

export default BlogCard
