import './index.css'

const DishItem = props => {
  const {dishDetails, addItemtoCart, removeItemfromCart, cartItems} = props
  const {
    dishId,
    dishName,
    dishAvailability,
    dishCurrency,
    dishType,
    dishCalories,
    dishImage,
    dishPrice,
    dishDescription,
    addonCat,
  } = dishDetails

  const decrementQuantity = () => {
    removeItemfromCart(dishDetails)
  }

  const incrementQuantity = () => {
    addItemtoCart(dishDetails)
  }

  const getItemsQuantity = () => {
    const cartItem = cartItems.find(eachItem => eachItem.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  return (
    <li className="dishItem-card">
      <div className="dish-item-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="description">{dishDescription}</p>
        {dishAvailability ? (
          <div className="button-container">
            <button
              type="button"
              className="minus-button"
              onClick={decrementQuantity}
            >
              -
            </button>
            <p className="value">{getItemsQuantity()}</p>
            <button
              type="button"
              className="minus-button"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="add-on-cat">Customizations available</p>
        )}
      </div>
      <p className="calories">{dishCalories} calories</p>
      <img src={dishImage} alt={dishName} className="image" />
    </li>
  )
}

export default DishItem
