import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import '../css/Posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = "/api/v1/posts"

    axios.get(url)
      .then(response => {
        if(response){
          setPosts(response.data)
        }
        throw new Error("Network response failed.")
      })
      .catch(() => console.log("An error occured while fetching the posts"))
  }, [])

  return (
    <>
      <div className="heading">
        <Header />
      </div>
      <div className="jumbotron">
        <Link to="/newpost" className="lead">
          <button type="button" className="btn-new">New Post</button>
        </Link>
      </div>
      <div className="row card-deck">
        { posts.map(post => {
          return (
            <>
            <Post key={post.id} post={post} />
            </>
          )
        })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
export default Posts