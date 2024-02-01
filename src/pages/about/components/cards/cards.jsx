import "./cards.css"
const Cards = ({img, title, price, id}) => {
  return (
    <div className='card-wrapper'>
      <div className='card'>
      <img src={img} alt="" />
      </div>
      <p className='card-title'>{title}</p>
      <p className='card-price'>{price}</p>
    </div>
  )
}

export default Cards
