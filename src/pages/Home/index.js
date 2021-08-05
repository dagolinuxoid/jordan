import React from 'react'

// import Cart from 'components/Cart'
import Card from 'components/Card'

import s from 'pages/Home/Home.module.scss'

const Home = props => {
  const { isLoading, sneakers, cartItems, updateChoice, unmarkItem } = props
  return (
    <React.Fragment>
      <h1 style={{ marginLeft: '3em' }}>All sneakers</h1>
      {isLoading ? (
        'LOADING...'
      ) : (
        <ul className={s.products}>
          {sneakers.map(item => {
            const { id, title, price, selected, liked, path } = item
            return (
              <Card
                key={id}
                id={id}
                title={title}
                price={price}
                path={path}
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
