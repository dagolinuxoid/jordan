import React from 'react'

const Bookmarks = props => {
  const likedItems = props.allItems.filter(e => e.liked)
  return (
    <React.Fragment>
      <h2>My bookmarked snekers</h2>
      <ul>
        {likedItems.map(e => {
          return (
            <li>
              {e.title}{' '}
              <input
                type="checkbox"
                checked={e.liked}
                onChange={() => props.unmarkItem(e.id, 'liked')}
              />
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default Bookmarks
