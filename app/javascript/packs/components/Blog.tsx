import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'

const Blog = () => {
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
    <div>
      <div className="header">
        <div className="navigation">
          <Link to="/"><button>Home</button></Link>
        </div>
        { posts.map(post => {
          return (
            <Post key={post.id} post={post} />
          )
        })}
      </div>
      <div className="footer">
        <p>2021   |   Jenny</p>
      </div>
    </div>
  )
}
export default Blog