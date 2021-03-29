import * as React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import '../css/PostCard.css'

const Post = (post) => {
  return (
    <div className="col-lg-4 col-md-6 mb-2-6">
      <article className="card card-style2">
        <img className="card-img-top rounded-top" src={post.post.thumb_image} alt="main image" />
        <div className="card-body">
          <div className="flex-container">
            <h3 className="card-title">{post.post.title}</h3>
            <button type="button" className="btn btn-outline-warning">{post.post.status}</button>
          </div>
          <p className="card-text">
            <ReactMarkdown source={post.post.description} />
            <div className="fadeout"></div>
          </p>
        </div>
        <div className="card-footer">
          <Link to={`/post/${post.post.id}`}><button type="button" className="btn btn-primary btn-lg btn-block">Read More</button></Link>
        </div>
      </article>
    </div>
  )
}

export default Post;