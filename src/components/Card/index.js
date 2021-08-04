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
          <Button onClick={() => updateChoice(id, 'selected')}>
            {selected ? 'Remove from cart' : 'Add to cart'}
          </Button>
          <div
            onClick={() => updateChoice(id, 'liked')}
            style={{
              cursor: 'pointer',
              border: '1px solid #ddd',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              padding: 5,
            }}
          >
            {liked ? (
              <span className="material-icons" style={{ color: 'orange' }}>
                favorite
              </span>
            ) : (
              <span className="material-icons" style={{ color: '#666' }}>
                favorite_border
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card
