import * as React from 'react'
import { Link } from "react-router-dom"

const Post1 = () => {
  return (
    <div>
      <div className="header">
        <div className="navigation">
          <Link to="/"><button>Home</button></Link>
        </div>
        <h2>Blog Post #1</h2>
      </div>
      <div className="footer">
        <p>2021   |   Jenny</p>
      </div>
    </div>
  )
}
export default Post1;