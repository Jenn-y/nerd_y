import * as React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="welcome-container">
      <div>
        <h1>HOME</h1>
        <Link to="/blog"><button>Read Posts</button></Link>
      </div>
      <div className="footer">
        <p>2021   |   Jenny</p>
      </div>
    </div>
  )
}
export default App;