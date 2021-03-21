import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import PostForm from './PostForm'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: '', description: '', status: 0 })

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

  const handleSubmit = (e) => {
    e.preventDefault()

    const url = "/api/v1/posts"
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    axios.post(url, post)
      .then(response => {
        setPosts([...posts, response.data])
        setPost({ title: '', description: '', status: 0 })
      })
      .catch(() => console.log("An error occured while creating the post"))

  }
  
  const handleChange = (e) => {
    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
  }

  return (
    <div>
      <div className="header">
        <div className="navigation">
          <h3>Add new post!</h3>
          <PostForm 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            post={post}
          />
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
export default Posts