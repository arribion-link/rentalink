// import React from 'react'
import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
      <div>
          <Link to={'/'}>
              <h3>Go back Home</h3>
          </Link>
       <h1>404 page not found</h1>
    </div>
  )
}

export default PageNotFound
