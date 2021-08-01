import style from 'components/Product/Product.module.scss'
import product_image from 'assets/sneakers/1.jpg'
import Button from 'components/Button'
// import { ReactComponent as CartIcon } from 'assets/liked.svg'

const Product = ({ id, title, price, liked, selected, updateChoice }) => {
  return (
    <div className={style.container}>
      <div
        className={style.face}
        style={{
          backgroundImage: `url(${product_image})`,
        }}
      >
        <h3>{title}</h3>
        <span>{price} USD</span>
      </div>

      <div className={style.overlay}>
        <div className={style.content}>
          <Button onClick={() => updateChoice(id, 'selected')}>
            {selected ? 'Remove from bag' : 'Add to bag'}
          </Button>
          <hr />
          <input
            id="favorite"
            type="checkbox"
            checked={liked}
            onChange={() => updateChoice(id, 'liked')}
          />
          <label htmlFor="favorite">
            {liked ? 'remove from favorites' : 'add to favorites'}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Product
