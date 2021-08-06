import React from 'react'

import CategoryTitle from 'components/CategoryTitle'
import Button from 'components/Button'

import styled from 'styled-components'

const CartItem = styled.li`
  color: #000;
  display: 'flex';
`

function Cart(props) {
  const ItemsInBag = () => {
    return props.items.map(item => (
      <CartItem key={item.id}>
        <img src={item.path} alt="sneakers" style={{ maxWidth: '200px' }} />
        <div>
          <p>{item.title}</p>
          <Button
            onClick={() => props.removeSelectionById(item.id, 'selected')}
          >
            remove
          </Button>
        </div>
      </CartItem>
    ))
  }

  return (
    <div>
      <CategoryTitle>Cart items</CategoryTitle>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2em' }}>
        <ItemsInBag />
      </ul>
    </div>
  )
}

export default Cart
