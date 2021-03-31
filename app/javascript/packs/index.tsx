import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import Posts from './components/Blog/Posts'
import NewPost from './components/Blog/NewPost'
import Post from './components/Post/Post'
import { BrowserRouter, Route, Switch } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/posts" component={Posts} />
    <Route path="/post/:id" component={Post} />
    <Route path="/newpost" component={NewPost} />
  </Switch>
  </BrowserRouter>
  , document.body.appendChild(document.createElement('div')),
  )
})
