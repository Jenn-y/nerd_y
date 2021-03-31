import React, { useState, useEffect } from 'react'
import PostForm from './PostForm'
import axios from 'axios'
import Header from '../Header'
import '../css/PostView.css'

const NewPost = () => {
  const [post, setPost] = useState({ title: '', description: '', status: 0 })

  const handleSubmit = (e) => {
    e.preventDefault()

    const url = "/api/v1/posts"
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    axios.post(url, post)
      .then(response => {
        setPost({ title: '', description: '', status: 0 })
      })
      .catch(() => console.log("An error occured while creating the post"))

  }
  
  const handleChange = (e) => {
    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
  }

  const handleReturn = () => {
    location.replace(`/posts`)
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="space"></div>
      <h2>Add New Post</h2>
      <PostForm 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleReturn={handleReturn}
        post={post}
      />
    </div>
  )
}
export default NewPost