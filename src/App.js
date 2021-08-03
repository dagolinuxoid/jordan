import React from 'react'
import { Route } from 'react-router-dom'

import api from 'api/axios_instance'

import Home from 'pages/Home'
import Bookmarks from 'pages/Bookmarks'

import Header from 'components/Header'

export default () => {
  const [sneakers, setSneakers] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [cartItems, setCartItems] = React.useState([])

  // really?
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
    <React.Fragment>
      <Header />
      <Route path="/" exact>
        <Home
          sneakers={sneakers}
          cartItems={cartItems}
          isLoading={isLoading}
          updateChoice={updateChoice}
          unmarkItem={unmarkItem}
        />
      </Route>
      <Route path="/bookmarks" exact>
        <Bookmarks allItems={sneakers} unmarkItem={updateChoice} />
      </Route>
      {/* TODO Route path="/orders" */}
    </React.Fragment>
  )
}
