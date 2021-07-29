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
      <h2 style={{ textAlign: 'center' }}>Heading of a caRT element</h2>
      <ul>
        <ItemsInBag />
      </ul>
    </div>
  )
}

export default Cart
