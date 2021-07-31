import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">Home page</Link>
      </div>
      <div>
        <Link to="/bookmarks">Bookmarks page (Favorites)</Link>
      </div>
    </div>
  )
}

export default Header
