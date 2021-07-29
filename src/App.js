// App react component | change the line to test sync in codeSandbox | directly from github
import React from 'react'
import api from './api/contacts'
import Cart from './components/Cart'

export default () => {
  const [sneakers, setSneakers] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(
    () => setCartItems(sneakers.filter(item => item.selected)),
    [sneakers]
  )

  React.useEffect(function getSneakersEffect() {
    api.get('items').then(({ data }) => {
      setSneakers(data)
      setIsLoading(false)
    })
  }, [])

  const updateChoice = (id, key) => {
    const isMarked = sneakers.find(e => e.id === id)[key]
    if (isMarked) unmarkItem(id, key)
    else markItem(id, key)
  }

  const markItem = (id, key) => {
    const chosenItem = sneakers.find(e => e.id === id)
    api.put(`items/${id}`, { ...chosenItem, [key]: true })
    setSneakers(prev =>
      prev.map(e => (e.id === id ? { ...e, [key]: true } : e))
    )
  }

  const unmarkItem = (id, key) => {
    const chosenItem = sneakers.find(e => e.id === id)
    api.put(`items/${id}`, { ...chosenItem, [key]: false })
    setSneakers(prev => {
      return prev.map(e => (e.id === id ? { ...e, [key]: false } : e))
    })
  }

  return (
    <>
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
    </>
  )
}
