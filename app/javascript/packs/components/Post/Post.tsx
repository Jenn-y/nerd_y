import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import PostForm from './PostForm'
import Header from '../Header'
import Footer from '../Footer'

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
    <div>
      <div>
        <Header />
      </div>
      <button type="button" onClick={() => deletePost()}>Delete Post</button>
      <img src={post.main_image} alt="main image" />
      <h1>{post.title}</h1> 
      <p><ReactMarkdown source={post.description} /></p> 
      <button>{post.status}</button>
      {
        editing ? <PostForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    changeStatus={changeStatus}
                    post={post} 
                  /> : <button onClick={startEdit}>Edit Post</button>
      }
      <Footer />
    </div>
  )
}
export default Post