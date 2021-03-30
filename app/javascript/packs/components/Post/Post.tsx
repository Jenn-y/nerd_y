import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import PostForm from './PostForm'
import Header from '../Header'
import Footer from '../Footer'
import '../css/PostView.css'

const Post = (props) => {
  const [post, setPost] = useState({ title: '', description: '', status: 0, main_image: "https://via.placeholder.com/500x350" })
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
    setPost({title: post.title, description: post.description, status: e, main_image: "https://via.placeholder.com/500x350" })
  }

  const deletePost = () => {
    const id = props.match.params.id
    const url = `/api/v1/posts/${id}`
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    axios.delete(url)
      .then(response => {
        location.replace(`/posts`)
      })
      .catch(() => console.log("An error occured while deleting the post"))
  }

  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <div className="space"></div>
      {
        editing ? <PostForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    changeStatus={changeStatus}
                    post={post} 
                  /> : 
                  <div>
                    <img src="https://via.placeholder.com/500x350" alt="main image" />
                    <h1 className="title">{post.title}</h1> 
                    <p className="description"><ReactMarkdown source={post.description} /></p> 
                    <button className="btn btn-warning">{post.status}</button>
                    <button type="button" onClick={() => deletePost()} className="btn btn-danger">Delete Post</button>
                    <button onClick={startEdit} className="btn btn-primary">Edit Post</button>
                  </div>
      }
      <Footer />
    </div>
  )
}
export default Post