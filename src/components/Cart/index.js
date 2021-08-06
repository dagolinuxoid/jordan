import CategoryTitle from 'components/CategoryTitle'
import React from 'react'

function Cart(props) {
  const ItemsInBag = () => {
    return props.items.map(item => (
      <li key={item.id}>
        {item.id} {item.title}{' '}
        <button onClick={() => props.removeSelectionById(item.id, 'selected')}>
          remove
        </button>
      </li>
    ))
  }

  return (
    <div>
      <CategoryTitle>Cart items</CategoryTitle>
      <ul>
        <ItemsInBag />
      </ul>
    </div>
  )
}

export default Cart
