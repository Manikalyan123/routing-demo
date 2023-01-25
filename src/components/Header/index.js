import {link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
