import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = (props) => {
  const [post, setPost] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = props.match.params.id
    const url = `/api/v1/posts/${id}`

    axios.get(url)
      .then(response => {
        if(response){
          setPost(response.data)
          setLoaded(true)
        }
        throw new Error("Network response failed.")
      })
      .catch(() => console.log("An error occured while fetching the post"))
  }, [])

  return (
    <div>
      <h1>post.title</h1> 
      <p>post.description</p> 
      <button>post.status</button>
    </div>
  )
}
export default Post