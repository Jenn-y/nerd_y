import * as React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Nerdy</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/posts" className="nav-link">Posts</Link>
          <a className="nav-link" href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}
export default Header