const CategoryTitle = props => {
  return (
    <h1 style={{ marginLeft: '3em', fontWeight: 400, color: '#555' }}>
      {props.children}
    </h1>
  )
}

export default CategoryTitle
