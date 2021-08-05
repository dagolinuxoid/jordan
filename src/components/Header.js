import React from 'react'
import { Link } from 'react-router-dom'

// let's use inline styling instead of css modules just as an alternative

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        textTransform: 'uppercase',
        justifyContent: 'space-between',
        padding: '2em 4em',
      }}
    >
      <div>
        <Link
          to="/"
          style={{ fontWeight: 900, color: 'inherit', fontSize: '20px' }}
        >
          jordan_store
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '2em' }}>
          <Link to="/bookmarks" style={{ color: 'inherit' }}>
            <i className="material-icons" style={{ marginRight: 5 }}>
              favorite_border
            </i>
            favorites
          </Link>
        </div>
        <div>
          <Link to="/cart" style={{ color: '#000' }}>
            <i className="material-icons" style={{ marginRight: 5 }}>
              shopping_cart
            </i>
            cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
