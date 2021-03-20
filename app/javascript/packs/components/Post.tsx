import * as React from 'react'

const Post = ({post}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button>{post.status}</button>
    </div>
  )
}

export default Post;