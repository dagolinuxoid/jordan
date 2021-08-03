import React from 'react'

// import Cart from 'components/Cart'
import Card from 'components/Card'

import s from 'pages/Home/Home.module.scss'

const Home = props => {
  const { isLoading, sneakers, cartItems, updateChoice, unmarkItem } = props
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>All Sneakers</p>
      {isLoading ? (
        'Loading...'
      ) : (
        <ul className={s.products}>
          {sneakers.map(item => {
            const { id, title, price, selected, liked } = item
            return (
              <Card
                id={id}
                title={title}
                price={price}
                selected={selected}
                liked={liked}
                updateChoice={updateChoice}
              />
            )
          })}
        </ul>
      )}
      {/* <Cart items={cartItems} removeSelectionById={unmarkItem} /> */}
    </React.Fragment>
  )
}

export default Home
