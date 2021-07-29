import React from 'react'
import Cart from '../components/Cart'

const Home = props => {
  const { isLoading, sneakers, cartItems, updateChoice, unmarkItem } = props
  return (
    <React.Fragment>
      <p>All Sneakers</p>
      {isLoading ? (
        'Loading...'
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {sneakers.map(item => {
            const { id, title, price, selected, liked } = item
            return (
              <li style={{ border: '1px solid', marginBottom: 5 }} key={id}>
                <div>
                  <p>
                    {id} {title}
                  </p>
                  <span>{price}</span>
                  <button onClick={() => updateChoice(id, 'selected')}>
                    {selected ? '-' : '+'}
                  </button>
                  <input
                    style={{ marginLeft: 5 }}
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
