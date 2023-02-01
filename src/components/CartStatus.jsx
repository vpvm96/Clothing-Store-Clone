import React from "react"
import Icon from "../assets/icons/icon"
import useCart from "../hooks/useCart"

const CartStatus = () => {
  const {
    cartQuery: { data: products },
  } = useCart()

  return (
    <div className="relative">
      <div className="text-2xl">
        <Icon name="shoppingCart" />
      </div>
      {products && (
        <p className="w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  )
}

export default CartStatus
