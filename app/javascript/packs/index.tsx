import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import Blog from './components/Blog'
import { BrowserRouter, Route, Switch } from "react-router-dom";


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/blog" component={Blog} />
  </Switch>
  </BrowserRouter>
  , document.body.appendChild(document.createElement('div')),
  )
})
