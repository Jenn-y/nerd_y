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
      <button type="submit" onClick={() => post.changeStatus("draft")} className="btn btn-danger">Save as a draft</button>
      <button type="submit" onClick={() => post.changeStatus("published")} className="btn btn-success">Publish</button>
    </form>
  )
}
export default PostForm;