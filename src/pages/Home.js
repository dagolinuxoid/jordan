import React from 'react'
import Cart from 'components/Cart'

const Home = props => {
  const { isLoading, sneakers, cartItems, updateChoice, unmarkItem } = props
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>All Sneakers</p>
      {isLoading ? (
        'Loading...'
      ) : (
        <ul>
          {sneakers.map(item => {
            const { id, title, price, selected, liked } = item
            return (
              <li>
                <div>
                  <p>
                    {id} {title}
                  </p>
                  <span>{price}</span>
                  <button onClick={() => updateChoice(id, 'selected')}>
                    {selected ? '-' : '+'}
                  </button>
                  <input
                    type="checkbox"
                    checked={liked}
                    onChange={() => updateChoice(id, 'liked')}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      )}
      <Cart items={cartItems} removeSelectionById={unmarkItem} />
    </React.Fragment>
  )
}

export default Home
