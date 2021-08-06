import React from 'react'

import Card from 'components/Card'
import CategoryTitle from 'components/CategoryTitle'

import s from 'pages/Home/Home.module.scss'

const Home = props => {
  const { isLoading, sneakers, cartItems, updateChoice, unmarkItem } = props
  return (
    <React.Fragment>
      <CategoryTitle>All sneakers</CategoryTitle>
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
    </React.Fragment>
  )
}

export default Home
