// import React from 'react'
import ReadBlog from "./buttons-componts/ReadBlog"
import '../../css/module.css/BlogCard.css'

type BlogCardProps = {
    blogTitle: String,
    blogAuthor: String,
    updatedOn: String,
    blogPreview:String
}

const BlogCard =
    ({blogTitle, blogAuthor, updatedOn, blogPreview}:BlogCardProps) => {
  return (
    <div className='blog-card'>
          <img
              src=""
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
              <ReadBlog/>
          </div>
    </div>
  )
}

export default BlogCard
