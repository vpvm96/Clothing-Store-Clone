import React from "react"
import Icon from "../assets/icons/icon"
import useCart from "../hooks/useCart"

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1"

const CartItem = ({ product }) => {
  const { id, image, title, option, quantity, price } = product
  const { addOrUpdateItem, removeItem } = useCart()

  const handleMinus = () => {
    if (quantity < 2) return
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 })
  }
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 })
  }
  const handleDelete = () => removeItem.mutate(id)

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>₩{price}</p>
        </div>
        <div className="text-2xl items-center flex justify-end mr-10 -mt-10 gap-2">
          <button className={ICON_CLASS} onClick={handleMinus}>
            <Icon name="minus" />
          </button>
          <span>{quantity}</span>
          <button className={ICON_CLASS} onClick={handlePlus}>
            <Icon name="plus" />
          </button>
          <button className={ICON_CLASS} onClick={handleDelete}>
            <Icon name="trash" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
