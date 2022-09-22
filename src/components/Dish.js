import './Dish.css'

const Dish = ({ name, desc, img, price }) => {
  return (<div className="dish">
    <div className="img-container">
      <img src={img} alt={desc} />
    </div>
    <div className='content'>
      <p className="name">
        <strong>{name}</strong>
      </p>
      <p className="desc">
        {desc}
      </p>
      <p className="price">
        R$ <strong>{price}</strong>
      </p>
    </div>
  </div>)
}

export default Dish