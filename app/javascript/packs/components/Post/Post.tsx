import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostForm from './PostForm'

const Post = (props) => {
  const [post, setPost] = useState({ title: '', description: '', status: 0 })
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const id = props.match.params.id
    const url = `/api/v1/posts/${id}`

    axios.get(url)
      .then(response => {
        if(response){
          setPost(response.data)
        }
        throw new Error("Network response failed.")
      })
      .catch(() => console.log("An error occured while fetching the post"))
  }, [])

  const startEdit = () => {
    setEditing(true)
  }

  const handleChange = (e) => {
    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = props.match.params.id
    const url = `/api/v1/posts/${id}`
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    axios.put(url, post)
      .then(response => {
        setPost(response.data)
        window.location.reload()
      })
      .catch(() => console.log("An error occured while creating the post"))

  }

  const changeStatus = (e) => {
    setPost({title: post.title, description: post.description, status: e})
  }

  return (
    <div>
      <h1>{post.title}</h1> 
      <p>{post.description}</p> 
      <button>{post.status}</button>
      {
        editing ? <PostForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    changeStatus={changeStatus}
                    post={post} 
                  /> : <button onClick={startEdit}>Edit Post</button>
      }
    </div>
  )
}
export default Post