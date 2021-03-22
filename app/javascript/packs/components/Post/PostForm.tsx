import * as React from 'react'

const PostForm = (post) => {
  return (
    <form onSubmit={post.handleSubmit}>
      <input onChange={post.handleChange} value={post.post.title} type="text" name="title" placeholder="Title"></input>
      <input onChange={post.handleChange} value={post.post.description} type="text" name="description" placeholder="Write your post here..."></input>
      <button type="submit" onClick={() => post.changeStatus(0)}>Save as a draft</button>
      <button type="submit" onClick={() => post.changeStatus(1)}>Publish</button>
    </form>
  )
}
export default PostForm;