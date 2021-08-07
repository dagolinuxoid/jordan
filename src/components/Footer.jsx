// inline styles: bad practices but not bad for fast prototyping
const container = {
  background: 'rgb(39,39,39)',
  color: '#fff',
  padding: '2em',
  fontWeight: '600',
  fontFamily: 'Noto Serif',
}

const Footer = () => {
  return <div style={container}>Footer at the bottom</div>
}

export default Footer
