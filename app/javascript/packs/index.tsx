import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import Post1 from './components/Post1'
import { BrowserRouter, Route, Switch } from "react-router-dom";


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/post1" component={Post1} />
  </Switch>
  </BrowserRouter>
  , document.body.appendChild(document.createElement('div')),
  )
})
