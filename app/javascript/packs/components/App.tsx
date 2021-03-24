import * as React from 'react'
import { Link } from 'react-router-dom'
import './css/App.css'
import Header from './Header'

const App = () => {
  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header />
      <main role="main" className="inner cover">
        <h1 className="cover-heading">WELCOME.</h1>
        <p className="lead">"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"</p>
        <p className="lead">
        <Link to="/posts" className="btn btn-lg btn-secondary">Read more</Link>
        </p>
      </main>
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Jenn | 2021</p>
        </div>
      </footer>
    </div>
  )
}
export default App;