import React from 'react'

import CategoryTitle from 'components/CategoryTitle'
import Card from 'components/Card'

const Bookmarks = props => {
  const likedItems = props.allItems.filter(item => item.liked)
  return (
    <React.Fragment>
      <CategoryTitle>My bookmarked sneakers</CategoryTitle>
      <ul
        style={{
          display: 'flex',
          gap: '2em',
          marginBottom: '3em',
          padding: '2em',
        }}
      >
        {likedItems.map(fav => {
          return (
            <Card
              key={fav.id}
              title={fav.title}
              id={fav.id}
              selected={fav.selected}
              liked={fav.liked}
              path={fav.path}
              price={fav.price}
              updateChoice={props.updateChoice}
            />
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default Bookmarks
