import Button from 'components/Button'

import s from 'components/Card/Card.module.scss'

const Card = ({ title, price, id, selected, liked, path, updateChoice }) => {
  return (
    <li className={s.card}>
      <img src={path} alt="Sneakers" className={s.pic} />
      <div className={s.overlay}>
        <div className={s.info}>
          <div>{title}</div>
          <div>${price}</div>
        </div>
        <div className={s.actions}>
          <Button>{selected ? 'remove from cart' : 'Add to cart'}</Button>
          <Button>{liked ? 'unlike' : 'like'}</Button>
        </div>
      </div>
    </li>
  )
}

export default Card
