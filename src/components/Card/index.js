import Button from 'components/Button'

import product_image from 'assets/sneakers/1.jpg'

import style from 'components/Card/Card.module.scss'

// import { ReactComponent as CartIcon } from 'assets/liked.svg'

// const Product = ({ id, title, price, liked, selected, updateChoice }) => {
//   return (
//     <div className={style.container}>
//       <div
//         className={style.face}
//         style={{
//           backgroundImage: `url(${product_image})`,
//         }}
//       >
//         <h3>{title}</h3>
//         <span>{price} USD</span>
//       </div>

//       <div className={style.overlay}>
//         <div className={style.content}>
//           <Button onClick={() => updateChoice(id, 'selected')}>
//             {selected ? 'Remove from bag' : 'Add to bag'}
//           </Button>
//           <hr />
//           <input
//             id="favorite"
//             type="checkbox"
//             checked={liked}
//             onChange={() => updateChoice(id, 'liked')}
//           />
//           <label htmlFor="favorite">
//             {liked ? 'remove from favorites' : 'add to favorites'}
//           </label>
//         </div>
//       </div>
//     </div>
//   )
// }

const Card = ({ title, price }) => {
  return (
    <li className={style.card}>
      <img src={product_image} alt="product" className={style.picture} />
      <div className={style.info}>
        <div className={style.titlePrice}>
          <h3>{title}</h3>
          <b>{price} USD</b>
        </div>
        <div className={style.actions}>
          <Button>Add to bag</Button>
          <Button>Add to favorites</Button>
        </div>
      </div>
    </li>
  )
}

export default Card
