import * as React from 'react'

const PostForm = (post) => {
  return (
    <form onSubmit={post.handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Title:</label>
        <input onChange={post.handleChange} value={post.post.title} 
          type="text" name="title" placeholder="Title" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Content:</label>
        <textarea className="form-control" rows={10}
          onChange={post.handleChange} value={post.post.description}
          name="description" placeholder="Write your post here...">
        </textarea>
      </div>
      <button type="submit" onClick={post.handleReturn} className="btn btn-success btn-lg btn-block">Submit</button>
    </form>
  )
}
export default PostForm;