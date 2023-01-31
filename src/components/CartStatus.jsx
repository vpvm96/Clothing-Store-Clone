import React from "react"
import { useQuery } from "@tanstack/react-query"
import { firebaseGetCart } from "../apis/firebaseService"
import { useAuthContext } from "../context/AuthContext"
import Icon from "../assets/icons/icon"

const CartStatus = () => {
  const { uid } = useAuthContext()
  const { data: products } = useQuery(["carts"], () => firebaseGetCart(uid))

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
