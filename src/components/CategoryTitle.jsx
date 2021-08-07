const CategoryTitle = props => {
  return (
    <h1
      style={{
        marginLeft: '3em',
        fontWeight: 400,
        color: '#555',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {props.children}
    </h1>
  )
}

export default CategoryTitle
