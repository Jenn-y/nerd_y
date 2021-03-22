import * as React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button>{post.status}</button>
      <Link to={`/post/${post.id}`} className="btn custom-button">View Post</Link>
    </div>
  )
}

export default Post;