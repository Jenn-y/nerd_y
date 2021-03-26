import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import axios from 'axios'

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
    <div>
      <h3>Add new post!</h3>
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