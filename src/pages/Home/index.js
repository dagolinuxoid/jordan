import React from 'react'

import Card from 'components/Card'
import CategoryTitle from 'components/CategoryTitle'
import Search from 'components/Search'

import s from 'pages/Home/Home.module.scss'

const Home = props => {
  const { isLoading, sneakers, updateChoice } = props
  const [searchTerm, setSearchTerm] = React.useState('')
  const onSearch = text => {
    setSearchTerm(text)
  }

  return (
    <React.Fragment>
      <CategoryTitle>
        All sneakers{' '}
        <Search value={searchTerm} onSearch={e => onSearch(e.target.value)} />
      </CategoryTitle>
      {isLoading ? (
        'LOADING...'
      ) : (
        <ul className={s.products}>
          {sneakers
            .filter(item =>
              searchTerm
                ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
                : item
            )
            .map(item => {
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
