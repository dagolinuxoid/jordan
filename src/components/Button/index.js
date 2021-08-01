import styles from 'components/Button/Button.module.scss'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  )
}

export default Button
