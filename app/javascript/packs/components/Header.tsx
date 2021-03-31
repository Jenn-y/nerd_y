import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Nerdy</h3>
        <nav className="nav nav-masthead justify-content-center">
          <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/posts" className="nav-link" activeClassName="active">Posts</NavLink>
          <a className="nav-link" href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}
export default Header